import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  try {
    await sequelize.sync({ force: false });

    app.listen(3000);
    console.log("server running on port 3000");
  } catch (err) {
    console.error("Error al definir o crear la tabla:  ", err);
  }
}

main();
