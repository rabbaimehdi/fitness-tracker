# Fitness Tracker API

This is a RESTful API for a fitness tracker application built using Node.js, Express, and MongoDB. The API allows users to manage their fitness activities, including workouts, exercises, nutrition plans, progress tracking, and social features.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Server](#running-the-server)
- [API Documentation](#api-documentation)
  - [User Management](#user-management)
  - [Workout Management](#workout-management)
  - [Exercise Management](#exercise-management)
  - [Nutrition Plan Management](#nutrition-plan-management)
  - [Progress Tracking](#progress-tracking)
  - [Social Features](#social-features)
- [License](#license)

## Features

- User registration and authentication
- CRUD operations for workouts, exercises, nutrition plans, and progress tracking
- Social features: follow users, get followers, get following users, and activity feed

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rabbaima/fitness-tracker.git
   cd fitness-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```plaintext
MONGODB_URI=mongodb://username:password@localhost:27017/mydatabase
JWT_SECRET=your_jwt_secret
PORT=3000
```

## Running the Server

Start the server with the following command:

```bash
node src/server.js
```

The server will start on the port specified in the `.env` file (default: 3000).

## API Documentation

### User Management

- **Register a new user**
  ```http
  POST /users/register
  Content-Type: application/json

  {
    "username": "testuser",
    "email": "testuser@example.com",
    "password": "password123"
  }
  ```

- **Login a user**
  ```http
  POST /users/login
  Content-Type: application/json

  {
    "email": "testuser@example.com",
    "password": "password123"
  }
  ```

- **Get a user by ID**
  ```http
  GET /users/{id}
  ```

- **Update a user by ID**
  ```http
  PUT /users/{id}
  Content-Type: application/json

  {
    "username": "updateduser"
  }
  ```

- **Delete a user by ID**
  ```http
  DELETE /users/{id}
  ```

### Workout Management

- **Create a new workout**
  ```http
  POST /workouts
  Content-Type: application/json

  {
    "userId": "{userId}",
    "name": "Morning Workout",
    "exercises": []
  }
  ```

- **Get all workouts**
  ```http
  GET /workouts
  ```

- **Get a workout by ID**
  ```http
  GET /workouts/{id}
  ```

- **Update a workout by ID**
  ```http
  PUT /workouts/{id}
  Content-Type: application/json

  {
    "name": "Updated Workout"
  }
  ```

- **Delete a workout by ID**
  ```http
  DELETE /workouts/{id}
  ```

### Exercise Management

- **Create a new exercise**
  ```http
  POST /exercises
  Content-Type: application/json

  {
    "name": "Push-up",
    "description": "A basic push-up exercise",
    "duration": 10,
    "caloriesBurned": 50
  }
  ```

- **Get all exercises**
  ```http
  GET /exercises
  ```

- **Get an exercise by ID**
  ```http
  GET /exercises/{id}
  ```

- **Update an exercise by ID**
  ```http
  PUT /exercises/{id}
  Content-Type: application/json

  {
    "name": "Updated Exercise"
  }
  ```

- **Delete an exercise by ID**
  ```http
  DELETE /exercises/{id}
  ```

### Nutrition Plan Management

- **Create a new nutrition plan**
  ```http
  POST /nutrition-plans
  Content-Type: application/json

  {
    "userId": "{userId}",
    "name": "Keto Diet",
    "meals": ["Breakfast", "Lunch", "Dinner"]
  }
  ```

- **Get all nutrition plans**
  ```http
  GET /nutrition-plans
  ```

- **Get a nutrition plan by ID**
  ```http
  GET /nutrition-plans/{id}
  ```

- **Update a nutrition plan by ID**
  ```http
  PUT /nutrition-plans/{id}
  Content-Type: application/json

  {
    "name": "Updated Nutrition Plan"
  }
  ```

- **Delete a nutrition plan by ID**
  ```http
  DELETE /nutrition-plans/{id}
  ```

### Progress Tracking

- **Create a new progress entry**
  ```http
  POST /progress
  Content-Type: application/json

  {
    "userId": "{userId}",
    "weight": 70,
    "bodyFatPercentage": 15
  }
  ```

- **Get all progress entries**
  ```http
  GET /progress
  ```

- **Get a progress entry by ID**
  ```http
  GET /progress/{id}
  ```

- **Update a progress entry by ID**
  ```http
  PUT /progress/{id}
  Content-Type: application/json

  {
    "weight": 68
  }
  ```

- **Delete a progress entry by ID**
  ```http
  DELETE /progress/{id}
  ```

### Social Features

- **Follow a user**
  ```http
  POST /social/follow
  Content-Type: application/json

  {
    "followerId": "{userId}",
    "followingId": "{anotherUserId}"
  }
  ```

- **Get followers of a user**
  ```http
  GET /social/followers?userId={userId}
  ```

- **Get following users**
  ```http
  GET /social/following?userId={userId}
  ```

- **Get activity feed**
  ```http
  GET /social/activity-feed?userId={userId}
  ```

## License

This project is licensed under the MIT License.
