import { Router } from "express";
import {
  getShoppingcartProducts,
  addShoppingcartProduct,
  deleteShoppingcartProduct,
} from "../controllers/ShoppingCart.controller.js";

const router = Router();

router.get("/shoppingcart", getShoppingcartProducts);
router.post("/shoppingcart/add", addShoppingcartProduct);
router.delete("/shoppingcart/delete/:id", deleteShoppingcartProduct);

export default router;
