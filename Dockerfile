FROM node:alpine

ARG PORT

ENV PORT=$PORT

WORKDIR /opt

COPY package.json .

RUN npm install

COPY . .

EXPOSE $PORT

ENTRYPOINT node index.js
