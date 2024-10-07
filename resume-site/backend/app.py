from fastapi import FastAPI
from pydantic import BaseModel
from models.chat_bot import get_response

app = FastAPI()

class Message(BaseModel):
    message: str

@app.post("/api/chat")
async def chat(msg: Message):
    response = get_response(msg.message)
    return {"response": response}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
