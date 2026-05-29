FROM node:22
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
RUN npm run build
EXPOSE 3001
CMD ["node", "-e", "console.log('Starting...'); require('./dist/index.js');"]
