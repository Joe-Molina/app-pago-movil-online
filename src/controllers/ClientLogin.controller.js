import session from "express-session";
import bodyParser from "body-parser";
import { Clients } from "../models/clients.js";
import { ShoppingCarts } from "../models/ShoppingCarts.js";

export const getLogin = async (req, res) => {
  if (req.session.loggedin != true) {
    res.render("login", { error: false });
  } else {
    res.redirect("/");
  }
};

export const postLogin = async (req, res) => {
  const { Email, Password } = req.body;

  const client = await Clients.findOne({
    where: { Email },
  });

  if (!client) {
    res.render("login", { error: "el usuario no existe" });
  } else {
    console.log(client.dataValues.Password);
    if (Password !== client.dataValues.Password) {
      return res.render("login", { error: "contraseña incorrecta" });
    } else {
      req.session.loggedin = true;
      req.session.userId = client.dataValues.id;
      req.session.name = client.dataValues.name;
      req.session.email = client.dataValues.Email;
      req.session.UserType = client.dataValues.UserType;

      const shoppingcart = await ShoppingCarts.findOne({
        where: { Client_id: req.session.userId },
      });

      if (req.session.UserType === 1) {
        req.session.cartId = shoppingcart.id;
      }

      console.log(req.session);

      res.redirect("/products");
    }
  }
};

export const getLogOut = async (req, res) => {
  if (req.session.loggedin == true) {
    req.session.destroy();
  }
  res.redirect("/login");
};
