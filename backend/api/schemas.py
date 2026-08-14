from pydantic import BaseModel


class TicketRequest(BaseModel):
    ticket: str


class TicketResponse(BaseModel):
    queue: str
    priority: str
    summary: str
    reply: str