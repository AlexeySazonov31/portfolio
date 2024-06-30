FROM node:21-alpine3.19 as base
WORKDIR /app

COPY package.json .
COPY vite.config.ts .

RUN yarn add typescript 
RUN yarn install

COPY . .

RUN yarn build

EXPOSE 8080

CMD ["yarn", "preview"]