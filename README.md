
# Expensive

Expensive is a monorepo project for tracking personal expenses. It consists of two main components:

1. **API** - A backend built with NestJS and TypeORM, using PostgreSQL as the database.
2. **Frontend** - A React application created with Vite, using TypeScript for type safety.

## Project Structure

```
expensive/
├── api/        # Backend (NestJS)
└── app/        # Frontend (React)
```

## Features

- User authentication with JWT
- Expense management (create, read, update, delete)
- Custom hooks for data fetching in the React app
- Global state management using React Context
- PostgreSQL database integration with TypeORM

## Requirements

- Node.js
- pnpm (for package management)
- PostgreSQL

## Setup Instructions

### 1. Clone the repository

```bash
git clone <repository-url>
cd expensive
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up the API

```bash
cd api
pnpm install
```

1. Create a `.env` file in the `api` directory with the following environment variables:

   ```env
   DATABASE_URL=postgresql://<user>:<password>@localhost:5432/expensive
   JWT_SECRET=<your-secret-key>
   ```

2. Run database migrations:

   ```bash
   pnpm run migration:run
   ```

3. Start the API server:

   ```bash
   pnpm run start:dev
   ```

The API will be available at `http://localhost:3000`.

### 4. Set up the Frontend

```bash
cd ../app
pnpm install
```

1. Create a `.env` file in the `app` directory with the following environment variables:

   ```env
   VITE_API_URL=http://localhost:3000
   ```

2. Start the development server:

   ```bash
   pnpm run dev
   ```

The React app will be available at `http://localhost:5173`.

## Usage

1. Open the frontend app in your browser.
2. Register or log in as a user.
3. Add, update, or delete expenses.

## Custom Hooks

The React app uses custom hooks for data fetching, such as `useFetchWithAuth`, which handles API requests and redirects to the login page if the user is unauthorized.

## Authentication

- User authentication is managed using JWT.
- On successful login, a token is stored in `localStorage` and used for subsequent API requests.

## Running Tests

### API Tests

```bash
cd api
pnpm run test
```

### Frontend Tests

```bash
cd app
pnpm run test
```

## Future Improvements

- Add user profile management.
- Implement expense categories and filtering.
- Add unit and integration tests.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.
