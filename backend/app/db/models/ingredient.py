from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.db.base import Base


class Ingredient(Base):
    __tablename__ = "ingredients"

    ingredient_id = Column(Integer, primary_key=True, index=True)
    ingredient_name = Column(String(120), unique=True, nullable=False, index=True)
    category_id = Column(Integer, ForeignKey("categories.category_id"), nullable=False, index=True)

    category = relationship("Category", back_populates="ingredients")

    def __repr__(self):
        return (
            f"<Ingredient(id={self.ingredient_id}, "
            f"name='{self.ingredient_name}', "
            f"category_id={self.category_id})>"
        )
