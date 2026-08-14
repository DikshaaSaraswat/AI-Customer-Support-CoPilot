# Model Comparison

## Objective

The objective of this notebook is to compare multiple machine learning algorithms for customer support ticket classification.

Each model will be trained using the same preprocessed dataset and identical TF-IDF feature representation to ensure a fair comparison.

The best-performing model will be selected based on evaluation metrics such as accuracy, precision, recall, and F1-score.


## Data Preparation

The cleaned dataset was divided into training and testing sets using an 80:20 split.

The same random state (`42`) was used as in previous experiments to ensure reproducibility and a fair comparison between models.


## TF-IDF Feature Extraction

The same TF-IDF configuration used during Logistic Regression training was applied to ensure consistency across all machine learning models.

Configuration:

- `stop_words="english"`
- `ngram_range=(1,2)`
- `min_df=2`


## Model 1: Multinomial Naive Bayes

Multinomial Naive Bayes is a probabilistic machine learning algorithm widely used for text classification.

It is particularly effective with TF-IDF and Bag-of-Words representations because it models the probability distribution of words across different classes.

The model will be evaluated using the same testing dataset and evaluation metrics as Logistic Regression.


## Model 1 Results: Multinomial Naive Bayes

### Accuracy

**38.54%**

### Observations

- Multinomial Naive Bayes achieved lower accuracy than Logistic Regression.
- The model correctly identified many **Technical Support** tickets but struggled to distinguish between the remaining support categories.
- Several minority classes such as **General Inquiry**, **Human Resources**, and **Sales and Pre-Sales** received very low recall.
- Overall, the model was heavily influenced by the majority class, making it less suitable for this multi-class customer support ticket classification task.



## Model 2: Linear Support Vector Machine (Linear SVM)

Linear Support Vector Machine (Linear SVM) is one of the most effective traditional machine learning algorithms for text classification.

It performs well on high-dimensional sparse data such as TF-IDF feature vectors and is commonly used in applications like spam detection, sentiment analysis, and document classification.

The model will be trained using the same TF-IDF features and evaluated using the same metrics to enable a fair comparison with the previous models.


## Model 2 Results: Linear Support Vector Machine (Linear SVM)

### Accuracy

**69.21%**

### Observations

- Linear SVM achieved the highest accuracy among all evaluated traditional machine learning models.
- The model demonstrated balanced performance across both majority and minority ticket categories.
- Compared to Logistic Regression, Linear SVM significantly reduced the bias toward the **Technical Support** class.
- Most ticket categories achieved higher precision and recall, indicating better overall generalization.
- Based on the evaluation results, **Linear SVM was selected as the best-performing traditional machine learning model** for ticket queue classification.


# Model Comparison

| Model | Accuracy | Remarks |
|--------|---------:|---------|
| Logistic Regression | **54.12%** | Strong baseline with improved TF-IDF features. |
| Multinomial Naive Bayes | **38.54%** | Lower performance due to strong independence assumptions and class imbalance. |
| Linear SVM | **69.21%** | Best-performing traditional machine learning model with balanced classification across ticket categories. |

## Final Model Selection

Based on the experimental results, **Linear Support Vector Machine (Linear SVM)** achieved the highest overall accuracy (**69.21%**) and demonstrated the most balanced performance across different ticket categories.

Therefore, Linear SVM was selected as the primary machine learning model for the queue classification component of the AI Customer Support Copilot.