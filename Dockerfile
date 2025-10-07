FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
ENV PORT=8080
HEALTHCHECK --interval=10s --timeout=5s CMD wget -qO- http://localhost:8080/health || exit 1
EXPOSE 8080
CMD ["node", "server.js"]
