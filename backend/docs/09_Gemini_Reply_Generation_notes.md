# Gemini Reply Generation

## Objective

Generate professional customer support reply drafts using a Large Language Model (LLM).

The generated reply is intended to assist human support agents, who can review and edit the response before sending it to customers.

---

## Model Used

- Gemini 2.5 Flash
- Google AI Studio API

---

## Dataset Used

Input tickets were taken from the cleaned customer support dataset.

Relevant columns:
- ticket_text
- type
- queue
- priority

---

## Prompt Engineering

The prompt provides contextual information to Gemini including:

- Customer Ticket
- Ticket Type
- Assigned Support Queue
- Priority

The model is instructed to:

- Start with "Dear Customer,"
- Thank the customer for contacting support.
- Apologize only for problems or incidents.
- Avoid unnecessary apologies for requests or questions.
- Acknowledge the customer's issue.
- Adapt the reply according to the ticket type.
- Maintain a professional and empathetic tone.
- Avoid hallucinating technical details.
- Avoid assuming the root cause.
- Avoid promising unsupported timelines.
- End with:

Kind regards,
Customer Support Team

---

## Testing

Replies were generated for multiple ticket categories including:

- Request
- Question
- Problem
- Incident

The generated replies were evaluated for:

- Professionalism
- Context awareness
- Tone
- Relevance
- Hallucination

---

## Observations

Compared with locally hosted lightweight LLMs, Gemini produced:

- More professional replies
- Better instruction following
- Better understanding of ticket context
- Faster inference
- More natural customer support language

Average response generation time:

- Approximately 6–7 seconds

Previous local LLM testing required approximately 510 seconds on CPU.

---

## Final Design Decision

Gemini is used only for generating the draft reply.

The remaining pipeline components are handled locally:

- Queue Prediction
- Priority Prediction
- Ticket Summarization

This hybrid architecture combines traditional ML models with an LLM to provide fast and high-quality customer support assistance.

---

## Final Pipeline

Customer Ticket

↓

Queue Prediction

↓

Priority Prediction

↓

Ticket Summarization

↓

Gemini Reply Generation

↓

Human Agent Review

↓

Customer