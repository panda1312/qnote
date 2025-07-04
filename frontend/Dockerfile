FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package files first — allows better caching
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the app
COPY . .

# Expose the port your app runs on
EXPOSE 3111

# Start the app
CMD ["npm", "run", "dev"]
