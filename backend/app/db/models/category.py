from sqlalchemy import Column, Integer, String
from app.db.base import Base

class Categories(Base):
    __tablename__ = "categories"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    severity = Column(Integer)

    # add relationships

    # add _repr_ dunder method