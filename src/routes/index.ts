import { Express } from "express";

import PessoaFisicaRoute from "./PessoaFisicaRoutes";
import PessoaJuridicaRoutes from "./PessoaJuridicaRoutes";
import ProdutoRoute from "./ProdutoRoutes";

export default class Routes {
  // função responsável por carregar todas as rotas
  public iniciarRotas(app: Express): void {
    const rotasPessoaFisica = new PessoaFisicaRoute().getRouterPadrao(); // retorna o router padrão de PessoaFisica
    const rotasPessoaJuridica = new PessoaJuridicaRoutes().getRouterPadrao(); // retorna o router padrão de PessoaJuridica
    const rotasProduto = new ProdutoRoute().getRouterPadrao(); // retorna o router padrão de Produto

    app.use("/pessoa-fisica", rotasPessoaFisica); // adiciona o router padrão na rota /pessoa-fisica
    app.use("/pessoa-juridica", rotasPessoaJuridica); // adiciona o router padrão na rota /pessoa-juridica
    app.use("/produto", rotasProduto);
  }
}
