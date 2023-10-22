import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { ShoppingCartDetails } from "./ShoppingCartDetails.js";

export const ShoppingCarts = sequelize.define("ShoppingCarts", {
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

crearRelacion(ShoppingCarts, ShoppingCartDetails, "ShoppingCart_id");
