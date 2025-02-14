# Node-Express-Prisma

This repository serves as a **monorepo** for multiple backend projects using **Node.js, Express, and Prisma ORM**. Each project within this repository is structured independently and operates under its own route while sharing a common tech stack.

## 📂 Project Structure

```
node-express-prisma/
│── user-url-backend/    # User CRUD & URL Shortener (has its own README)
│── future-project-1/    # Placeholder for future backend projects
│── future-project-2/    # Another upcoming backend service
│── package.json         # Root package file (optional monorepo setup)
│── README.md            # This documentation
```

## 🚀 Tech Stack

- **Node.js** - Backend runtime
- **Express.js** - Web framework
- **Prisma ORM** - Database management
- **MongoDB / PostgreSQL** - Database choices (depending on the project)
- **TypeScript (optional)** - For type safety
- **Nodemon** - Development auto-reload

## 🔧 Setting Up a Project

Each sub-project inside this monorepo is **standalone**, meaning they have their own dependencies. To set up a specific project, navigate to its folder and follow its README instructions.

```sh
cd user-url-backend
npm install
npm run dev
```

For future projects, simply create a new directory inside `node-express-prisma/`, initialize a new Node.js project, and start developing.

## 🛠 Managing Dependencies

Each project maintains its own `package.json`. However, you can install dependencies at the root level if you plan to use **a monorepo tool** (e.g., `pnpm workspaces`, `lerna`, or `turborepo`).

Example of a monorepo setup with `pnpm`:

```sh
pnpm install
pnpm run dev --filter user-url-backend
```

## 🚀 Future Projects

This repository is designed to scale as more backend projects are added. If you plan to contribute or add another service, follow this structure:

1. Create a new directory: `mkdir future-project`
2. Initialize a new Node.js project: `npm init -y`
3. Set up **Express & Prisma** in that folder.
4. Create a separate `README.md` inside that project directory.

## 📜 License

This repository is **MIT licensed**. You are free to modify and use it as needed.

## 🔗 Author

- **Your Name**
- GitHub: [Hello-Ship-code](https://github.com/Hello-Ship-Code)
<!-- - LinkedIn: [your-linkedin](https://linkedin.com/in/your-profile) -->
