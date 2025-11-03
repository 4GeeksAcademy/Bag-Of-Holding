"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Character, Stat, Skill
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


###### LOG IN ENDPOINT ######

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


###### SIGN UP ENDPOINT ######

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


###### USER ENDPOINTS ######

@api.route('/user', methods=['GET'])
def handle_users():
    users = User.query.all()
    response_body = {
        "users": [item.serialize() for item in users]
    }
    return jsonify(response_body), 200


@api.route('/user/<int:user_id>/characters', methods=['GET'])
def handle_characters(user_id):
    user = db.session.get(User, user_id)
    response_body = {
        "characters": [character.serialize() for character in user.characters]
    }
    return jsonify(response_body), 200


###### CHARACTER ENDPOINTS ######

@api.route('/character', methods=['GET'])
def get_character():
    characterInfo = request.json
    keys = ["user_id", "id"]
    if all(key in characterInfo for key in keys):
        character = db.session.query(Character).filter_by(
            id=characterInfo["id"], user_id=characterInfo["user_id"]).first()
        if character:
            return {"Character found": character.serialize()}, 201
        else:
            return {"Error": "Character not found"}, 404
    else:
        return {"Error": "Wrong information submitted"}, 400


@api.route('/character', methods=['POST'])
def add_character():
    characterInfo = request.json
    keys = ["user_id", "name", "race", "characterClass", "subClass"]
    if all(key in characterInfo for key in keys):
        new_character = Character(
            user_id=characterInfo["user_id"],
            name=characterInfo["name"],
            race=characterInfo["race"],
            characterClass=characterInfo["characterClass"],
            subClass=characterInfo["subClass"],
        )
        db.session.add(new_character)
        db.session.commit()

        #  INITIALIZE CHARACTER STATS
        allStats = ["STR", "DEX", "CON", "INT", "WIS", "CHA"]
        for i in range(len(allStats)):
            new_stat = Stat(
                name=allStats[i],
                character_id=new_character.id
            )
            db.session.add(new_stat)

        #  INITIALIZE CHARACTER STATS
        allSkills = [
            {"name": "ATHLETICS", "ability": "STR"},
            {"name": "ACROBATICS", "ability": "DEX"},
            {"name": "SLEIGHT OF HAND", "ability": "DEX"},
            {"name": "STEALTH", "ability": "DEX"},
            {"name": "ARCANA", "ability": "INT"},
            {"name": "HISTORY", "ability": "INT"},
            {"name": "INVESTIGATION", "ability": "INT"},
            {"name": "NATURE", "ability": "INT"},
            {"name": "RELIGION", "ability": "INT"},
            {"name": "ANIMAL HANDLING", "ability": "WIS"},
            {"name": "INSIGHT", "ability": "WIS"},
            {"name": "MEDICINE", "ability": "WIS"},
            {"name": "PERCEPTION", "ability": "WIS"},
            {"name": "SURVIVAL", "ability": "WIS"},
            {"name": "DECEPTION", "ability": "CHA"},
            {"name": "INTIMIDATION", "ability": "CHA"},
            {"name": "PERFORMANCE", "ability": "CHA"},
            {"name": "PERSUASION", "ability": "CHA"}
        ]

        for skill in allSkills:
            new_skill = Skill(
                name=skill["name"],
                ability=skill["ability"],
                character_id=new_character.id
            )
            db.session.add(new_skill)

        db.session.commit()
        return {"New Character added": new_character.serialize()}, 201
    else:
        return {"Error": "Wrong information submitted"}, 400


@api.route('/character', methods=['PUT'])
def update_character():
    characterInfo = request.json
    keys = ["user_id", "id"]
    if all(key in characterInfo for key in keys):
        character = db.session.query(Character).filter_by(
            id=characterInfo["id"], user_id=characterInfo["user_id"]).first()
        if character:
            if "level" in characterInfo:
                character.level = characterInfo["level"]

            if "hp" in characterInfo:
                character.hp = characterInfo["hp"]

            if "ac" in characterInfo:
                character.ac = characterInfo["ac"]

            if "hitDice" in characterInfo:
                character.hitDice = characterInfo["hitDice"]

            if "speed" in characterInfo:
                character.speed = characterInfo["speed"]

            if "initiative" in characterInfo:
                character.initiative = characterInfo["initiative"]

            if "proficiency" in characterInfo:
                character.proficiency = characterInfo["proficiency"]
            db.session.commit()
            return {"Character updated": character.serialize()}, 201
        else:
            return {"Error": "Character not found"}, 404
    else:
        return {"Error": "Wrong information submitted "}, 400


@api.route('/character', methods=['DELETE'])
def delete_character():
    characterInfo = request.json
    keys = ["user_id", "id"]
    if all(key in characterInfo for key in keys):
        character = db.session.query(Character).filter_by(
            id=characterInfo["id"], user_id=characterInfo["user_id"]).first()
        if character:
            db.session.delete(character)
            db.session.commit()
            return {"Character deleted": character.serialize()}, 200
        else:
            return {"Error": "Character not found"}, 404
    else:
        return {"Error": "Wrong information submitted "}, 400
