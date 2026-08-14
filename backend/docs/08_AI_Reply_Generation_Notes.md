# AI Reply Generation (Experimental)

## Objective

Evaluate different lightweight language models for generating AI-assisted customer support replies.

---

## Models Evaluated

- google/flan-t5-small
- HuggingFaceTB/SmolLM2-360M-Instruct
- Qwen/Qwen2.5-0.5B-Instruct

---

## Approach

- Designed prompts for professional customer support replies.
- Iteratively improved prompts using prompt engineering.
- Compared reply quality, instruction following, and inference speed.
- Tested the models on real customer support tickets.

---

## Observations

### FLAN-T5 Small

- Generated incomplete responses.
- Poor instruction following.
- Not suitable for professional customer support replies.

### SmolLM2-360M

- Better than FLAN-T5.
- Still produced repetitive or generic replies.
- Occasionally copied customer text.
- Response quality was inconsistent.

### Qwen2.5-0.5B

- Produced significantly better and more professional replies.
- Better instruction following.
- More natural customer support responses.
- However, local CPU inference required approximately **510 seconds per reply**, making it impractical for real-time deployment.

---

## Conclusion

Local lightweight LLMs were successfully evaluated for reply generation.

Although Qwen produced the best quality among the tested models, inference latency on local hardware was too high for a practical AI Customer Support Copilot.

Therefore, the final implementation will use a cloud-based LLM (Gemini API) for fast and reliable draft reply generation.

---

## Final Reply Generation Design

The LLM generates only the **reply body**.

The application automatically adds:

- Greeting:
  - Dear Customer,
- Closing:
  - Kind regards,
  - Customer Support Team

### Advantages

- Consistent formatting.
- Professional appearance.
- Easier maintenance.
- Faster response generation.
- AI focuses only on drafting the reply.
- Human support agents retain final approval before sending the response.