# Dia-BEAT-es
# Project Description

Diabetes is a significant health problem in India. According to the International Diabetes Federation, India is home to 77 million diabetic patients, making it the world's diabetic capital. There are several reasons why diabetes is a significant health problem in India. One of the main factors is the lifestyle changes that have occurred in recent decades. Urbanisation, sedentary lifestyles, and changes in dietary habits have contributed to a rise in the prevalence of obesity and type 2 diabetes in India. Another factor is the lack of awareness about diabetes and its complications. Many people in India are unaware of the risk factors and symptoms of diabetes, which can delay diagnosis and treatment. To address this growing issue, we have created an informative, interactive as well as responsive website to spread awareness about diabetes and prevent its onset. The website offers a variety of free features, including a BMI calculator, calorie counter, diet plans, recipe finder, and a machine learning diabetes prediction model. The Dia’BEAT’es website is made to give people detailed knowledge about diabetes, including its causes, symptoms, and nutritional and lifestyle recommendations.. Get personalised diet plans based on their BMI index. The calorie counter helps users estimate their daily calorie intake, while the diet plans are tailored to specific age groups and weight categories. The recipe finder feature makes it easy to find healthy and tasty recipes based on specific ingredients.One of the most exciting features of the Dia’BEAT’es website is the machine learning diabetes prediction model. This model uses a variety of parameters, such as age, glucose level, body mass index, pregnancies, skin thickness,  to predict whether a user is at risk of developing diabetes. By identifying individuals who are at risk of developing diabetes, we can take proactive measures to prevent its onset and reduce the burden of diabetes in India. Technologies used to develop the website are HTML, CSS and JavaScript, to develop the diabetes prediction machine learning model the technology used is RandomForest algorithm to classify the patient into diabetic or non diabetic category based on the predictions made with the given parameters. GCP services that we have used are computer engine and app engine for deployment of the website and machine learning model. AMD instance is also used to deploy the website. Dia’BEAT’es website and the diabetes prediction ML model is now accessible for everyone.

# Objectives

Objectives : 

To raise awareness about diabetes and its prevention: the project aims to spread awareness about the disease and its prevention through informative content and tools that can help users maintain a healthy lifestyle.

To provide essential information about diabetes: The project aims to provide in-depth information about diabetes, its types, causes, symptoms, complications, and treatment options to help users understand the disease better.

To assist users in managing their condition: the project aims to provide free access to tools such as a BMI calculator, calorie counter, diet planner, and recipe finder that can assist users in managing their diabetes and maintaining a healthy lifestyle.

To predict diabetes: The project includes a machine learning diabetes prediction model that can predict whether a user is diabetic or not based on certain parameters.

To reduce the burden of diabetes: By providing these resources and tools, the project aims to reduce the burden of diabetes and improve the quality of life for all people who have or are at risk for the disease.

# Methodology

HTML, CSS, and JavaScript were used for development of the website.

These technologies were used to create an interactive and user-friendly website.
The design is intuitive and easy to navigate.
The website features include BMI calculator, calorie counter, diet plans, and recipe finder.

The recipe finder page was created using an API provided by ‘TheMealDB’, when an ingredient is entered by the user relevant recipes are fetched using the API.

Machine learning diabetes prediction model

Data Collection: The first step in building the diabetes prediction model is to collect the relevant data. The dataset named PIMA Indians Diabetes Database used for training the machine learning model was gathered from kaggle. The data includes features such as age, gender, body mass index (BMI), blood pressure, and glucose levels.

Data Preprocessing: It involved the process of cleaning and removing any missing values, duplicates, or irrelevant features. The project also scales and normalises the data to ensure that each feature has equal importance in the prediction model.

Data Splitting: The project splits the preprocessed data into two sets: training set and testing set. The training set is used to train the random forest algorithm, while the testing set is used to evaluate the performance of the model.

Model Training: The project trains the random forest algorithm on the training set. The algorithm builds multiple decision trees using different subsets of features and observations. Each tree independently predicts the diabetic condition of a user, and the final prediction is made by combining the predictions of all trees.

Model Evaluation: The project evaluates the performance of the random forest algorithm on the testing set. The project’s performance was evaluated using its accuracy. Furthermore to increase the performance of the classifier, parameter tuning helped us generalise better for a variety of data values.

Deployment: Finally, the machine learning diabetes prediction model is deployed using the GCP App engine and can be found on https://diabeates.uc.r.appspot.com.

Compute Engine's virtual machine instance was created using n2D-standard-2 and cpu platform is AMD-Rome.

Results:

After training the Random Forest model on the Pima Indian Diabetes dataset, we obtained an accuracy of 82.46% on the test set. This means that the model is able to correctly predict the diabetes status of a patient in 82.46% of cases, based on their age, BMI, blood pressure, and glucose levels. This information can be useful for healthcare professionals in identifying risk factors for diabetes and recommending preventive measures to patients. For example, if a patient has high glucose levels, they may be advised to make dietary changes, increase physical activity, or even start medication to lower their blood sugar levels and prevent the onset of diabetes. Overall, the Random Forest model trained on the Pima Indian Diabetes dataset has shown promising results in predicting the diabetes status of patients based on their demographic and clinical characteristics. With further improvements and optimizations, this model could potentially be used as a tool for early detection and prevention of diabetes in clinical practice.
Dia’BEAT’es website has been successfully deployed using Google Cloud Services and is accessible to everyone. 34.28.229.228 (copy & paste the ip address in your web browser to use DiaBEATes).
