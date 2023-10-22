import { Router } from "express";
import { getNames } from "../controllers/json.controller.js";

const router = Router();

router.get("/names", getNames);

export default router;
