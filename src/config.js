// variables de entorno
import { config } from "dotenv";
config();

export const MONGODB_URI = process.env.MONGODB_URI || "uri" // colocar la URI alterna

export const PORT = process.env.PORT;

// JWT
export const TOKEN_SECRET = 'some secret key'




