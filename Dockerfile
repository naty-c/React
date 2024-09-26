# Uses an official Node.js base image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the application code from the PC to the container
COPY . .

# Install project dependencies
RUN npm install

# Define the command that will start the application
CMD ["npm", "run", "dev"]

# Exposes the port that will be used by the application (usually 3000)
EXPOSE 3000
