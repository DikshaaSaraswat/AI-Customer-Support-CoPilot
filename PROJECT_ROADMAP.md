# AI Customer Support Copilot

## Problem Statement

Customer support agents receive a large number of tickets every day. Manually reading, categorizing, prioritizing, summarizing, and drafting responses for each ticket is time-consuming and can lead to inconsistent handling.

---

# Project Objective

Build an AI-assisted Customer Support Copilot that helps support agents by:

- Classifying support tickets into appropriate support queues.
- Predicting ticket priority.
- Generating concise ticket summaries.
- Suggesting professional AI-assisted draft replies.
- Providing an interactive dashboard for ticket analysis.
- Assisting support agents while keeping the final decision under human control.

---

# Dataset

**Selected Dataset**

`customer_support_tickets.csv`

*(Renamed from `aa_dataset-tickets-multi-lang-5-2-50-version.csv` for better project organization.)*

### Dataset Features

- Subject
- Body
- Answer
- Queue
- Priority
- Type
- Language *(English subset used for MVP)*
- Tags *(removed during preprocessing)*

**Dataset Status:** ✅ Finalized

---

# Project Status

- [x] Project Idea Finalized
- [x] Mentor Approval Received
- [x] Dataset Selected
- [x] Exploratory Data Analysis (EDA)
- [x] Data Preprocessing
- [x] TF-IDF Feature Extraction
- [x] Queue Prediction Model
- [x] Priority Prediction Model
- [x] Model Evaluation
- [x] FastAPI Backend Development
- [x] BART Ticket Summarization
- [x] Gemini AI Reply Generation
- [x] Frontend Dashboard Development
- [x] Frontend–Backend Integration
- [x] End-to-End Workflow Integration
- [x] Interactive Dashboard
- [x] Initial Testing & Validation
- [x] Project Documentation

---

# Current AI Copilot Features

- Queue Prediction
- Priority Prediction
- Ticket Summarization (BART)
- AI Draft Reply Generation (Gemini)
- Human-in-the-loop Reply Editing
- Interactive Dashboard
- FastAPI Backend Integration

---

# Tech Stack

## Programming Language

- Python

## Backend

- FastAPI

## Machine Learning

- Scikit-learn
- TF-IDF
- Linear SVM

## AI Models

- BART (`facebook/bart-large-cnn`)
- Google Gemini API

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

## Data Processing

- Pandas
- NumPy

## Version Control

- Git & GitHub

---

# System Workflow

```text
                        AI CUSTOMER SUPPORT COPILOT

┌──────────────────────────────────────────────────────────────────────────────┐
│                 Customer submits a support ticket                            │
│          (Subject + Description / Complaint / Issue)                         │
└───────────────────────────────────┬──────────────────────────────────────────┘
                                    │
                                    ▼
                     Data Preprocessing & Cleaning
         (Cleaning • Normalization • TF-IDF Vectorization)
                                    │
                                    ▼
                 ┌──────────────────────────────────────┐
                 │     Machine Learning Prediction      │
                 └──────────────────────────────────────┘
                           │                    │
                           ▼                    ▼
                Queue Prediction      Priority Prediction
                           │                    │
                           └──────────┬─────────┘
                                      ▼
                     Ticket Summarization (BART)
                                      │
                                      ▼
                AI Draft Reply Generation (Gemini)
                                      │
                                      ▼
              Results Displayed on Frontend Dashboard
                                      │
                                      ▼
           Support Agent Reviews & Edits Draft Reply
                                      │
                                      ▼
                  Final Response Sent to Customer
```

---

# Project Architecture

```text
                    +----------------------------+
                    |      Next.js Frontend      |
                    +-------------+--------------+
                                  |
                                  ▼
                      +-----------------------+
                      |    FastAPI Backend    |
                      +-----------+-----------+
                                  |
      ----------------------------------------------------------
      |                     |                 |                |
      ▼                     ▼                 ▼                ▼
 Queue Prediction   Priority Prediction     BART        Gemini API
   (Linear SVM)        (Linear SVM)      Summarizer    Draft Reply
```

---

# Current Status

The AI Customer Support Copilot has been successfully developed and integrated into a complete end-to-end workflow.

The application is capable of:

- Accepting customer support tickets through the frontend dashboard.
- Predicting the appropriate support queue.
- Predicting ticket priority.
- Generating concise ticket summaries using the BART model.
- Generating AI-assisted draft replies using the Gemini API.
- Allowing support agents to review and edit the generated reply before sending it to customers.

The project is currently in the refinement phase, where the focus is on improving the quality of ticket summaries and AI-generated draft replies, performing extensive testing using diverse customer support scenarios, and optimizing the overall performance and user experience.

---

# Future Scope

- Improve the quality of ticket summarization.
- Improve AI-generated draft replies.
- Enhance priority prediction accuracy.
- Support multilingual customer support tickets.
- Integrate Retrieval-Augmented Generation (RAG) to retrieve relevant information from support FAQs, policies, troubleshooting guides, and product documentation before generating draft replies.
- Add confidence scores for model predictions.
- Fine-tune transformer-based language models.
- Deploy the application on cloud infrastructure.
- Add an analytics and reporting dashboard.