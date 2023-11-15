import { Router } from "express";
import {
  getLogOut,
  getLogin,
  postLogin,
} from "../controllers/ClientLogin.controller.js";

const router = Router();

router.get("/Login", getLogin);
router.get("/Logout", getLogOut);
router.post("/Login", postLogin);

export default router;
