from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

api = FastAPI()

api.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@api.get("/")
def connection():
    return("Welcome to IBSimple Backend")

@api.post("/search")
def searchRequest(request: dict):
    return("Received: " + request.get("ingredients", ""))