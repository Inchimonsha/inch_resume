import sys
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer

# Load your pre-trained model and tokenizer (example using Hugging Face Transformers)
model_name = "gpt2"  # Replace with your model name
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

def generate_response(user_input):
    inputs = tokenizer.encode(user_input + tokenizer.eos_token, return_tensors='pt')
    outputs = model.generate(inputs, max_length=50, num_return_sequences=1)
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return response

if __name__ == "__main__":
    user_input = sys.argv[1]  # Get input from command line arguments
    response = generate_response(user_input)
    print(response)  # Output the response to be captured by Ruby backend



# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# from models.chat_bot import get_response

# app = FastAPI()

# # Allow CORS for all origins (adjust as needed)
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # Change this to specific origins in production
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# class Message(BaseModel):
#     message: str

# @app.post("/api/chat")
# async def chat(msg: Message):
#     response = get_response(msg.message)
#     return {"response": response}

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="127.0.0.1", port=5000)