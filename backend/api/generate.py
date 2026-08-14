import os
import google.generativeai as genai
from dotenv import load_dotenv
from google.api_core.exceptions import ResourceExhausted
import traceback


# Load environment variables
load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY not found in .env file")


# Configure Gemini
genai.configure(api_key=GEMINI_API_KEY)

gemini_model = genai.GenerativeModel(
    "gemini-2.5-flash"
)


def generate_reply(ticket, queue, priority, summary):

    prompt = f"""
You are a professional customer support assistant.

Customer Ticket:
{ticket}

Ticket Summary:
{summary}

Generate ONLY the email body.

Instructions:
- Start with "Dear Customer,"
- Thank the customer for contacting support.
- If the customer reports a problem, apologize for the inconvenience.
- If the customer asks a question or makes a request, do not apologize unnecessarily.
- Acknowledge the customer's concern professionally.
- Mention that the request has been received and will be reviewed by the appropriate support team.
- Do NOT claim the issue is already being investigated, fixed, or resolved.
- Do NOT invent technical details.
- Do NOT assume the root cause.
- Do NOT promise a resolution time.
- Do NOT mention:
    - Queue
    - Priority
    - AI
    - Predictions
    - Internal analysis
- Do NOT generate a subject line.
- Keep the reply between 5 and 7 sentences.
- End exactly with:

Kind regards,
Customer Support Team

Return ONLY the email reply.
"""

    try:

        response = gemini_model.generate_content(
            prompt,
            generation_config={
                "temperature": 0.4,
                "max_output_tokens": 500,
            },
        )

        # Check if Gemini generated a response
        if not response.text:
            return (
                "AI reply generation is currently unavailable. "
                "Please edit the reply manually or try again."
            )

        reply = response.text.strip()

        # Validate that the reply was completed properly
        required_ending = "Kind regards,\nCustomer Support Team"

        if required_ending not in reply:
            return (
                "AI reply generation was incomplete. "
                "Please edit the reply manually or try again."
            )

        return reply


    except ResourceExhausted:
        return (
            "Gemini API quota exceeded. "
            "Please wait and try again."
        )


    except Exception:
        traceback.print_exc()
        return (
            "Unexpected error occurred while generating the AI reply. "
            "Please edit the reply manually or try again."
        )


if __name__ == "__main__":

    ticket = """
    I upgraded my account yesterday, but I still cannot access Premium features.
    """

    queue = "Account & Access"
    priority = "High"

    summary = (
        "Customer upgraded account but cannot access Premium features."
    )

    reply = generate_reply(
        ticket,
        queue,
        priority,
        summary
    )

    print("\nGenerated Reply:\n")
    print(reply)