from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, Boolean, JSON, ForeignKey, Table
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


class Race(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(25), nullable=False)
    characters = relationship("Character", back_populates="race")

    def serialize(self):
        return {
            "id": self.id, 
            "name": self.name}


class charClass(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(25), nullable=False)
    characters = relationship("Character", back_populates="char_class")

    def serialize(self):
        return {
            "id": self.id, 
            "name": self.name}


class subClass(db.Model):
    id:Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(25), nullable=False)
    characters = relationship("Character", back_populates="sub_class")

    def serialize(self):
        return {
            "id": self.id, 
            "name": self.name}


class Skills(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(75), nullable=False)
    modifier: Mapped[str] = mapped_column(String(5), nullable=False)

    characters = relationship("Character", back_populates="skills")

    def serialize(self):
        return {
            "id": self.id, 
            "name": self.name, 
            "modifier": self.modifier}

class Character(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(25), nullable=False)
    race_id: Mapped[int] = mapped_column(ForeignKey("race.id"), nullable=False)
    char_class_id: Mapped[int] = mapped_column(ForeignKey("char_class.id"), nullable=False)
    sub_class_id: Mapped[int] = mapped_column(ForeignKey("sub_class.id"), nullable=False)

    race = relationship("Race", back_populates="characters")
    char_class = relationship("charClass", back_populates="characters")
    sub_class = relationship("subClass", back_populates="characters")
    skills = relationship("Skills", back_populates="characters")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "race": self.race.serialize() if self.race else None,
            "char_class": self.char_class.serialize() if self.char_class else None,
            "sub_class": self.sub_class.serialize() if self.sub_class else None,
            "skills": [skill.serialize() for skill in self.skills]
        }