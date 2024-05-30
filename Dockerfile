FROM node:20

WORKDIR /app

COPY . /app

RUN npm install

RUN npm build

CMD [ "npm","run","start" ]
