FROM node:22
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
RUN npm run build
EXPOSE 3001
ENV CACHE_BUST=2
CMD ["node", "dist/src/index.js"]
