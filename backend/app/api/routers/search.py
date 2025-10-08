from fastapi import APIRouter
from app.schemas.SearchRequest import SearchRequest

router = APIRouter()

@router.get("/")
def connection():
    return("Welcome to IBSimple Backend")

@router.post("/search")
def searchRequest(request: SearchRequest):
    return("Received: " + request.ingredients)
