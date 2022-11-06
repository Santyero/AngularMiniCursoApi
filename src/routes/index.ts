import { Express } from "express";

import ClienteRoutes from "./ClienteRoutes";

export default class Routes {
  public iniciarRotas(router: Express): void {
    const rotasCliente = new ClienteRoutes().iniciarRotas();

    router.use("/cliente", rotasCliente);
  }
}
