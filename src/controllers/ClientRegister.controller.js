import session from "express-session";
import bodyParser from "body-parser";
import { Clients } from "../models/clients.js";
import { ShoppingCarts } from "../models/ShoppingCarts.js";

export const getRegister = async (req, res) => {
  if (req.session.loggedin != true) {
    res.render("register", { error: false });
  } else {
    res.redirect("/Products");
  }
};

export const PostRegister = async (req, res) => {
  // buscar en una tabla el email del cliente para ver si esta registrado
  const { name, Email, lastName, Direction, Password } = req.body;

  const clients = await Clients.findOne({
    where: { Email },
  });

  if (clients) {
    return res.render("register", { error: "usuario ya registrado" });
  } else {
    const newClient = await Clients.create({
      name,
      Email,
      lastName,
      Direction,
      Password,
    });

    console.log(newClient);

    const newShoppingCart = await ShoppingCarts.create({
      Client_id: newClient.dataValues.id,
      name: newClient.dataValues.name,
    });
    res.render("login", { error: false });
  }
};
