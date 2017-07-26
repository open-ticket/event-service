# event-service

## About
This microservice controls the creation/management of events in the system. It
mainly serves as the data source for events and ticketing types.

This server shouldn't be exposed to the Internet, although in practise it shouldn't be a problem.

## Setting up

You'll need Node.JS (we recommend NVM for keeping up to date), a PostgreSQL
database already set up, and `yarn`/`npm`.

```bash
$ yarn # install dependencies
$ cp .env{.example,} # copy our example env file
$ vi .env # edit the env file using your favourite text editor

DB_NAME=my-database-name
DB_USER=username
DB_PASS=password
DB_PORT=5432
PORT=3000

$ yarn run migrate # migrate the database tables
$ yarn start # start the fans!
```

## Endpoints

| Path                | Verb   | Description                             |
|---------------------|--------|-----------------------------------------|
| `/event/`           | GET    | Gets list of events                     |
| `/event/:id/`       | GET    | Gets event by id                        |
|                     | POST   | Creates a new event                     |
|                     | PATCH  | Update one or more event attributes     |
|                     | DELETE | Deletes an event                        |

## Response format

Responses will look like this:

```json
{
  "content": {},
  "error": ""
}
```

`content`: the main content of the response

`error`: If there was an error, this will show any extra information

## Tests

Coming soon...! Will most likely use mocha + chai.
