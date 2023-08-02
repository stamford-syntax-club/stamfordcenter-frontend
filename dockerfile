# Use the official Node.js image as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) to the container
COPY package.json ./

# Set the NODE_ENV environment variable to "production"
ENV NODE_ENV=production

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the production version of the application
RUN npm run build

# Expose the port that your Next.js application will run on (by default Next.js uses port 3000)
EXPOSE 3000

# Set the command to start your Next.js application in production mode
CMD ["npm", "start"]
