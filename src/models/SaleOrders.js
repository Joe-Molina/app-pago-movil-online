import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { SaleOrderDetails } from "./SaleOrderDetails.js";

export const SaleOrders = sequelize.define("SaleOrders", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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

crearRelacion(SaleOrders, SaleOrderDetails, "SaleOrder_id");
