import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Products } from "../models/Products.js";

export const Sections = sequelize.define("Sections", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

Sections.hasMany(Products, {
  foreignKey: "Section_id",
  sourceKey: "id",
});

Products.belongsTo(Sections, {
  foreignKey: "Section_id",
  targetKey: "id",
});
