# Step 1: Build the application
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /frontend

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files and directories into the container
COPY . .

# Build the application
RUN npm run build

# Step 2: Run the application using a lightweight server
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /frontend

# Copy the built files from the previous stage
COPY --from=builder /frontend ./
RUN npm install -g next

# Expose the Next.js default port
EXPOSE 3000

# Start the Next.js server in production mode
CMD ["npm", "start"]
