# Node-Prisma Multi-Project Backend

This repository serves as a **backend hub** for multiple **Node.js + Express + Prisma** projects. Each project is structured into its own route (e.g., `/user` for user management and `/url` for URL shortener). More projects can be added in the future.

## 🚀 Projects Overview

### 1️⃣ User Information CRUD API (`/user`)

- Manage user details such as:
  - `firstName`
  - `lastName`
  - `email`
  - `gender`
  - `jobTitle`
- Supports **CRUD** operations.

### 2️⃣ URL Redirection API (`/url`)

- Create short URLs from long URLs.
- Retrieve original URLs using a short code.
- Track visits (optional).

Future projects will follow the same **modular route-based structure** within this repository.

---

## 🛠️ Tech Stack

- **Node.js** - Backend runtime
- **Express.js** - Web framework
- **Prisma ORM** - Database management
- **MongoDB** - Database
- **TypeScript** - Type safety (optional)
- **EJS** - View engine for rendering pages (optional)

---

## 📂 Project Structure

```
node-prisma/
│── user-url-backend/   # Main folder for user & URL projects
│   ├── src/
│   │   ├── controllers/     # Business logic (user & URL controllers)
│   │   ├── models/          # Prisma models
│   │   ├── routes/          # API routes
│   │   ├── views/           # EJS templates (if used)
│   │   ├── config/          # Configuration files (env, db connection)
│   │   ├── index.ts         # Main entry point
│   ├── prisma/
│   │   ├── schema.prisma    # Database schema
│   ├── .env                 # Environment variables
│   ├── package.json         # Dependencies & scripts
│   ├── README.md            # Documentation
│── future-project/          # Placeholder for future projects
```

---

## 🚀 Setup & Installation

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/node-prisma.git
cd node-prisma/user-url-backend
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file in the `user-url-backend` directory:

```env
PORT=3000
DATABASE_URL=mongodb://127.0.0.1:27017/your-db-name
```

### 4️⃣ Generate Prisma Client

```sh
npx prisma generate
```

### 5️⃣ Start the Server

#### Development Mode (with Nodemon)

```sh
npm run dev
```

#### Production Mode

```sh
npm start
```

---

## 🛠️ API Endpoints

### 🏷️ User API (`/user`)

#### ➕ Create User

```http
POST /api/user
```

**Body:**

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "gender": "Male",
  "jobTitle": "Software Engineer"
}
```

#### 📌 Get All Users

```http
GET /api/user
```

#### 🔍 Get User by ID

```http
GET /api/user/:id
```

#### ✏️ Update User

```http
PUT /api/user/:id
```

#### ❌ Delete User

```http
DELETE /api/user/:id
```

### 🔗 URL Redirection API (`/url`)

#### 🎯 Create Short URL

```http
POST /api/url
```

**Body:**

```json
{
  "longUrl": "https://example.com"
}
```

#### 🔗 Retrieve Original URL

```http
GET /api/url/:shortCode
```

---

## 🛠️ Useful Commands

### Run Prisma Migrations (If Using SQL Database)

```sh
npx prisma migrate dev --name init
```

### Push Database Schema to MongoDB

```sh
npx prisma db push
```

### View Prisma Studio (Database UI)

```sh
npx prisma studio
```

---

## 📜 License

This project is **MIT licensed**. Feel free to use and modify it!

---

## 🚀 Contributing

Want to improve this project? Open an issue or submit a PR on **GitHub**! 🔥

---

## 🔗 Author

- **Your Name**
- GitHub: [your-username](https://github.com/your-username)
- LinkedIn: [your-linkedin](https://linkedin.com/in/your-profile)
