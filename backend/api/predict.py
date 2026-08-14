import joblib
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

queue_model = joblib.load(BASE_DIR / "models" / "queue_model.pkl")
queue_vectorizer = joblib.load(BASE_DIR / "models" / "queue_vectorizer.pkl")

priority_model = joblib.load(BASE_DIR / "models" / "priority_model.pkl")
priority_vectorizer = joblib.load(BASE_DIR / "models" / "priority_vectorizer.pkl")


def predict_queue(ticket: str):
    vector = queue_vectorizer.transform([ticket])
    prediction = queue_model.predict(vector)[0]
    return prediction


def predict_priority(ticket: str):
    vector = priority_vectorizer.transform([ticket])
    prediction = priority_model.predict(vector)[0]
    return prediction