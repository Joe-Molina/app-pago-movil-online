import bodyParser from "body-parser";
import session from "express-session";
import { ShoppingCartDetails } from "../models/ShoppingCartDetails.js";

export const getShoppingcartProducts = async (req, res) => {
  // buscar productos en el carrito
  const productos = await ShoppingCartDetails.findAll({
    where: {
      ShoppingCart_id: req.session.cartId,
    },
  });

  res.json(productos);
};

export const addShoppingcartProduct = async (req, res) => {
  try {
    //guarda los datos del req.body
    const { Product_id, Cantidad } = req.body;

    // crear registro en detalles del carrito
    const newCartDetail = await ShoppingCartDetails.create({
      Product_id,
      Cantidad,
      ShoppingCart_id: req.session.cartId,
    });

    res.json(newCartDetail);
  } catch (err) {
    res.json("carrito no encontrado");
  }
};

export const deleteShoppingcartProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await ShoppingCartDetails.destroy({
      where: { id },
    });

    res.json("producto eliminado del carrito");
  } catch (error) {
    res.json("no eliminado");
  }
};
