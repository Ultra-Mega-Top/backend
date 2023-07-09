FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./src ./src
COPY ./.eslintrc.js ./.eslintrc.js
COPY ./nest-cli.json ./nest-cli.json
COPY ./tsconfig.json ./tsconfig.json


EXPOSE 3000

CMD [ "npm", "run", "start:dev"]
