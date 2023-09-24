import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const ShoppingCartDetails = sequelize.define("ShoppingCartDetails", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Cantidad: {
    type: DataTypes.INTEGER,
  },
});
