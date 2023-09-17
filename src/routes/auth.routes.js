import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
  loginPage,
  registerPage,
} from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";
import { authRequired } from "../middlewares/validateToken.js";
const router = Router();

// enruta la paginas de login y registro

router.get("/login", loginPage);
router.get("/register", registerPage);

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/profile", authRequired, profile);

export default router;
