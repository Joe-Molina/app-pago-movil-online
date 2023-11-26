import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { SaleOrders } from "../models/SaleOrders.js";

export const PM = sequelize.define("PM", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  banco: {
    type: DataTypes.STRING,
  },
  telefono: {
    type: DataTypes.INTEGER,
  },
  cedula: {
    type: DataTypes.INTEGER,
  },
  referencia: {
    type: DataTypes.INTEGER,
  },
  Monto: {
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

crearRelacion(PM, SaleOrders, "Pm_id");
