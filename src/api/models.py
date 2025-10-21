from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, Boolean, JSON, ForeignKey, Table, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship

db = SQLAlchemy()

class User(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    email: Mapped[str] = mapped_column(String(120), unique=True, nullable=False)
    password: Mapped[str] = mapped_column(nullable=False)
    list_of_characters: Mapped[list] = mapped_column(JSON, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "list_of_characters": self.list_of_characters
        }

character_skills = Table(
    "character_skills",
    db.Model.metadata,
    db.Column("character_id", db.Integer, db.ForeignKey("character.id"), primary_key=True),
    db.Column("skill_id", db.Integer, db.ForeignKey("skills.id"), primary_key=True)
) 

class Skills(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(75), nullable=False)
    ability: Mapped[str] = mapped_column(String(15), nullable=False)
    proficient: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    expert: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)

    characters = relationship(
        "Character", 
        secondary="character_skills", 
        back_populates="skills")

    def serialize(self):
        return {
            "id": self.id, 
            "name": self.name, 
            "ability": self.ability,
            "proficient": self.proficient,
            "expert": self.expert}

class Character(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(25), nullable=False)
    race: Mapped[str] = mapped_column(String(15), nullable=False)
    char_class: Mapped[str] = mapped_column(String(20), nullable=False)
    sub_class: Mapped[str] = mapped_column(String(20), nullable=False)
    level: Mapped[int] = mapped_column(Integer, nullable=False)
    hp: Mapped[int] = mapped_column(Integer, nullable=False)
    armor_class: Mapped[int] = mapped_column(Integer, nullable=False)
    hit_dice: Mapped[str] = mapped_column(String(5), nullable=False)
    speed: Mapped[int] = mapped_column(Integer, nullable=False)
    initiative: Mapped[int] = mapped_column(Integer, nullable=False)
    proficiency_bonus: Mapped[int] = mapped_column(Integer, nullable=False)

    skills = relationship(
        "Skills",
        secondary="character_skills",
        back_populates="characters"
    )


    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "race": self.race,
            "char_class": self.char_class,
            "sub_class": self.sub_class,
            "level": self.level,
            "hp": self.hp,
            "armor_class": self.armor_class,
            "hit_dice": self.hit_dice,
            "speed": self.speed,
            "initiative": self.initiative,
            "proficiency_bonus": self.proficiency_bonus,
            "skills": [skill.serialize() for skill in self.skills]
        }



    # Models for inventory
class Item(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    type: Mapped[str] = mapped_column(String(50), nullable=False)  
    description: Mapped[str] = mapped_column(String(255), nullable=True)
    stats: Mapped[dict] = mapped_column(JSON, nullable=True)  

   
    equipped_by = relationship("EquippedItem", back_populates="item")
    in_bag_of = relationship("BagItem", back_populates="item")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "type": self.type,
            "description": self.description,
            "stats": self.stats,   
        }