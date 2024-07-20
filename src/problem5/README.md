# A Crude Server

This is a simple backend server that provides a CRUD interface for a resource (users). The server is built using ExpressJS and TypeScript. The server is connected to a simple database (MongoDB) for data persistence.

## Features
- CRUD operations for user management
- ExpressJS for handling HTTP requests
- MongoDB integration for data storage
- TypeScript for static type checking
- Comprehensive test suite with Mocha and Chai
- Hot-reload for development with Nodemon
- Data validation with Joi
- Git hooks with Husky


## Quick Start

### Pre-requisites

- NodeJS: verson >18.0
- MongoDB: version >4.0
- Yarn: version >1.0

### Installation

- Clone the repository
- Install dependencies

```bash
yarn install
```

- Copy the `.env.example` file to `.env`

```bash
cp .env.example .env
```

- Update the `.env` file with the appropriate values

```
PORT=8000
MONGODB_URI=mongodb://localhost:27017/problem5
```

- Start the development server with hot-reload

```bash
yarn dev
```

## Deployment

- Build the application

```bash
yarn build
```

- Start the server

```bash
yarn start
```

## API Documentation

### 1. Create a user

- Endpoint: `POST /v1/users`
- Payload:

```json
{
    "name": "John Doe",
    "email": "john.doe@gmail.com"
}
```

- Response status: `201`
- Response:

```json
{
    "_id": "5f7b1b3b4b3b4b3b4b3b4b3b",
    "name": "John Doe",
    "email": "john.doe@gmail.com"
}
```

### 2. Get a user

- Endpoint: `GET /v1/users/:id`
- Response Status: `200`
- Response:

```json
{
    "_id": "5f7b1b3b4b3b4b3b4b3b4b3b",
    "name": "John Doe",
    "email": "john.doe@gmail.com"
}
```


### 3. List users

- Endpoint: `GET /v1/users`
- Description: List users with basic filters
- Query Parameters:
    - `page`: The page number
    - `limit`: The number of items per page
    - `sortBy`: The field to sort by
    - `projectBy`: The fields to project
- Response Status: `200`
- Response:

```json
{
    "results": [
        {
            "_id": "669b3e6210216af7149f490a",
            "name": "test01",
            "email": "test01@gmail.com"
        }
    ],
    "page": 1,
    "limit": 10,
    "totalPages": 1,
    "totalResults": 3
}
```

### 4. Update a user

- Endpoint: `PUT /v1/users/:id`
- Description: Update the user details
- Request Payload:

```json
{
    "name": "John Doe 2",
}
```

- Response Status: `200`
- Response:

```json
{
    "_id": "669b3e6210216af7149f490a",
    "name": "John Doe 2",
    "email": "test01@gmail.com"
}
```

### 5. Delete a user

- Endpoint: `DELETE /v1/users/:id`
- Description: Delete a user
- Response status: `204`
- Response: No content

## Contributors

- [David Nguyen](https://github.com/duyk16)