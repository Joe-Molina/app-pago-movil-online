import session from "express-session";
import bodyParser from "body-parser";
import { Clients } from "../models/clients.js";

export const getLogin = async (req, res) => {};

export const postLogin = async (req, res) => {
  const { Email, Password } = req.body;

  const client = await Clients.findOne({
    where: { Email },
  });

  if (!client) {
    return res.json({ user: "no existe" });
  } else {
    console.log(client.dataValues.Password);
    if (req.body.Password !== client.dataValues.Password) {
      return res.json({ Password: "is incorrect" });
    } else {
      req.session.loggedin = true;
      req.session.user = client.dataValues.id;
      req.session.name = client.dataValues.name;
      req.session.email = client.dataValues.Email;
      console.log(req.session);

      res.json({ Password: "is correct" });
    }
  }
};

export const getLogOut = async (req, res) => {
  if (req.session.loggedin == true) {
    req.session.destroy();
  }
  res.redirect("/login");
};
