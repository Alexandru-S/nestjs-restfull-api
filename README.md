# Hotel Booking REST API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Description

This project is a REST API built using the [NestJS](https://nestjs.com) framework. It features CRUD operations for managing hotels, rooms, and bookings. The application uses:

- **Prisma** as an ORM for database management
- **PostgreSQL** as the database
- **Docker** and **Docker Compose** for containerization
- **Swagger** for API documentation

This API is designed to simplify hotel management, including handling room assignments and guest bookings.

---

## Features

- Manage hotels (create, read, update, delete operations)
- Manage rooms associated with hotels
- Manage bookings for specific rooms
- Fully containerized with Docker for easy deployment
- API documentation via Swagger

---

## Prerequisites

Ensure you have the following installed on your system:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [pnpm](https://pnpm.io/)

---

## Project Setup

### 1. Clone the repository

```bash
$ git clone <repository-url>
$ cd hotel-booking-api
```

### 2. Install dependencies

```bash
$ pnpm install
```

### 3. Start the application with Docker Compose

```bash
$ docker-compose up -d
```

This will start the PostgreSQL database container.

### 4. Configure the environment

Create a `.env` file in the project root and configure the database connection:

```env
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/mydb?schema=public"
```
or if you are using WSL2 like me

```env
DATABASE_URL="postgresql://<username>:<password>@host.docker.internal:5432/mydb?schema=public"
```

### 5. Run migrations

```bash
$ pnpm prisma migrate dev --name init
```

### 6. Seed the database (optional)

```bash
$ pnpm ts-node prisma/seed.ts
```

### 7. Start the development server

```bash
$ pnpm run start:dev
```

---

## API Documentation

The API documentation is available via Swagger. Start the application and navigate to:

```
http://localhost:3000/api
```

---

## CRUD Endpoints

### Hotels
- **POST /hotels** - Create a new hotel
- **GET /hotels** - Get a list of hotels
- **GET /hotels/:id** - Get details of a specific hotel
- **PATCH /hotels/:id** - Update a specific hotel
- **DELETE /hotels/:id** - Delete a specific hotel

### Rooms
- **POST /rooms** - Create a new room
- **GET /rooms** - Get a list of rooms
- **GET /rooms/:id** - Get details of a specific room
- **PATCH /rooms/:id** - Update a specific room
- **DELETE /rooms/:id** - Delete a specific room

### Bookings
- **POST /bookings** - Create a new booking
- **GET /bookings** - Get a list of bookings
- **GET /bookings/:id** - Get details of a specific booking
- **PATCH /bookings/:id** - Update a specific booking
- **DELETE /bookings/:id** - Delete a specific booking

---

## Testing

Run tests to ensure the API behaves as expected:

```bash
# Unit tests
$ pnpm run test

# End-to-end tests
$ pnpm run test:e2e

# Test coverage
$ pnpm run test:cov
```

---

## Deployment

### Using Docker

1. Build the Docker image:

```bash
$ docker build -t hotel-booking-api .
```

2. Run the container:

```bash
$ docker run -p 3000:3000 --env-file .env hotel-booking-api
```
