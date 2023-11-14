import { Router } from "express";
import {
  homePage,
  landingPage,
  loginPage,
  registerPage,
} from "../controllers/pages.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/home", authRequired, homePage);
router.get("/", landingPage);
router.get("/login", loginPage);
router.get("/register", registerPage);

export default router;
