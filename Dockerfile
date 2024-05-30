FROM node:20

WORKDIR /app

COPY . /app

RUN cd /app

RUN npm install

RUN npm run build

CMD [ "npm","run","start" ]
