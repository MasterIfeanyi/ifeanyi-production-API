FROM node:20-alpine

LABEL maintainer="chimaifeanyi29@gmail.com"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3500

CMD ["node", "index.js"]
