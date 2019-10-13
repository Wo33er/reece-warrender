FROM node:9-alpine

EXPOSE 3000
WORKDIR /app
COPY . /app
CMD ["node", "app/app.js"]