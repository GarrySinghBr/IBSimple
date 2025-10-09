from fastapi import APIRouter
from app.api.controllers.search_controller import SearchController
from app.schemas.search_request import SearchRequest

router = APIRouter()

@router.get("/")
def connection():
    return("Welcome to IBSimple Backend")

@router.post("/search")
def searchRequest(request: SearchRequest):
    print(SearchController.search_ingredients(request.ingredients))
    return("successful request!")
