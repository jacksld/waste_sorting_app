FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY server.js ./
COPY api/ ./api/
CMD ["npm", "start"]
