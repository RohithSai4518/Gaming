# Chamber Crawler - Container Deployment
FROM node:18-alpine

WORKDIR /app

# Copy application files
COPY package.json package-lock.json ./
COPY server.js index.html Makefile ./
COPY css ./css
COPY js ./js
COPY tests ./tests

EXPOSE 8080

CMD ["npm", "start"]
