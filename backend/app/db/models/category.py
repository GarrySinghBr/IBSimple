from sqlalchemy import Column, Integer, String, CheckConstraint
from sqlalchemy.orm import relationship
from app.db.base import Base


class Category(Base):
    __tablename__ = "categories"
    __table_args__ = (
        CheckConstraint("severity IN (0, 1, 2)", name="ck_categories_severity_0_2"),
    )

    category_id = Column(Integer, primary_key=True, index=True)
    category_name = Column(String(120), unique=True, nullable=False, index=True)
    # 0 = safe, 1 = caution, 2 = avoid
    severity = Column(Integer, nullable=False)

    # One category → many ingredients
    ingredients = relationship("Ingredient", back_populates="category")

    def __repr__(self):
        return f"<Category(id={self.category_id}, name='{self.category_name}', severity={self.severity})>"
