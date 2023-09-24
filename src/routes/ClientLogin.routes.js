import { Router } from "express";
import { getLogin, postLogin } from "../controllers/ClientLogin.controller.js";

const router = Router();

router.get("/Login", getLogin);
router.post("/Login", postLogin);

export default router;
