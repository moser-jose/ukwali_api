# Barber Shop API

RESTful API for managing barbershops, appointments, and services.

## 🚀 Technologies

- Node.js
- TypeScript
- Express
- Prisma (ORM)
- PostgreSQL
- JWT for authentication
- Vitest for testing
- Docker & Docker Compose

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Docker and Docker Compose
- PostgreSQL (if not using Docker)

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/ukwali_api.git
cd ukwali_api
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

1. Fill the `.env` file with your settings:

```env
# App
PORT=3333
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key

# Database
DATABASE_URL="postgresql://ukwali:ukwali@localhost:5432/ukwali?schema=public"
```

5. Start Docker containers:

```bash
docker-compose up -d
```

6. Run migrations:

```bash
npx prisma migrate dev
# or
yarn prisma migrate dev
```

7. Start the server:

```bash
npm run dev
# or
yarn dev
```

## 🗄️ Project Structure

```
src/
├── @types/         # TypeScript type definitions
├── config/         # Project configurations
├── http/           # API controllers
├── lib/            # Library
├── errors/         # Custom error classes
├── middlewares/    # Fastify middlewares
├── repositories/   # Data access layer
├── routes/         # API routes
├── services/       # Business logic
└── utils/          # Utility functions
```

## 🧪 Testing

Run unit tests:

```bash
npm run test
# or
yarn test
```

## 📦 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build the project
- `npm start`: Start production server
- `npm run test`: Run tests
- `npm run test:watch`: Run tests in watch mode
- `npm run test:coverage`: Run tests and generate coverage reports
- `npm run test:ui`: Run tests and open test UI
- `npm run lint`: Run linter


## 📄 License

This project is under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b branch`)
3. Commit your changes (`git commit -m 'Add some branch'`)
4. Push to the branch (`git push origin branch`)
5. Open a Pull Request

## Author

| [<img src="https://avatars0.githubusercontent.com/u/8234620?" width="115"><br><sub>@moser-jose</sub>](https://github.com/moser-jose) |
| :---: |
