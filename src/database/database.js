import Sequelize from "sequelize";

export const sequelize = new Sequelize("tiendaonline", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
