from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routers import search

api = FastAPI()

api.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
api.include_router(search.router)