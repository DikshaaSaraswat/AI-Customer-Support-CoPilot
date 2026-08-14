import os
import joblib
import google.generativeai as genai
from transformers import pipeline
from google.api_core.exceptions import ResourceExhausted
from dotenv import load_dotenv

load_dotenv()

# Queue Model
queue_model = joblib.load("models/queue_model.pkl")
queue_vectorizer = joblib.load("models/queue_vectorizer.pkl")

# Priority Model
priority_model = joblib.load("models/priority_model.pkl")
priority_vectorizer = joblib.load("models/priority_vectorizer.pkl")

# Ticket Summarization
summarizer = pipeline(
    "summarization",
    model="facebook/bart-large-cnn",
    framework="pt",
    device=-1
)

# Gemini API
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=GEMINI_API_KEY)

gemini_model = genai.GenerativeModel("gemini-2.5-flash")