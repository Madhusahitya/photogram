
# Instagram Clone API

This is the backend API for the Instagram Clone application.

## Setup

1. Create a `.env` file in the root directory based on `.env.example`
2. Install dependencies:

```bash
npm install
```

3. Make sure MongoDB is running on your system or use MongoDB Atlas

4. Start the server:

```bash
npm run dev
```

The server will start on port 5000 by default.

## API Endpoints

### Posts

- GET `/api/posts` - Get all posts
- GET `/api/posts/user/:userId` - Get posts by user
- POST `/api/posts` - Create a new post
- PATCH `/api/posts/:id/like` - Like/unlike a post

### Users

- GET `/api/users` - Get all users
- GET `/api/users/me` - Get current user
- GET `/api/users/:id` - Get user by ID

## Seed Data

You may want to seed the database with some initial data. In a real application, you would have proper authentication and user registration.
