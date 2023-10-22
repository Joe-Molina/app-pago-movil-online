import { Router } from "express";
import {} from "../controllers/saleOrder.controller.js";
import {
  createSaleOrder,
  deleteSaleOrder,
  getSaleOrders,
} from "../controllers/saleOrder.controller.js";

const router = Router();

router.get("/saleOrder", getSaleOrders);
router.post("/saleOrder/add", createSaleOrder);
router.delete("/saleOrder/delete/:id", deleteSaleOrder);

export default router;
