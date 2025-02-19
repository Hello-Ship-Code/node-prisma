// Express Server Setup
import express from "express";
import path from "path";

import { env } from "./env.config";
import { errorHandler } from "./handlers/error-handlers";

import { userRouter } from "./routes/user-router";

const app = express();
const viewsPath = path.join(__dirname, "..", "src", "views");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Server-Side Rendering Setup
app.set("view engine", "ejs");
app.set("views", viewsPath);

// Routes
app.use("/api/user", userRouter);

// Error Handler
app.use(errorHandler);

// Start Server
app.listen(env.PORT, () => console.log(`Server running on port ${env.PORT}`));
