FROM node:20

WORKDIR /src/install

COPY package.json .
RUN npm run install

FROM node:20 as compile
LABEL stage=compile

WORKDIR /src/build

# COPY --from=install /src/install .
COPY . .

RUN npm run build

FROM node:20-alpine as deploy

#WORKDIR /app

COPY --from=compile /src/build/dist/main.js index.js
COPY --from=compile /src/build/node_modules node_modules

ENTRYPOINT node .