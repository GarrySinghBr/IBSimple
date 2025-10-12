from sqlalchemy import Column, Integer, String
from app.db.base import Base

class Ingredient(Base):
    __tablename__ = "ingredients"
    ingredient_id = Column(Integer, primary_key=True, index=True)
    ingredient_name = Column(String, unique=True, nullable=False, index=True)
    category = Column(String, nullable=False, index=True)

    # relationships, add later

    # add __repr__ dunder method