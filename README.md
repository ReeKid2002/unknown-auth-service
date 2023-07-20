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
    response: {
      "message": "pong",
    }
```
- > POST: /api/auth/signup
```json
    body: {
        "name": "John Doe",
        "email": "johndoe@email.com",
        "password": "password"
    }

    response: {
      "message": "User created successfully",
      "payload": "jwt token"
    }
```
- > POST: /api/auth/login
```json
    body: {
        "email": "johndoe@email.com",
        "password": "password",
    }

    response: {
      "message": "User logged in successfully",
      "payload": "jwt token",
    }
```
- > POST: /api/auth/validate
```json
    body: {
        "token": "jwt token",
    }

    response: {
      "message": "Token validated successfully",
      "payload": "new jwt token"
    }
```

## LINKS: 🔗
1. [Postman Collection 🚀](https://drive.google.com/file/d/107LpqKnJEaK__EoSYF1NOmSSwyyfmhSo/view?usp=sharing) 
2. [Postman Environment Variable 💾](https://drive.google.com/file/d/1gRenp9ClkJ_-ZGjezJtPmv4PkP9AoVV0/view?usp=sharing)

