import { Router } from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getSection,
  createSection,
  deleteSection,
} from "../controllers/Products.controller.js";

const router = Router();

router.get("/Products", getProducts);
router.post("/Products", createProduct);
router.put("/Products/:id", updateProduct);
router.delete("/Products/:id", deleteProduct);
router.get("/Products/:id", getProduct);

router.get("/section", getSection);
router.post("/section", createSection);
router.delete("/section/:id", deleteSection);

export default router;
