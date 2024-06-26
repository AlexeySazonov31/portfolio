FROM node:18-alpine as BUILD_IMAGE
WORKDIR /app

COPY package.json .

RUN npm config set legacy-peer-deps true
RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine as PRODUCTION_IMAGE
WORKDIR /app

COPY --from=BUILD_IMAGE /app/dist /app/dist
EXPOSE 8080

COPY package.json .
COPY vite.config.ts .

RUN npm config set legacy-peer-deps truex
RUN npm install typescript 

EXPOSE 8080
CMD ["npm", "run", "preview"]