import express from 'express';
import path from 'path';

import { env } from './env.config';

import { appRouter } from './routes/route-urls';

const app = express();

const viewsPath = path.join(__dirname, "..", "src", "views"); // ✅ Correct path

// Middle wares to handle form
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Server Side rendering
app.set("view engine", "ejs");
app.set("views", viewsPath);

// Router
app.use('/api', appRouter);

app.listen(env.PORT, () => console.log(`Server running on port ${env.PORT}`));
