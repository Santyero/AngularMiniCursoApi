import "./models";

import express from "express";
import connection from "./connection";
import Routes from "./routes";
import cors from 'cors';

const app = express(); // Cria uma instância do express

const porta = 3000; // Referencia a porta que o servidor irá rodar

app.get("/", (req, res) => {
  // Rota raiz
  res.send("Hello World!"); // Retorno da informação para o cliente
});
app.use(cors());
app.use(express.json()); // Configura o express para receber JSON

app.listen(porta, () => {
  // Inicia o servidor na porta definida
  connection.authenticate(); // Conecta ao banco de dados
  connection.sync({ alter: true }); // Sincroniza o banco de dados

  const routes = new Routes(); // Cria uma instância das rotas

  routes.iniciarRotas(app); // Inicia as rotas

  console.log(`Example app listening on port ${porta}`);
});
