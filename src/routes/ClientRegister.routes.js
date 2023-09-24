import { Router } from "express";
import {
  getRegister,
  PostRegister,
} from "../controllers/ClientRegister.controller.js";

const router = Router();

router.get("/register", getRegister);
router.post("/register", PostRegister);

export default router;
