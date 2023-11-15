import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Bills } from "./Bills.js";
import { SaleOrders } from "../models/SaleOrders.js";
import { ShoppingCarts } from "../models/ShoppingCarts.js";

export const Clients = sequelize.define("clients", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  Direction: {
    type: DataTypes.STRING,
  },
  Email: {
    type: DataTypes.STRING,
  },
  Password: {
    type: DataTypes.STRING,
  },
  UserType: {
    type: DataTypes.INTEGER,
  },
});

const crearRelacion = (PK, FK, FK_name) => {
  PK.hasMany(FK, {
    foreignKey: FK_name,
    sourceKey: "id",
  });

  FK.belongsTo(PK, {
    foreignKey: `${FK_name}`,
    targetKey: "id",
  });
};

crearRelacion(Clients, Bills, "Client_id");
crearRelacion(Clients, SaleOrders, "Client_id");
crearRelacion(Clients, ShoppingCarts, "Client_id");
