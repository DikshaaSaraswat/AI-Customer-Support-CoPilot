# Priority Prediction

## Objective

The goal of this module is to predict the priority level of customer support tickets based on their textual content.

The predicted priority helps support agents identify urgent tickets quickly and allocate resources more efficiently.

Priority Classes:
- High
- Medium
- Low


## Priority Distribution

The dataset contains three priority levels:

| Priority | Count | Percentage |
|----------|------:|-----------:|
| Medium | 6616 | 40.50% |
| High | 6345 | 38.84% |
| Low | 3374 | 20.66% |

### Observations

- The dataset is relatively balanced.
- Medium and High priority tickets have similar numbers of samples.
- Low priority tickets are fewer but still have sufficient representation.
- Compared to queue classification (10 classes), priority prediction is expected to be an easier classification problem.

## Train-Test Split

The dataset was divided into:

- Training Set: **13,068** tickets (80%)
- Testing Set: **3,267** tickets (20%)

The `stratify` parameter was used during the train-test split to preserve the original distribution of priority classes in both datasets.

This ensures that the model is trained and evaluated on representative samples of all priority levels.


## TF-IDF Feature Extraction

The textual ticket data was converted into numerical feature vectors using the TF-IDF (Term Frequency–Inverse Document Frequency) technique.

Configuration:

- Stop Words: English
- N-gram Range: (1,2)
- Minimum Document Frequency: 2

Generated Features:

- Training Matrix: **(13068, 47854)**
- Testing Matrix: **(3267, 47854)**

The same TF-IDF configuration used in Queue Classification was reused to maintain consistency across the project.

## Initial Model: Linear Support Vector Machine

The priority prediction model was trained using an optimized Linear Support Vector Machine (LinearSVC) with `C = 5`.

### Results

- Accuracy: **74.87%**

### Performance Summary

| Priority | Precision | Recall | F1-score |
|----------|----------:|-------:|---------:|
| High | 0.76 | 0.80 | 0.78 |
| Medium | 0.74 | 0.75 | 0.75 |
| Low | 0.73 | 0.64 | 0.68 |

### Observations

- The model achieved balanced performance across all three priority classes.
- High-priority tickets were identified most effectively, with an 80% recall.
- Low-priority tickets were comparatively more difficult to classify, indicating some overlap with medium-priority tickets.


## Hyperparameter Tuning

To further improve the performance of the Linear Support Vector Machine, GridSearchCV with 5-fold cross-validation was used.

The regularization parameter (`C`) was tuned to identify the model configuration that achieved the best validation performance.

The same TF-IDF feature representation was used to ensure a fair comparison.

## Best Hyperparameter

GridSearchCV selected the following optimal hyperparameter:

- **C = 5**

Interestingly, the same optimal value was also obtained during Queue Classification, indicating consistent performance of the Linear SVM across different prediction tasks.

## Hyperparameter Tuning Results

GridSearchCV selected:

- **Best Parameter:** `C = 5`

### Results

- Optimized Accuracy: **74.87%**

### Observations

The optimized model produced the same performance as the initial Linear SVM model because the initial configuration already used the optimal hyperparameter (`C = 5`).

This confirms that the selected model configuration is already optimal for the current dataset and feature representation.

## Confusion Matrix

The confusion matrix visualizes the model's predictions for the three priority classes.

It highlights the number of correctly classified tickets as well as the types of misclassifications made by the model.

## Confusion Matrix Analysis

The model performed consistently across all three priority levels.

High-priority tickets achieved the highest recall, indicating that urgent tickets were identified effectively.

Most classification errors occurred between **Low** and **Medium** priority tickets, suggesting that these two categories share similar textual patterns.

Overall, the confusion matrix confirms that the model provides reliable priority predictions while maintaining balanced performance across the classes.


## Model Selection

Initially, Google FLAN-T5 Small was explored for ticket summarization because it is a lightweight instruction-tuned language model.

However, during experimentation, the generated summaries were not sufficiently concise or accurate for customer support tickets.

Therefore, the project uses **Facebook BART Large CNN**, a transformer model specifically fine-tuned for abstractive text summarization.

Reasons for selecting BART Large CNN:

- Specifically trained for summarization tasks
- Produces concise and meaningful summaries
- Widely used for document and news summarization
- Better suited for customer support ticket summarization than general-purpose instruction models