# BedrockData Engineering Candidate

An API written in ExpressJS

## Challenge Description

Build an API server that provides the two endpoints described below using the software requirements also described below.

## Software Requirements

* [Node 8](https://nodejs.org/en/)
* [ExpressJS](https://expressjs.com/)

## Endpoints

### Create Account

Creates an account containing an email and password.  Accounts are stored on the local filesystem with one file per account.

Note: An example file is already uploaded to [accounts/parris@bedrockdata.com](accounts/parris@bedrockdata.com)

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

