# AI Customer Support Copilot

An AI-assisted customer support application designed to help support agents analyze customer tickets, understand the main issue quickly, and generate suitable draft responses. The system combines machine learning, NLP, and LLM-based generation while keeping the final decision and response under human control.

---

## Overview

Customer support teams receive a large number of tickets that need to be categorized, prioritized, understood, and answered. Performing these tasks manually for every ticket can be time-consuming.

The **AI Customer Support Copilot** assists support agents by providing:

- Support queue prediction
- Ticket priority prediction
- Automatic ticket summarization
- AI-assisted draft reply generation
- Human review before sending the final response

The system follows a **human-in-the-loop approach**, where AI-generated predictions and responses are treated as assistance rather than automatic final decisions.

---

## Key Features

### 1. Queue Prediction

The Queue Prediction module classifies an incoming customer support ticket into the most appropriate support queue.

The module uses:

- TF-IDF text feature extraction
- Linear Support Vector Machine (SVM)
- GridSearchCV for hyperparameter tuning
- Scikit-learn for model training and evaluation
- Joblib for saving and loading the trained model

The selected Linear SVM model achieved approximately **71.5% accuracy** during evaluation.

### 2. Priority Prediction

The Priority Prediction module predicts the priority level of an incoming customer support ticket.

The system categorizes tickets into priority levels such as:

- Low
- Medium
- High

The priority prediction model achieved approximately **74.9% accuracy** during evaluation.

The trained model is integrated into the backend and used during the ticket analysis workflow.

### 3. Ticket Summarization

The Ticket Summarization module generates a concise summary of the customer's ticket.

The purpose of summarization is to allow a support agent to understand the main issue without having to read the complete ticket.

The module uses:

- Hugging Face Transformers
- BART
- `facebook/bart-large-cnn`
- PyTorch

The summarization process reduces lengthy customer messages while attempting to preserve the important issue, context, and requested action.

The summarization module also includes handling for shorter tickets so that unnecessary summarization is avoided.

### 4. AI-Assisted Draft Reply Generation

The AI-assisted Draft Reply Generation module generates a professional draft response based on the customer's ticket and its generated summary.

The final integrated application uses the **Google Gemini API** for draft reply generation.

The generation prompt is designed to ensure that the response:

- Uses professional customer-support language
- Acknowledges the customer's concern
- Avoids unsupported technical claims
- Does not assume the root cause
- Does not falsely claim that an issue has already been fixed or resolved
- Does not promise an unsupported resolution time
- Remains editable by the support agent

The generated response is treated as an **AI-assisted draft**, not an automatic final response.

A fallback mechanism is implemented for incomplete or unavailable Gemini responses so that partially generated text is not displayed as the final draft.

---

## LLM Evaluation During Development

During development, a lightweight instruction-tuned LLM was evaluated for draft reply generation.

The model used was:

`HuggingFaceTB/SmolLM2-360M-Instruct`

It was accessed locally through the Hugging Face Transformers `text-generation` pipeline.

The model was evaluated as a possible approach for generating customer-support replies. However, local inference had higher resource requirements, particularly in terms of system RAM, and the generated responses were not consistently suitable for the final application.

Therefore, the **Gemini API** was selected for the final integrated draft reply generation module because it provided a more practical API-based approach and better consistency for the intended use case.

SmolLM2 was retained as part of the development and evaluation process, while Gemini is used in the final application.

---

## Complete System Workflow

    Customer Support Ticket
              |
              v
       Queue Prediction
              |
              v
       Priority Prediction
              |
              v
     Ticket Summarization
            (BART)
              |
              v
    AI-Assisted Draft Reply
         (Gemini API)
              |
              v
         Agent Review
              |
              v
        Final Response

---

## Application Architecture

    AI Customer Support Copilot
              |
              v
       Frontend Dashboard
              |
              v
        FastAPI Backend
              |
       +------+------+
       |             |
       v             v
    Queue         Priority
   Prediction     Prediction
       |             |
       +------+------+
              |
              v
       BART Summarization
              |
              v
          Gemini API
              |
              v
    AI-Assisted Draft Reply
              |
              v
         Agent Review

---

## Frontend

The frontend provides a dashboard-based interface for support agents.

The application workflow allows the agent to:

1. Enter or submit a customer support ticket.
2. Send the ticket for analysis.
3. View the predicted support queue.
4. View the predicted ticket priority.
5. View the generated ticket summary.
6. View the AI-assisted draft reply.
7. Review and manually modify the draft before using it as the final response.

The frontend communicates with the FastAPI backend through API requests.

### Frontend Technologies

- React
- Next.js

---

## Backend

The backend is implemented using **FastAPI** and provides the API layer connecting the frontend with the machine learning and AI components.

The backend coordinates:

- Queue prediction
- Priority prediction
- Ticket summarization
- AI-assisted draft reply generation

### Backend Technologies

- Python
- FastAPI
- Uvicorn

---

## API Workflow

The ticket analysis workflow is exposed through the `/analyze` endpoint.

    Ticket Input
         |
         v
    Queue Prediction
         |
         v
    Priority Prediction
         |
         v
    BART Summarization
         |
         v
    Gemini Draft Reply Generation
         |
         v
    Analysis Results

The resulting predictions, summary, and draft reply are returned to the frontend and displayed to the support agent.

---

## Human-in-the-Loop Approach

The Copilot is designed as an **assistive system** rather than a fully autonomous customer support system.

The AI provides:

- Queue recommendation
- Priority recommendation
- Ticket summary
- Draft response

