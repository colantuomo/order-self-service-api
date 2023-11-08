# Use an official Node.js runtime as the base image
FROM node:16.20.1-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm install --omit=dev
ENV DATABASE_URL postgresql://postgres:postgres@database:5432/fiap?schema=public

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Generate prisma client
RUN npx prisma generate

EXPOSE 8080

# Specify the command to run your application
ENTRYPOINT  ["sh", "init.sh"]
