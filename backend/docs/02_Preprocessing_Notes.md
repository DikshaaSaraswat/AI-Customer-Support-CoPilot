# Data Preprocessing

## Objective

To clean and prepare the dataset for feature engineering and machine learning while preserving important ticket information.

## Initial Dataset

- Total Rows: 28,587
- Total Columns: 16

A copy of the original dataset was created to ensure preprocessing steps do not modify the raw data.


## Feature Selection

### Version Column

The `version` column contains multiple values (51, 52, and 400), indicating different dataset versions rather than customer ticket information.

Since this information will not be available when predicting new customer tickets, it is considered dataset metadata and will be removed before model training.

## Language Filtering

The original dataset contains tickets in both English and German.

Since the first version of the AI Customer Support Copilot targets English-language support, only English (`en`) tickets are retained for preprocessing and model development.

This reduces preprocessing complexity and allows the initial NLP pipeline to focus on a single language.


### Results

- Original dataset: **28,587** tickets
- English tickets retained: **16,338**
- German tickets removed: **12,249**

The filtered dataset now contains only English-language customer support tickets, ensuring a consistent input language for NLP preprocessing and model training.


## Missing Value Handling

After filtering the dataset to English tickets:

- The `answer` column contains only **3** missing values.
- These rows will be removed because the response is required for future reply generation.
- The `subject` column contains **2,607** missing values.
- Instead of removing these rows, missing subjects will be replaced with an empty string, as the `body` column already contains the complete customer complaint.


### Tag Columns

The dataset contains eight tag columns representing manually assigned keywords.

Since the objective of this project is queue prediction, priority prediction, and AI-assisted response generation, these tags are not required as input features.

Additionally, higher tag columns contain a large number of missing values.

Therefore, all tag columns are removed from the preprocessing pipeline to simplify the dataset and focus on the primary ticket information.

### Final Features

After preprocessing, the dataset contains the following columns:

- subject
- body
- answer
- queue
- priority
- type

A new feature (`ticket_text`) will be created by combining the `subject` and `body` columns. This provides the model with both the ticket title and detailed customer description as a single text input.


### Text Cleaning

A reusable text preprocessing function was created to normalize customer tickets before feature extraction.

The following preprocessing steps were applied:

- Converted text to lowercase.
- Removed punctuation.
- Removed newline characters.
- Removed extra whitespace.

The cleaned text is stored in a new column named `clean_text`, while the original `ticket_text` is preserved.


### Text Preprocessing

A reusable preprocessing function was implemented to normalize the customer ticket text before feature extraction.

The preprocessing pipeline includes:

- Convert text to lowercase.
- Replace newline characters with spaces.
- Remove punctuation.
- Remove extra whitespace.

The cleaned text is stored in the `clean_text` column while preserving the original `ticket_text` column.