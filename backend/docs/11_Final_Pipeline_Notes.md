# Final AI Customer Support Copilot Pipeline

## Objective

Build an end-to-end AI-assisted customer support pipeline that helps support agents by:

- Predicting the appropriate support queue
- Predicting ticket priority
- Summarizing long customer tickets
- Generating professional reply drafts

The system is designed as a **Customer Support Copilot**, where AI assists human agents rather than replacing them.

---

# Pipeline Overview

Customer Ticket
        │
        ▼
Text Preprocessing
        │
        ▼
Queue Prediction (Linear SVM)
        │
        ▼
Priority Prediction (Linear SVM)
        │
        ▼
Ticket Summarization (facebook/bart-large-cnn)
        │
        ▼
Reply Generation (Gemini API)
        │
        ▼
Final AI Draft Reply

---

## Components

### 1. Queue Prediction

Model:
- Linear Support Vector Machine (LinearSVC)

Input:
- Cleaned ticket text

Output:
- Predicted support queue

Examples:
- IT Support
- Technical Support
- Billing
- Product Support

---

### 2. Priority Prediction

Model:
- Linear Support Vector Machine (LinearSVC)

Input:
- Cleaned ticket text

Output:
- Low
- Medium
- High

---

### 3. Ticket Summarization

Model:
- facebook/bart-large-cnn

Purpose:
- Reduce lengthy customer tickets into concise summaries before sending them to the LLM.

Optimization:
- Very short tickets are returned directly without summarization.

---

### 4. AI Reply Generation

Model:
- Gemini API

Input:
- Ticket Summary
- Predicted Queue
- Predicted Priority
- Ticket Type

Output:
- Professional customer support reply draft.

The reply includes:
- Greeting
- Acknowledgement
- Appropriate apology (when required)
- Reassurance
- Professional closing

---

## Error Handling

Gemini API quota exceptions are handled gracefully.

Instead of crashing, the application displays:

"AI reply generation is temporarily unavailable because the API quota has been reached. Please try again later."

This improves application robustness.

---

## Current Pipeline Status

Completed:

- Data Cleaning
- Exploratory Data Analysis
- Queue Prediction Model
- Priority Prediction Model
- Ticket Summarization
- AI Reply Generation
- Model Serialization
- Complete End-to-End Pipeline
- Exception Handling

---

## Future Improvements

- Improve Queue Prediction accuracy
- Fine-tune transformer-based classifiers
- Use Sentence Transformers for embeddings
- Optimize prompt engineering
- Add confidence scores
- Human feedback loop
- Deploy using Streamlit