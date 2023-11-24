import { Router } from "express";
import {
  getShoppingcartProducts,
  addShoppingcartProduct,
  deleteShoppingcartProduct,
  deleteAllShoppingcartProducts,
} from "../controllers/ShoppingCart.controller.js";

const router = Router();

router.get("/shoppingcart", getShoppingcartProducts);
router.post("/shoppingcart/add/:id", addShoppingcartProduct);
router.delete("/shoppingcart/delete/:id", deleteShoppingcartProduct);
router.delete("/shoppingcart/delete", deleteAllShoppingcartProducts);

export default router;
