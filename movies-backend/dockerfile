# Base image will be with OS and Node.js installed already

FROM node:22

# set up working directory

WORKDIR /app

# Copy package.json and package-lock.json

COPY package*.json ./

# Install dependencies

RUN npm install

# Copy the rest of our app
# <source> <destionation>
COPY . .

# Expose our app port
EXPOSE 3001

# How to start the app "node index.js"

CMD ["node", "index.js"]