import streamlit as st
import pandas as pd
import numpy as np
import pickle

# Load the trained model
model = pickle.load(open('trained_model.sav', 'rb'))

# Define the function to predict diabetes
def predict_diabetes(pregnancies, glucose, blood_pressure, skin_thickness, insulin, bmi, age):
    input_data = np.array([[pregnancies, glucose, blood_pressure, skin_thickness, insulin, bmi, age]])
    prediction = model.predict(input_data)[0]
    if prediction == 0:
        return "No diabetes"
    else:
        return "Diabetes"

# Create the Streamlit app
def main():
    st.title("Diabetes Prediction App")

    st.write("Please enter the following information:")

    pregnancies = st.slider("Number of pregnancies", 0, 17, 1)
    glucose = st.slider("Glucose level", 0, 199, 80)
    blood_pressure = st.slider("Blood pressure (mm Hg)", 0, 122, 70)
    skin_thickness = st.slider("Skin thickness (mm)", 0, 99, 20)
    insulin = st.slider("Insulin level (mu U/ml)", 0, 846, 79)
    bmi = st.slider("Body mass index (BMI)", 0.0, 67.1, 25.0, 0.1)
    age = st.slider("Age", 1,100)

    if st.button("Predict"):
        result = predict_diabetes(pregnancies, glucose, blood_pressure, skin_thickness, insulin, bmi, age)
        st.write("Based on the information you provided, the prediction is: ", result)

if __name__ == '__main__':
    main()
