# Model Saving

## Objective

Save all trained Machine Learning models and vectorizers for deployment.

These saved models will later be loaded into the final inference pipeline without retraining.

---

## Models Saved

### Queue Prediction

Model:
- Linear Support Vector Classifier (LinearSVC)

Saved Files:
- queue_model.pkl
- queue_vectorizer.pkl

---

### Priority Prediction

Model:
- Linear Support Vector Classifier (LinearSVC)

Saved Files:
- priority_model.pkl
- priority_vectorizer.pkl

---

## Saving Method

The trained models and TF-IDF vectorizers were serialized using the `joblib` library.

Example:

```python
joblib.dump(model, "../models/model_name.pkl")
```

---

## Directory Structure

```
project/
│
├── models/
│   ├── queue_model.pkl
│   ├── queue_vectorizer.pkl
│   ├── priority_model.pkl
│   └── priority_vectorizer.pkl
```

---

## Components Not Saved

### Ticket Summarizer

The summarization model (`facebook/bart-large-cnn`) is not saved manually.

It is loaded directly using the Hugging Face `pipeline()` API, which automatically retrieves the model from the local cache after the initial download.

---

### Gemini Reply Generator

Gemini does not require model serialization.

The model is initialized using the Google AI Studio API key during runtime.

---

## Purpose

Saving trained models separately allows:

- Faster deployment
- No retraining during inference
- Easy integration with the final pipeline
- Reusable models across different applications

---

## Next Step

The saved models will be loaded into the Final Pipeline notebook, where they will work together to perform:

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

Draft Response for Human Agent Review