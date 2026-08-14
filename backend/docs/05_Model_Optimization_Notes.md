# Model Optimization

## Objective

The objective of this phase is to improve the performance of the best-performing machine learning model selected during model comparison.

Based on the previous experiments, **Linear Support Vector Machine (Linear SVM)** achieved the highest accuracy and was selected for further optimization.

The optimization process will focus on improving classification performance through hyperparameter tuning and class balancing while using the same TF-IDF feature representation.

## Hyperparameter Tuning

Hyperparameter tuning is the process of searching for the best parameter values that improve a machine learning model's performance.

Instead of manually selecting parameters, GridSearchCV systematically evaluates multiple combinations using cross-validation and selects the configuration that achieves the best validation performance.

For Linear SVM, the regularization parameter `C` controls the balance between maximizing the decision margin and minimizing classification errors.

### Cross-Validation using GridSearchCV

GridSearchCV was used to evaluate multiple values of the Linear SVM regularization parameter (`C`).

A 5-fold cross-validation strategy was used, meaning the training dataset was divided into five subsets. The model was trained and validated five times using different validation folds, and the average performance was used to select the best parameter.


### Hyperparameter Tuning Results

GridSearchCV evaluated multiple values of the regularization parameter (`C`) for the Linear Support Vector Machine.

The best-performing configuration was:

- **C = 5**

This value achieved the highest average cross-validation accuracy and was selected as the optimized model for further evaluation.

## Optimized Model Results

### Best Hyperparameter

After performing GridSearchCV with 5-fold cross-validation, the best-performing parameter was:

- **C = 5**

### Performance

| Metric | Value |
|---------|------:|
| Accuracy | **71.53%** |
| Macro F1-score | **0.73** |
| Weighted F1-score | **0.71** |

### Observations

- Hyperparameter tuning improved the overall classification accuracy from **69.21%** to **71.53%**.
- The optimized model achieved better precision and recall across several minority classes.
- The optimized Linear SVM demonstrated stronger generalization while maintaining balanced performance across the ticket categories.
- Based on the evaluation results, the optimized Linear SVM was selected as the final machine learning model for queue classification.

# Final Model Comparison

| Model | Accuracy | Status |
|--------|---------:|--------|
| Multinomial Naive Bayes | **38.54%** | Baseline |
| Logistic Regression | **54.12%** | Improved Baseline |
| Linear SVM | **69.21%** | Best Traditional Model |
| **Optimized Linear SVM (C = 5)** | **71.53%** | ⭐ Final Selected Model |

## Class Balancing

The dataset contains an imbalanced distribution of ticket categories. Some classes, such as **Technical Support**, have significantly more training samples than others like **General Inquiry** and **Human Resources**.

To reduce the bias toward majority classes, the `class_weight="balanced"` parameter was applied to the Linear SVM model. This automatically assigns higher weights to minority classes during training.


## Class Balancing Experiment

A second experiment was conducted using `class_weight="balanced"` to reduce the effect of class imbalance.

### Results

- Accuracy: **71.44%**

### Observations

- The balanced model slightly improved recall for several minority classes, including **General Inquiry**, **Human Resources**, and **Returns and Exchanges**.
- However, the overall accuracy decreased slightly from **71.53%** to **71.44%**.
- Since the improvement in minority class performance was accompanied by a small reduction in overall accuracy, the optimized Linear SVM (`C = 5`) without class balancing was selected as the final model.

## Additional Experiment: SGD Classifier

As a final comparison, an SGD Classifier with hinge loss (linear SVM objective) was evaluated.

This experiment was conducted to determine whether an alternative linear optimization approach could outperform the optimized Linear SVM.

The same TF-IDF feature representation and train-test split were used to ensure a fair comparison.

## Additional Experiment: SGD Classifier

An SGD Classifier with hinge loss was trained using the same TF-IDF feature representation.

### Results

- Accuracy: **62.93%**

### Observations

- Although the SGD Classifier produced reasonable results, its overall accuracy was lower than the optimized Linear SVM.
- Therefore, the optimized Linear SVM remained the best-performing model and was selected as the final queue classification model.