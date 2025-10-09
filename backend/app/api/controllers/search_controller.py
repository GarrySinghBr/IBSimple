from app.schemas.search_request import SearchRequest
from app.services.normalization import normalize_input

class SearchController():
    def __init__(self):
        pass
    
    @staticmethod
    def search_ingredients(raw_ingredients: str):
        ingredients_list = normalize_input(raw_ingredients)
        return ingredients_list