import session from "express-session";
import bodyParser from "body-parser";
import multer from "multer";
import { Products } from "../models/Products.js";
import { Sections } from "../models/sections.js";

export const getProducts = async (req, res) => {
  try {
    if (req.session.loggedin == true) {
      const products = await Products.findAll();
      const sections = await Sections.findAll();
      console.log(req.session.UserType);
      res.render("inicio", {
        sections,
        products,
        usertype: req.session.UserType,
      });
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    res.status(500);
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, description, Section_id } = req.body;
    console.log(req.file);
    const newProduct = await Products.create({
      name,
      price,
      description,
      photo: req.file.filename,
      Section_id,
    });

    console.log(newProduct);

    const products = await Products.findAll();
    const sections = await Sections.findAll();

    res.redirect("/products");
  } catch (error) {
    res.status(500);
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await Products.destroy({
      where: { id },
    });
    res.status(204).json("Producto eliminado con exito");
  } catch (error) {
    res.status(500);
  }
};
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Products.findByPk(id);

    product.set(req.body);
    product.save();

    res.send("updating");
  } catch (error) {
    res.status(500);
  }
};
export const getProduct = async (req, res) => {
  const { id } = req.params;

  const product = await Products.findByPk(id);
};

export const getSection = async (req, res) => {
  try {
    const sections = await Sections.findAll();

    res.json(sections);
  } catch (error) {
    res.status(500);
  }
};
export const createSection = async (req, res) => {
  try {
    const { name } = req.body;

    const newSection = Sections.create({
      name,
    });

    res.redirect("/products");
  } catch (error) {
    res.status(500);
  }
};
export const deleteSection = async (req, res) => {
  try {
    const { id } = req.params;

    await Sections.destroy({
      where: { id },
    });
    res.status(204).json("seccion eliminada con exito");
  } catch (error) {
    res.statsu(500);
  }
};
