# Exploratory Data Analysis (EDA)

## Objective

To understand the structure, quality, and characteristics of the customer support ticket dataset before preprocessing and model development.

## Initial Observations

- The dataset contains **28,587** customer support tickets with **16 features**.
- The `body`, `queue`, `priority`, `type`, and `language` columns have no missing values.
- Only **7** values are missing in the `answer` column.
- Approximately **3,838** tickets have missing `subject` values.
- The tag columns become progressively sparse from `tag_5` onwards, which is expected since not every ticket has many associated tags.
- Overall, the dataset is well-structured and suitable for NLP tasks.

## Dataset Overview

- Total Rows: **28,587**
- Total Columns: **16**
- Memory Usage: **3.5 MB**

## Data Quality Analysis

### Missing Values
- The `body`, `queue`, `priority`, `type`, and `language` columns contain no missing values.
- The `subject` column has 3,838 missing values.
- Only 7 responses are missing in the `answer` column.
- Higher tag columns (`tag_5` to `tag_8`) contain many missing values, which is expected because not every ticket has multiple tags.

### Language Distribution
- English tickets: 16,338
- German tickets: 12,249

For the initial version of the project, only English tickets will be used for model development.

### Duplicate Records

- No duplicate rows were found in the dataset.
- This indicates that the dataset is clean and does not require duplicate removal.

## Decisions Taken

- Use only English (`en`) tickets for the initial version of the project.
- Use the `body` column as the primary text input since it contains no missing values.
- Retain the `subject` column wherever available.
- Drop the few rows with missing `answer` values during preprocessing.
- Ignore `tag_5` to `tag_8` in the MVP, as they contain many missing values.

## Next Steps

- Analyze queue distribution.
- Analyze priority distribution.
- Analyze ticket type distribution.
- Explore ticket text length.
- Begin data preprocessing.


## Queue Distribution

The dataset contains 10 different support queues.

### Observations

- Technical Support is the most common queue with **8,362** tickets.
- Product Support and Customer Service are the next most frequent queues.
- General Inquiry has the fewest tickets (**405**).
- The queue distribution is not perfectly balanced, which reflects real-world customer support systems where technical issues are more common than general inquiries.

## Priority Distribution

### Observations

- Medium priority tickets are the most common (**11,515**).
- High priority tickets are nearly as frequent (**11,178**), indicating that urgent customer issues are well represented in the dataset.
- Low priority tickets are comparatively fewer (**5,894**).
- Overall, the priority distribution is reasonably balanced between medium and high priorities, making it suitable for building a priority prediction model.

## Ticket Type Distribution

### Observations

- Incident tickets are the most common (**11,466**).
- Requests are the second largest category (**8,187**).
- Problems account for **6,012** tickets.
- Change requests are the least frequent (**2,922**).
- All ticket types have sufficient samples, making the dataset suitable for ticket type classification.

## Ticket Length Analysis

### Observations

- The average ticket length is approximately **53 words**.
- The median ticket length is **54 words**, indicating a fairly balanced distribution.
- The shortest ticket contains **1 word**, while the longest contains **175 words**.
- The histogram shows that ticket lengths vary across the dataset, with most tickets falling within a moderate word range.
- Overall, the ticket lengths are suitable for NLP preprocessing techniques such as tokenization and TF-IDF.



# Final EDA Summary

The dataset is clean, well-structured, and suitable for developing an AI Customer Support Copilot.

Key findings include:
- The dataset contains 28,587 customer support tickets with 16 features.
- Essential columns such as `body`, `queue`, `priority`, `type`, and `language` have no missing values.
- The dataset contains no duplicate records.
- English tickets will be used for the initial version of the project.
- Technical Support is the most common support queue.
- Medium and High priority tickets are well represented.
- Incident is the most common ticket type.
- Ticket lengths are moderate, making the dataset suitable for NLP techniques such as TF-IDF, tokenization, and transformer-based models.

Overall, the dataset provides sufficient quality and diversity for developing models for queue prediction, priority prediction, and AI-assisted customer support.