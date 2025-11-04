from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Character, Stat, Skill, Consumable
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    get_jwt_identity,
    jwt_required
)

api = Blueprint('api', __name__)

CORS(api)

@api.route('/sign_up', methods=['POST'])
def handle_sign_up():
    body = request.get_json()
    email = body.get("email")
    password = body.get("password")

    if not email or not password:
        return jsonify({"error": "Missing email or password"}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({"error": "User already exists"}), 400

    new_user = User(
        email = new_email, 
        password = generate_password_hash(new_password)
        )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({
        "message": "User successfully created",
        "user": new_user.serialize()
    }), 201


@api.route('/log_in', methods=['POST'])
def handle_log_in():

    body = request.json
    new_email = body["email"]
    new_password = body["password"]
    user = User.query.filter_by(email = new_email).first()
    if not user:
        return jsonify("Matching e-mail not found"), 401
    
    if not check_password_hash(user.password, new_password):
        return jsonify("Incorrect password"), 401
    
    token = create_access_token(identity = new_email)

    response_body = {
        "message": "Welcome back, adventurer!",
        "user": user.serialize(),
        "token": token
    }
   

    return jsonify(response_body), 200

@api.route('/user', methods=["GET"])
# @jwt_required()
def handle_user():
    user_email = get_jwt_identity()
    print("user_email HERE:", user_email)
    user = User.query.filter_by(email = user_email).first()
    resp = {
        "data": user.serialize(),
        "message": "User found"
    }
    return jsonify(resp), 200
