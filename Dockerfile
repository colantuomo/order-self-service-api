# Use an official Node.js runtime as the base image
FROM node:18.16.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Specify the command to run your application
CMD [ "npm", "run", "dev" ]