# Use Node 22 (Prisma 7 requires >=20.19)
FROM node:22

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your backend code
COPY . .

# If using TypeScript, build the project
# RUN npm run build   <-- uncomment if you have a build script

# Expose backend port
EXPOSE 3001

# Default command to keep container running for dev
# Change to "start" if using compiled JS in dist/
CMD ["npm", "run", "dev"]
