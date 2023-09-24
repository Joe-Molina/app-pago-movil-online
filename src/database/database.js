import Sequelize from "sequelize";

export const sequelize = new Sequelize("tiendaOnline", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
