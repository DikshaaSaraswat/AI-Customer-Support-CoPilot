print(">>> LOADING MAIN.PY <<<")

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.schemas import TicketRequest, TicketResponse
from api.predict import predict_queue, predict_priority
from api.summarize import summarize_ticket
from api.generate import generate_reply

app = FastAPI(
    title="AI Customer Support Copilot API",
    version="1.0"
)

# ---------------- CORS ----------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# --------------------------------------


@app.get("/")
def home():
    return {
        "message": "AI Customer Support Copilot API is running!"
    }


@app.post("/analyze", response_model=TicketResponse)
def analyze_ticket(request: TicketRequest):

    ticket = request.ticket

    queue = predict_queue(ticket)

    priority = predict_priority(ticket)

    summary = summarize_ticket(ticket)

    reply = generate_reply(
        ticket=ticket,
        queue=queue,
        priority=priority,
        summary=summary
    )

    return TicketResponse(
        queue=queue,
        priority=priority,
        summary=summary,
        reply=reply
    )