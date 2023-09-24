import session from "express-session";
import bodyParser from "body-parser";
import { Products } from "../models/Products.js";
import { Sections } from "../models/sections.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Products.findAll();

    console.log(products);

    res.json(products);
  } catch (error) {
    res.status(500);
  }
};
export const createProduct = async (req, res) => {
  try {
    const { name, price, description, Section_id } = req.body;

    const newProduct = await Products.create({
      name,
      price,
      description,
      Section_id,
    });

    console.log(newProduct);

    res.json(newProduct);
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

    res.status(200).json("seccion creada");
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
