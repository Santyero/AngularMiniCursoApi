import { Express } from "express";

import PessoaFisicaRoute from "./PessoaFisicaRoutes";
import PessoaJuridicaRoutes from "./PessoaJuridicaRoutes";

export default class Routes {
  // função responsável por carregar todas as rotas
  public iniciarRotas(app: Express): void {
    const rotasPessoaFisica = new PessoaFisicaRoute().getRouterPadrao(); // retorna o router padrão de PessoaFisica
    const rotasPessoaJuridica = new PessoaJuridicaRoutes().getRouterPadrao(); // retorna o router padrão de PessoaJuridica

    app.use("/pessoa-fisica", rotasPessoaFisica); // adiciona o router padrão na rota /pessoa-fisica
    app.use("/pessoa-juridica", rotasPessoaJuridica); // adiciona o router padrão na rota /pessoa-juridica
  }
}
