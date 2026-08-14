from transformers import pipeline


summarizer = pipeline(
    "summarization",
    model="facebook/bart-large-cnn",
    framework="pt",
    device=-1
)


def summarize_ticket(ticket: str):

    words = ticket.split()

    # Very short tickets do not need summarization
    if len(words) < 30:
        return ticket

    try:
        summary = summarizer(
            ticket,
            max_length=60,
            min_length=15,
            do_sample=False
        )

        result = summary[0]["summary_text"].strip()

        # Basic validation:
        # If the generated summary appears incomplete,
        # retry with a slightly larger output limit.
        incomplete_endings = (
            "the",
            "a",
            "an",
            "and",
            "or",
            "but",
            "to",
            "for",
            "with",
            "of",
            "in",
            "on",
            "is",
            "are",
            "was",
            "were",
            "after",
            "before",
            "because",
            "that",
            "which",
            "from",
            "as"
        )

        last_word = result.rstrip(".,!?;:").split()[-1].lower()

        if last_word in incomplete_endings:
            retry = summarizer(
                ticket,
                max_length=75,
                min_length=15,
                do_sample=False
            )

            retry_result = retry[0]["summary_text"].strip()

            if retry_result:
                result = retry_result

        return result

    except Exception:
        # Safe fallback if summarization fails
        return ticket