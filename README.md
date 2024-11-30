# Tsoa-api-template

A robust TypeScript-based API template with built-in error handling, logging, and OpenAPI documentation using TSOA.

## Features

- 🚀 TypeScript for type safety and better developer experience
- 📚 OpenAPI/Swagger documentation using TSOA
- 🔒 Built-in security with Helmet
- 📝 Winston logging
- ⚡️ Express.js for fast, unopinionated routing
- 🛡️ Rate limiting
- ✨ ESLint + Prettier for code consistency
- 🔄 Hot reloading with Nodemon

## Prerequisites

- Node.js >= 18
- npm or yarn (yarn is preferred)

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:thecodearcher/tsoa-api-template.git
   cd tsoa-api-template
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Create a `.env` file:
   ```bash
   cp .env.example .env
   ```

4. Start development server:
   ```bash
   yarn dev
   ```

## API Documentation

Once the server is running, access the Swagger documentation at:
- http://localhost:3000/docs

## TODO 
#### Read as "Things I'll do when I am not lazy 🥲"

- Add Prisma ORM for database access
- Add Docker support??
