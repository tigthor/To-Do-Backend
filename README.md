# Awesomity Backend Challenge :airplane:

Awesomity Backend Challenge is a challenge to create a todo BAckend api where the user can Create, Read, Update and Delete.

### Badges

[![CircleCI](https://circleci.com/gh/Soma-Technologies-Inc/visitAfrica-backend/tree/develop.svg?style=svg)](https://circleci.com/gh/Soma-Technologies-Inc/visitAfrica-backend/tree/develop)
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed%20by-Hound-blueviolet)](https://houndci.com)
[![Coverage Status](https://coveralls.io/repos/github/tigthor/To-Do-Backend/badge.svg?branch=main)](https://coveralls.io/github/tigthor/To-Do-Backend?branch=main)

### Technologies :balance_scale: :computer:

- [Es6+ Javascript](https://www.ecma-international.org/ecma-262/9.0/index.html) The project was written with ES6 syntax and above.
- [Node/Express](https://nodejs.org/en/) A JavaScript runtime built on Chrome's V8 JavaScript engine.
- [PostgreSQL](https://www.postgresql.org/) The World's Most Advanced Open Source Relational Database.
- [Pivotal Tracker](https://www.pivotaltracker.com) A project management tool used to manage the app.
- [Npm](https://www.npmjs.com/) Used as the package manager for the app. A fast, reliable, and secure dependency management system.
- [Sequelize ORM](https://sequelize.org/v3/) A powerful library in Javascript that makes it easy to manage a SQL database
- [Swagger-UI](https://swagger.io) For documenting the APis

### REST API Docs :clap: :clap:

The Api documentation is done using swagger. View [Todo App Documentation](http://localhost:3000/api-docs)

### JWT Authentication :raised_hands: :raised_hands:

The API endpoints are being authenticated using [JWT(Json Web Token)](https://jwt.io/).

### Api Features

```
_____________________________________________________________
METHOD| PATH                     | DESCRIPTIONS              |
______|__________________________|___________________________|
POST  | /api/auth/signup         | Create a new Auth account |
______|__________________________|___________________________|
POST  | /api/auth/login          | login with email& password|
______|__________________________|___________________________|
PATCH | /api/auth/activate?token | Activate created User     |
______|__________________________|___________________________|
GET   | /api/todo/:id            | get todo by paramId       |
______|__________________________|___________________________|
POST  | /api/todo                |  create a new todo        |
______|__________________________|___________________________|
GET   | /api/todos               | get all todos             |
______|__________________________|___________________________|
GET   | /api/search?q={keyword}  | Search todos              |
______|__________________________|___________________________|
PATCH | /api/todo/:id            | Edit todo item by id      |
______|__________________________|___________________________|
DELETE| /api/todo/:id            | Delete todo item by id    |
______|__________________________|___________________________|
DELETE| /api/todos               | Delete all todos          |
______|__________________________|___________________________|
```

### Installation and Running the Application :collision: :collision:

- Before cloning the application you need to have these requirements below

  ##### Prerequisities

- Node.js installed in your machine it can be downloaded here [Install Node](nodejs.org)
- Postman installed in your machine it can be downloaded here [Install Postman](https://www.postman.com/)
- Postgresql installed in your machine it can be downloaded here [Install Postgresql](https://www.postgresql.org/)
- Sendgrid Api and it can be got here [Sendgrid APi](http://sendgrid.com/)
- And of course a cup of tea or coffee I prefer coffee

  ##### How to run the project

- Clone the repository using: `git clone https://github.com/tigthor/To-Do-Backend.git`
- Run `npm install` To install the project dependencies
- Use `.env.examples` to set your keys specifically
- Run `npm run statDev` To start the application
- Then access the server on `localhost:3000`
- Then Use swagger docs for testing the application
- Run `npm test` to run test

## Contributor :star_struck: :star_struck: :heavy_heart_exclamation:

<table style="width:100%">
  <tr>
    <th><a href="https://github.com/tigthor">Byiringiro T.</a></th>
  </tr>
  <tr>
    <td><img align="center" src="https://i.ibb.co/z2S5bkh/43029221-2108225642763593-8148098077761208320-n-removebg.jpg" alt="tigthor" height="145" width="145">       </td>

## License

[MIT]

<footer>© Copyright 2021 Thierry BYIRINGIRO</footer>
