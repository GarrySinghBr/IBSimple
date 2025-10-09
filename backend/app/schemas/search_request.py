from pydantic import BaseModel

class SearchRequest(BaseModel):
    ingredients: str