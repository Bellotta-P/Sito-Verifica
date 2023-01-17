# Use an official Node.js runtime as the base image
FROM node:14

# Create a directory for the application
RUN mkdir -p /usr/src/app

# Change the working directory
WORKDIR /usr/src/app

# Copy the requirements.txt file
COPY requirements.txt .

# Install the Python dependencies
RUN pip install -r requirements.txt

# Copy the rest of the Flask application files
COPY . .

# Copy the built Angular application files to the Flask static folder
COPY --from=node /usr/src/app/dist/ /usr/src/app/static/

# Expose the port the application will run on
EXPOSE 5000

# Start the Flask application
CMD ["python", "app.py"]

