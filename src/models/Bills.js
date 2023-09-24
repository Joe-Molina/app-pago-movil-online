import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { BillDetails } from "./BillDetails.js";

export const Bills = sequelize.define("Bills", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  DateTime: {
    type: DataTypes.DATE,
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

crearRelacion(Bills, BillDetails, "Bill_id");
