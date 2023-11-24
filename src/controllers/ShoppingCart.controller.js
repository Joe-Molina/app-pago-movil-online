import bodyParser from "body-parser";
import session from "express-session";
import { ShoppingCartDetails } from "../models/ShoppingCartDetails.js";
import { Products } from "../models/Products.js";
import { Sections } from "../models/sections.js";

export const getShoppingcartProducts = async (req, res) => {
  if (req.session.loggedin == true) {
    // buscar productos en el carrito
    const productos = await ShoppingCartDetails.findAll({
      where: {
        ShoppingCart_id: req.session.cartId,
      },
      include: [
        {
          model: Products,
          atributes: ["name", "price"],
        },
      ],
    });

    console.log(productos);

    res.render("carrito", { productos, usertype: req.session.UserType });
  } else {
    res.redirect("/login");
  }
};

export const addShoppingcartProduct = async (req, res) => {
  try {
    //guarda los datos del req.body
    const Product_id = req.params.id;
    const { Cantidad } = req.body;

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

export const deleteAllShoppingcartProducts = async (req, res) => {
  try {
    await ShoppingCartDetails.destroy({
      where: { ShoppingCart_id: req.session.cartId },
    });

    res.redirect("/products");
  } catch (error) {
    res.json("no eliminado");
  }
};
