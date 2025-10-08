from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def connection():
    return("Welcome to IBSimple Backend")

@router.post("/search")
def searchRequest(request: dict):
    return("Received: " + request.get("ingredients", ""))
