import app from "./app.js";
import { sequelize } from "./database/database.js";


import "./models/pm.js";
import "./models/BillDetails.js";
import "./models/Bills.js";
import "./models/Products.js";
import "./models/SaleOrderDetails.js";
import "./models/SaleOrders.js";
import "./models/ShoppingCartDetails.js";
import "./models/ShoppingCarts.js";
import "./models/clients.js";
import "./models/sections.js";

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(3000);
    console.log("server running on port 3000");
  } catch (err) {
    console.error("Error al definir o crear la tabla:  ", err);
  }
}

main();
