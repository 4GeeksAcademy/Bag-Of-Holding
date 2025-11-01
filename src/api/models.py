from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, Boolean, JSON, Integer, ForeignKey, Table
from sqlalchemy.orm import Mapped, mapped_column, relationship

db = SQLAlchemy()

# Tables
character_skills = Table(
    "character_skills",
    db.Model.metadata,
    db.Column("character_id", Integer, ForeignKey(
        "character.id"), primary_key=True),
    db.Column("skill_id", Integer, ForeignKey("skills.id"), primary_key=True)
)

character_consumables = Table(
    "character_consumables",
    db.Model.metadata,
    db.Column("character_id", Integer, ForeignKey(
        "character.id"), primary_key=True),
    db.Column("consumable_id", Integer, ForeignKey(
        "consumable.id"), primary_key=True)
)

# Models


class User(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    email: Mapped[str] = mapped_column(
        String(120), unique=True, nullable=False)
    password: Mapped[str] = mapped_column(nullable=False)

    characters = relationship("Character", back_populates="user")

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "characters": [char.serialize() for char in self.characters]
        }


class Skills(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(75), nullable=False)
    ability: Mapped[str] = mapped_column(String(15), nullable=False)
    proficient: Mapped[bool] = mapped_column(
        Boolean, default=False, nullable=False)
    expert: Mapped[bool] = mapped_column(
        Boolean, default=False, nullable=False)

    characters = relationship(
        "Character",
        secondary="character_skills",
        back_populates="skills"
    )

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "ability": self.ability,
            "proficient": self.proficient,
            "expert": self.expert
        }


class Consumable(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(25), nullable=False)
    amount: Mapped[int] = mapped_column(Integer, nullable=False)

    characters = relationship(
        "Character",
        secondary="character_consumables",
        back_populates="consumables"
    )

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "amount": self.amount
        }


class Stat(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(25), nullable=False)
    value: Mapped[int] = mapped_column(Integer, nullable=False)
    proficient: Mapped[bool] = mapped_column(
        Boolean, default=False, nullable=False)

    character_id: Mapped[int] = mapped_column(ForeignKey("character.id"))
    character = relationship("Character", back_populates="stats")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "value": self.value,
            "proficient": self.proficient
        }


class Item(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    type: Mapped[str] = mapped_column(String(50), nullable=False)
    description: Mapped[str] = mapped_column(String(255), nullable=True)
    stats: Mapped[dict] = mapped_column(JSON, nullable=True)

    inventory_links = relationship("CharacterItem", back_populates="item")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "type": self.type,
            "description": self.description,
            "stats": self.stats
        }


class CharacterItem(db.Model):
    __tablename__ = "character_inventory"
    character_id: Mapped[int] = mapped_column(
        ForeignKey("character.id"), primary_key=True)
    item_id: Mapped[int] = mapped_column(
        ForeignKey("item.id"), primary_key=True)
    quantity: Mapped[int] = mapped_column(Integer, default=1)
    equipped: Mapped[bool] = mapped_column(Boolean, default=False)

    character = relationship("Character", back_populates="inventory_links")
    item = relationship("Item", back_populates="inventory_links")


class Character(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"))
    name: Mapped[str] = mapped_column(String(25), nullable=False)
    race: Mapped[str] = mapped_column(String(15), nullable=False)
    characterClass: Mapped[str] = mapped_column(String(20), nullable=False)
    subClass: Mapped[str] = mapped_column(String(20), nullable=False)
    level: Mapped[int] = mapped_column(Integer, default=1)
    hp: Mapped[int] = mapped_column(Integer, default=0)
    ac: Mapped[int] = mapped_column(Integer, default=0)
    hitDice: Mapped[str] = mapped_column(String(5), default="")
    speed: Mapped[int] = mapped_column(Integer, default=0)
    initiative: Mapped[int] = mapped_column(Integer, default=0)
    proficiency: Mapped[int] = mapped_column(Integer, default=0)

    user = relationship("User", back_populates="characters")

    skills = relationship(
        "Skills",
        secondary="character_skills",
        back_populates="characters"
    )

    consumables = relationship(
        "Consumable",
        secondary="character_consumables",
        back_populates="characters"
    )

    stats = relationship("Stat", back_populates="character",
                         cascade="all, delete-orphan")
    inventory_links = relationship(
        "CharacterItem", back_populates="character", cascade="all, delete-orphan")

    @property
    def inventory(self):
        return [link.item for link in self.inventory_links]

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "race": self.race,
            "characterClass": self.characterClass,
            "subClass": self.subClass,
            "level": self.level,
            "hp": self.hp,
            "ac": self.ac,
            "hitDice": self.hitDice,
            "speed": self.speed,
            "initiative": self.initiative,
            "proficiency": self.proficiency,
            "skills": [s.serialize() for s in self.skills],
            "consumables": [c.serialize() for c in self.consumables],
            "stats": [s.serialize() for s in self.stats],
            "inventory": [
                {
                    **link.item.serialize(),
                    "quantity": link.quantity,
                    "equipped": link.equipped
                } for link in self.inventory_links
            ],
            "user_id": self.user_id
        }
