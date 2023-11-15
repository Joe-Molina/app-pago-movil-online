import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { BillDetails } from "./BillDetails.js";
import { SaleOrderDetails } from "./SaleOrderDetails.js";
import { ShoppingCartDetails } from "./ShoppingCartDetails.js";

export const Products = sequelize.define("Products", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING,
  },
  photo: {
    type: DataTypes.STRING,
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

crearRelacion(Products, BillDetails, "Product_id");
crearRelacion(Products, ShoppingCartDetails, "Product_id");
crearRelacion(Products, SaleOrderDetails, "Product_id");
