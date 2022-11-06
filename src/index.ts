import "./models";

import express from "express";
import connection from "./connection";
import Routes from "./routes";

const app = express();

const porta = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());

app.listen(porta, () => {
  connection.authenticate();
  connection.sync();

  const routes = new Routes();

  routes.iniciarRotas(app);

  console.log(`Example app listening on port ${porta}`);
});
