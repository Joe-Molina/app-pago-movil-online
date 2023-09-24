import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const SaleOrderDetails = sequelize.define("SaleOrderDetails", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Cantidad: {
    type: DataTypes.INTEGER,
  },
});
