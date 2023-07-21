# UNKNOWN AUTH SERVICE 👻
This microservice consists of user-related services. It is responsible for user authentication and authorization. It uses JWT for authentication and authorization. It also uses Prisma as ORM to interact with the database.

## TECHNOLOGY USED: 💻
- > Express with Typescript
- > Postgres as Database
- > Prisma as ORM

## STEPS TO RUN THE PROJECT: 🏃
1. Copy the sample env file and modify according to your need.
2. Run the command to install all dependencies: ```npm i```
3. Run the command to generate migration files: ```npx prisma generate```
4. Run the command to run the migrations: ```npx prisma migrate dev```
5. Run the command to start the server: ```npx run dev```

## API ENDPOINTS: 🌐
- > GET: /ping
```json
    {
      "response": {
      "message": "pong",
      }
    }
```
- > POST: /api/auth/signup
```json
    {
      "body": {
        "name": "John Doe",
        "email": "johndoe@email.com",
        "password": "password"
      }
    }

    {
      "response": {
        "message": "User created successfully",
        "payload": "jwt token"
      }
    }
```
- > POST: /api/auth/login
```json
    {
      "body": {
          "email": "johndoe@email.com",
          "password": "password",
      }
    }

    {
      "response": {
        "message": "User logged in successfully",
        "payload": "jwt token",
      }
    }
```
- > POST: /api/auth/validate
```json
    {
      "body": {
          "token": "jwt token",
      }
    }

    {
      "response": {
        "message": "Token validated successfully",
        "payload": "new jwt token"
      }
    }
```
- > GET: /api/auth/user/:token
```json
    {
      "message": "User data retrieved successfully",
      "payload": {
          "id": "user_id",
          "name": "John Doe",
          "email": "johndoe@email.com"
      }
    }
```

## LINKS: 🔗
1. [Postman Collection 🚀](https://drive.google.com/file/d/1SsNLXSRVFRWTUlMGJqd1BLK6vbRyAu-f/view?usp=sharing) 
2. [Postman Environment Variable 💾](https://drive.google.com/file/d/10DvyfG5r-NuZ-KeR7gy2NL0h8OiLb65f/view?usp=sharing)

