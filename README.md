<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Challenge nest js



## Project installation


git clone https://github.com/martinresi/Challenge.git

cd challenge

npm install


## Running the app
npm run start

## Web

url : http://localhost:3000/

## Configuracion de la DB
### Crear DB
### Conexion a Base de datos
En el archivo .env indicar credenciales de conexion:
```typescript
    DATABASE_URI = "mongodb://[servidor]:[puerto]/[schema]"
```

### Endpoints API
#### Characters
```
GET http://localhost:3000/characters

RESPONSE:
[
    {
        "id": 1,
        "height": 172,
        "name": "Luke Skywalker",
        "mass": 77,
        "eyeColor": "blue",
        "birthYear": 1998
    }
]
```

```
GET http://localhost:3000/characters/{id}

(200) RESPONSE:
{
    "id": id,
    "name": "Luke Skywalker",
    "height": 172,
    "mass": 77,
    "hairColor": "blond",
    "skinColor": "fair",
    "eyeColor": "blue",
    "birthYear": 1998
}

(404) RESPONSE:
{
    "statusCode": 404,
    "message": "Character not found"
}
```

```
POST http://localhost:3000/characters
BODY:
{
    "id": 2,
    "name": "Luke Skywalker",
    "height": 172,
    "mass": 70,
    "hairColor": "blond",
    "skinColor": "fair",
    "eyeColor": "blue",
    "birthYear": 1998
}

(201) RESPONSE:
{
    "id": id,
    "name": "Luke Skywalker",
    "height": 172,
    "mass": 70,
    "hairColor": "blond",
    "skinColor": "fair",
    "eyeColor": "blue",
    "birthYear": 1998
}

(4OO) BAD REQUEST:
{
    "message": [
        "height must be a number conforming to the specified constraints",
        "height should not be empty"
    ],
    "error": "Bad Request",
    "statusCode": 400
}
```

```
DELETE http://localhost:3000/characters/{id}

(200) RESPONSE:
{
    "message": "Character eliminado"
}

(404) NOT FOUND:
{
    "statusCode": 400,
    "message": "Character not found"
}
```