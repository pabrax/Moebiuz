// variables de entorno
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
config();

export const MONGODB_URI = process.env.MONGODB_URI || "uri"; // colocar la URI alterna

export const PORT = process.env.PORT;

// JWT
export const TOKEN_SECRET = "some secret key";

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

// Define la ruta relativa al archivo login.html
export const rutaAbsoluta = path.join(
  __dirname,
  "views",
  "Pages",
  "login.html"
);
