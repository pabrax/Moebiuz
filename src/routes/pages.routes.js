import { Router } from "express";
import { homePage, landingPage } from "../controllers/pages.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

// enruta paginas como home y landing

router.get("/home", authRequired, homePage);
router.get("/", landingPage);

export default router;
