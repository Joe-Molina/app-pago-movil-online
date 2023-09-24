import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";
import bodyParser from "body-parser";
import mysql from "mysql2";
import session from "express-session";
import methodOverride from "method-override";
import Register from "./routes/ClientRegister.routes.js";
import Login from "./routes/ClientLogin.routes.js";
import Products from "./routes/Products.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(methodOverride("_method"));

//routes
app.use(Register);
app.use(Login);
app.use(Products);

//route not found
app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

export default app;
