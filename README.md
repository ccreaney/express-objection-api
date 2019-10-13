# Express/Knex/Objection

A simple scaffold application for showing database connection and management on Node.js
The guide leading to this result can be found [here](https://medium.com/@nicola.dallasen/express-knex-objection-painless-api-with-db-74512c484f0c).

## What's included

- `pg` - PostreSQL module
- `knex` - Query builder
- `objection` - ORM built upon Knex
- `express` - API framework

## What does it do

It provides a simple user/message database and shows how relation can be modelled with Objection Model class.
It also shows how to use eager loading to get related queries.

### Installation
To get started, you will have to run a few terminal commands. To begin with, make sure you have [brew](https://brew.sh/) installed. Run `brew -v` in yout terminal to check.

Then, brew install the following packages:
- git (brew install git)
- nvm (brew install nvm)
- node (nvm install node)
    - npm install -g nodemon
- yarn (brew install yarn)
- postgresql (brew install postgresql)

## How to use it

- Clone this repo: ``
- `cd express-knex-objection`
- `npm install` to install required packages
- create the db `createdb dev`
- Modify database connection according to your machine in `knexfile.js`
- install knex globally `npm install knex -g`
- run the migrations `knex migrate:latest`
- `npm start` to start the server
- Point to `localhost:3000/api/users` to test if it's working