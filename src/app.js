// se importan las librerias y archivos necesarios
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

//rutas
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import pagesRoutes from "./routes/pages.routes.js";
import path from "path";
import { __dirname } from "./config.js";

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "views")));
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api", authRoutes);
app.use("/api", taskRoutes);
app.use("/api", pagesRoutes);

// exporta el modulo de express para usarlo en index.js
export default app;
