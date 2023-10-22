import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const ShoppingCartDetails = sequelize.define("ShoppingCartDetails", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ShoppingCart_id: {
    type: DataTypes.INTEGER,
  },
  Cantidad: {
    type: DataTypes.INTEGER,
  },
});
