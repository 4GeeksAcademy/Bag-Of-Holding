"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/sign_up', methods=['POST'])
def handle_sign_up():

    body = request.json
    new_email = body["email"]
    new_password = body["password"]
    new_user = User(
        email=new_email,
        password=generate_password_hash(new_password)
    )

    response_body = {
        "message": "New user successfully created!",
        "user": new_user.serialize()
    }
    db.session.add(new_user)
    db.session.commit()

    return jsonify(response_body), 200


@api.route('/log_in', methods=['POST'])
def handle_log_in():

    body = request.json
    new_email = body["email"]
    new_password = body["password"]
    user = User.query.filter_by(email=new_email).first()
    if not user:
        return jsonify("Matching e-mail not found"), 401

    if not check_password_hash(user.password, new_password):
        return jsonify("Incorrect password"), 401

    token = create_access_token(identity=new_email)

    response_body = {
        "message": "Welcome back, adventurer!",
        "user": user.serialize(),
        "token": token
    }

    return jsonify(response_body), 200


@api.route('/user', methods=['GET'])
def handle_users():
    users = User.query.all()
    response_body = {
        "users": [item.serialize() for item in users]
    }
    return jsonify(response_body), 200


@api.route('/user/characters', methods=['GET'])
def handle_characters():
    body = request.json
    user_email = body["id"]
    user = db.session.get(User, user_email)
    response_body = {
        "characters": user.characters
    }
    return jsonify(response_body), 200