The support agent remains responsible for reviewing the generated information and making the final decision.

This approach helps reduce repetitive work while maintaining human oversight over customer communication.

---

## Dataset

The project uses a multilingual customer support ticket dataset containing customer support conversations and associated metadata.

The dataset contains fields such as:

- `subject`
- `body`
- `answer`
- `type`
- `queue`
- `priority`
- `language`
- `version`
- `tag_1` to `tag_8`

For the initial machine learning implementation, English-language tickets were primarily used.

The `body` field was used as the primary text input for the classification workflow.

---

## Machine Learning Workflow

    Raw Customer Support Dataset
                |
                v
          Data Cleaning
                |
                v
          Text Processing
                |
                v
           TF-IDF Features
                |
                v
          Model Training
                |
                v
     Hyperparameter Tuning
          (GridSearchCV)
                |
                v
         Model Evaluation
                |
                v
           Joblib Model
                |
                v
        FastAPI Integration

---

## Technology Stack

### Programming Language

- Python

### Frontend

- React
- Next.js

### Backend

- FastAPI
- Uvicorn

### Machine Learning

- Scikit-learn
- TF-IDF
- Linear SVM
- GridSearchCV
- Joblib

### NLP and AI

- Hugging Face Transformers
- BART (`facebook/bart-large-cnn`)
- PyTorch
- SmolLM2-360M-Instruct
- Google Gemini API

### Data Processing

- Pandas
- NumPy

### Development Tools

- Jupyter Notebook
- Visual Studio Code
- Git
- GitHub

---

## Project Structure

    AI-Customer-Support-CoPilot/
    |
    +-- backend/
    |
    +-- frontend/
    |
    +-- requirements.txt
    |
    +-- README.md
    |
    +-- PROJECT_ROADMAP.md

### Backend

The `backend` directory contains the FastAPI application, machine learning components, NLP/AI modules, models, data, and supporting files.

### Frontend

The `frontend` directory contains the user interface and dashboard used by support agents.

### requirements.txt

Contains the Python dependencies required to install and run the backend and AI/ML components.

### PROJECT_ROADMAP.md

Contains the project's development roadmap, planned modules, implementation progress, and project milestones.

---

## Running the Project

### Backend

Navigate to the backend directory:

    cd backend

Start the FastAPI backend using:

    python -m uvicorn api.main:app --reload

The FastAPI backend runs locally at:

    http://127.0.0.1:8000

### Frontend

Open a separate terminal and navigate to the frontend directory:

    cd frontend

Start the Next.js development server using:

    npx next dev

The frontend can then be accessed through the local development URL provided by Next.js.

---

## Environment Variables

The application uses environment variables for external API configuration.

The Gemini API key is stored in a local `.env` file.

The `.env` file should **not** be committed to GitHub or shared publicly.

Example:

    GEMINI_API_KEY=your_api_key_here

The actual API key should never be included in the repository.

---

## Testing

The application was tested using multiple customer support scenarios covering areas such as:

- Billing and payment issues
- Subscription problems
- Account and access issues
- Technical problems
- Application errors
- Feature requests

Testing focused on:

- Queue prediction
- Priority prediction
- Ticket summarization
- AI-assisted draft reply generation
- Frontend-backend communication
- End-to-end workflow
- Handling incomplete AI-generated responses

The complete testing workflow was:

    Customer Ticket
          |
          v
    Queue Prediction
          |
          v
    Priority Prediction
          |
          v
    Summary Generation
          |
          v
    AI Draft Reply
          |
          v
    Agent Review

---

## Testing Observations

Testing demonstrated that the system generally produces useful results for clear and representative support tickets.

The summarization module was able to reduce longer tickets into concise descriptions while retaining important information such as:

- Main problem
- Relevant context
- Troubleshooting already attempted
- Requested action

The classification models produced relevant predictions for many clear ticket scenarios, although occasional misclassification was observed for some tickets.

The Gemini module generated professional responses when the API returned a complete response. In cases where generation was incomplete or unavailable, the fallback mechanism prevented partially generated text from being displayed.

---

## Limitations

The current implementation has several limitations:

- Machine learning predictions may occasionally be incorrect, especially for ambiguous or less-represented tickets.
- Summary quality can vary depending on the ticket's wording and length.
- The Gemini API is an external dependency and may be affected by API availability or quota limitations.
- AI-generated responses may require human review before being sent to customers.
- The system can be further improved with additional training data, model optimization, and more extensive testing.

---

## Future Improvements

Potential future improvements include:

- Increasing the size and diversity of the training dataset
- Improving queue classification accuracy
- Improving priority prediction performance
- Fine-tuning NLP models for customer-support-specific language
- Improving summarization consistency
- Integrating **Retrieval-Augmented Generation (RAG)** to retrieve relevant information from support FAQs, policies, troubleshooting guides, and product documentation before generating draft replies
- Improving AI-generated response validation and grounding
- Adding multilingual support
- Adding authentication and role-based access
- Adding ticket history and analytics
- Adding monitoring and model performance tracking
- Deploying the application to a cloud environment

---

## Project Status

**Status: Completed**

The AI Customer Support Copilot has been implemented as an end-to-end application integrating:

- Frontend dashboard
- FastAPI backend
- Queue prediction
- Priority prediction
- BART-based ticket summarization
- Gemini-based AI-assisted draft reply generation
- Human-in-the-loop review

The application has been tested using multiple customer support scenarios and the core workflow is functional.

---

## Author

**Diksha Saraswat**