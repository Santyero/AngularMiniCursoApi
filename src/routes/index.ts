import { Express } from "express";

import ClienteRoutes from "./ClienteRoutes";

export default class Routes {
  // função responsável por carregar todas as rotas
  public iniciarRotas(app: Express): void {
    const rotasCliente = new ClienteRoutes().getRouterPadrao(); // retorna o router padrão de Cliente

    app.use("/cliente", rotasCliente); // adiciona o router padrão na rota /cliente
  }
}
