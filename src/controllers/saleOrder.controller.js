import bodyParser from "body-parser";
import session from "express-session";
import { ShoppingCartDetails } from "../models/ShoppingCartDetails.js";
import { SaleOrders } from "../models/SaleOrders.js";
import { SaleOrderDetails } from "../models/SaleOrderDetails.js";
import { PM } from "../models/pm.js";
import { Clients } from "../models/clients.js";

export const getSaleOrders = async (req, res) => {
  // muestra las ordenes de venta pendientes por aceptar

  if (req.session.loggedin == true) {
    const saleOrdersArray = await SaleOrders.findAll({
      include: [
        {
          model: PM,
        },
        {
          model: Clients,
        },
      ],
    });

    res.render("ordenesCompra", {
      usertype: req.session.UserType,
      saleOrdersArray,
    });

    //res.json(saleOrdersArray);
  } else {
    res.redirect("/login");
  }
};

export const createSaleOrder = async (req, res) => {
  const { banco, telefono, cedula, referencia } = req.body;
  // crea una orden de venta que tiene los datos del pm que se hizo y los productos que se desea comprar.

  //guarda los datos del pago movil que se hizo para realizar la compra
  const newPM = await PM.create({
    banco,
    telefono,
    cedula,
    referencia,
  });

  //crea una orden de compra con los datos del pm y el cliente
  const newOrder = await SaleOrders.create({
    Client_id: req.session.userId,
    Pm_id: newPM.id,
  });

  //crea un array con los productos que el cliente tiene en el carrito
  const productosCarrito = await ShoppingCartDetails.findAll({
    where: {
      ShoppingCart_id: req.session.cartId,
    },
  });

  // recorre todos los productos del carrito y los agrega a la orden de compra
  const productosCarritoEspecific = await productosCarrito.map(
    async ({ Product_id, Cantidad }) => {
      await SaleOrderDetails.create({
        SaleOrder_id: newOrder.id,
        Product_id,
        Cantidad,
      });
    }
  );

  // elimina todos los productos del carrito
  await ShoppingCartDetails.destroy({
    where: { ShoppingCart_id: req.session.cartId },
  });

  console.log(productosCarritoEspecific);
  res.redirect("/shoppingcart");
  // console.log(productosCarrito);
  // res.json(ProductsOrderDetails);
};

export const deleteSaleOrder = async (req, res) => {
  const { id } = req.params;
  //se elimina la orden de venta despues de aceptarla

  await SaleOrders.destroy({
    where: { id },
  });

  res.redirect("/saleOrder");
};

// estoy creando la funcion que agrega todos los datos de la orden de venta de despues del carrito
