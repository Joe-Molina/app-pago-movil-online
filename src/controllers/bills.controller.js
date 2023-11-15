import bodyParser from "body-parser";
import session from "express-session";
import { Bills } from "../models/Bills.js";
import { BillDetails } from "../models/BillDetails.js";
import { SaleOrderDetails } from "../models/SaleOrderDetails.js";
import { SaleOrders } from "../models/SaleOrders.js";

export const getBills = async (req, res) => {
  if (req.session.loggedin == true) {
    const bills = await Bills.findAll();
    res.json(bills);
  } else {
    res.redirect("/login");
  }
};

export const createBill = async (req, res) => {
  const { Client_id, SaleOrder_id } = req.body;
  //crea una factura con el id del cliente

  const newBill = await Bills.create({
    Client_id,
  });

  const productosOrden = await SaleOrderDetails.findAll({
    where: {
      SaleOrder_id,
    },
  });

  // recorre todos los productos del carrito y los agrega a la orden de compra
  const productosOrdenEspecific = productosOrden.map(
    async ({ Product_id, Cantidad }) => {
      await BillDetails.create({
        Bill_id: newBill.id,
        Product_id,
        total: Cantidad,
      });
    }
  );

  res.json(productosOrdenEspecific);
};
