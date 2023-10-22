import { Router } from "express";
import { createBill, getBills } from "../controllers/bills.controller.js";

const router = Router();

router.get("/bills", getBills);
router.post("/bills/add", createBill);
router.delete("/bills/delete/:id");

export default router;
