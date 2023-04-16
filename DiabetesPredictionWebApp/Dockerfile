# Use the official Python image as the base image
FROM python:3.7

# Set the working directory
WORKDIR /app

# Copy the requirements file and install the dependencies
COPY requirements.txt ./requirements.txt
RUN pip install -r requirements.txt

EXPOSE 8080

COPY . /app
# Expose the port that the application listens on

# Start the Streamlit application
CMD streamlit run --server.port 8080 --server.enableCORS false