import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const BillDetails = sequelize.define("BillDetails", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  total: {
    type: DataTypes.INTEGER,
  },
});
