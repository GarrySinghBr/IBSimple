from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.db.base import Base


class Alias(Base):
    __tablename__ = "aliases"

    # --- Columns ---
    alias_id = Column(Integer, primary_key=True, index=True)
    alias_name = Column(String(120), unique=True, nullable=False, index=True)
    ingredient_id = Column(Integer, ForeignKey("ingredients.ingredient_id"), nullable=False, index=True)

    # --- Relationships ---
    ingredient = relationship("Ingredient", back_populates="aliases")

    # --- Debug representation ---
    def __repr__(self):
        return (
            f"<Alias(id={self.alias_id}, "
            f"name='{self.alias_name}', "
            f"ingredient_id={self.ingredient_id})>"
        )
