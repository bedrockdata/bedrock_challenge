# BedrockData Engineering Candidate

An API written in ExpressJS

## Software Requirements

* [Node 8](https://nodejs.org/en/)
* [ExpressJS](https://expressjs.com/)

## Endpoints

### Create Account

Creates an account containing an email and password.  Accounts are stored on the local filesystem with one file per account.

```sh
POST /account
```

Example request:

```javascript
{
  "email": "parris@bedrockdata.com",
  "password": "parr1s_fake_passw0rd"
}
```

Example response:

```javascript
{
  "success": "true",
  "message": "Successfully created account for parris@bedrockdata.com."
}
```

### Login

Takes a username and password and validates against the account files.  Returns a HTTP status 200 if username and password combination exists, and a 401 if not.

```sh
GET /account
```

Example request:

```javascript
{
  "email": "parris@bedrockdata.com",
  "password": "parr1s_wrong_passw0rd"
}
```

Example response:

```javascript
{
  "success": "false",
  "message": "Could not authenticate."
}
```

