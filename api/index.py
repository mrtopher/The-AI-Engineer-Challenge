from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from openai import APIStatusError, OpenAI
from pydantic import BaseModel
import os

# Load .env from the project root (parent of this api/ package).
load_dotenv(Path(__file__).resolve().parent.parent / ".env")

app = FastAPI()

# CORS so the frontend can talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

_client: OpenAI | None = None


def get_openai_client() -> OpenAI:
    """Return a shared OpenAI client, created on first use."""
    global _client
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise HTTPException(status_code=500, detail="OPENAI_API_KEY not configured")
    if _client is None:
        _client = OpenAI(api_key=api_key)
    return _client

class ChatRequest(BaseModel):
    message: str


def _openai_error_response(exc: APIStatusError) -> HTTPException:
    """Map OpenAI API errors to user-facing HTTP responses."""
    body = exc.body if isinstance(exc.body, dict) else {}
    error = body.get("error", {}) if isinstance(body.get("error"), dict) else {}
    code = error.get("code", "")

    if exc.status_code == 429 and code == "insufficient_quota":
        return HTTPException(
            status_code=429,
            detail=(
                "OpenAI account has no remaining quota. Add billing or credits at "
                "https://platform.openai.com/account/billing, then try again."
            ),
        )

    if exc.status_code == 429:
        return HTTPException(
            status_code=429,
            detail="OpenAI rate limit reached. Wait a moment and try again.",
        )

    if exc.status_code == 401:
        return HTTPException(
            status_code=500,
            detail="Invalid OPENAI_API_KEY. Check the key in your .env file.",
        )

    return HTTPException(
        status_code=502,
        detail=f"OpenAI API error ({exc.status_code}): {error.get('message', str(exc))}",
    )


@app.get("/")
def root():
    return {"status": "ok"}

@app.post("/api/chat")
def chat(request: ChatRequest):
    try:
        user_message = request.message
        response = get_openai_client().chat.completions.create(
            model="gpt-5",
            messages=[
                {"role": "system", "content": "You are a supportive mental coach."},
                {"role": "user", "content": user_message}
            ]
        )
        return {"reply": response.choices[0].message.content}
    except APIStatusError as e:
        raise _openai_error_response(e) from e
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Unexpected server error: {str(e)}")
