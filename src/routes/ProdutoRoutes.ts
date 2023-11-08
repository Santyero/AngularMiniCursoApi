import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

import GenericRoute from "./GenericRoutes";
import Produto from "../models/Produto";
import ProdutoController from "../controllers/ProdutoController";

export default class ProdutoRoute extends GenericRoute<Produto> {
    private produtoController = new ProdutoController(); // Importa o controler do cliente

    // Método para criar um pessoa juridica
    protected async criar(
        req: Request<ParamsDictionary, any, Produto, ParsedQs, Record<string, any>>,
        res: Response<{ id: number }, Record<string, any>>
    ): Promise<void> {
        const produto = req.body; // Pega o cliente do corpo da requisição
        const idCriado = await this.produtoController.criar(produto); // Chama o método criar do controller
        res.status(201).send({ id: idCriado }); // Retorna o id do cliente criado
    }

    // Método para buscar as pessoas fisicas
    protected async listarTodos(
        req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
        res: Response<Produto[], Record<string, any>>
    ): Promise<void> {
        const pessoasFisicas = await this.produtoController.listarTodos(); // Chama o método listarTodos do controller
        res.status(200).send(pessoasFisicas); // Retorna a lista de clientes
    }
    // Método para deletar uma pessoa fisica pelo id
    protected async deletar(
        req: Request<{ id: string }, any, any, ParsedQs, Record<string, any>>,
        res: Response<any, Record<string, any>>
    ): Promise<void> {
        const id = Number(req.params.id); // Pega o id do cliente a ser deletado
        await this.produtoController.deletar(id); // Chama o método deletar do controller
        res.status(200).send()
    }

    // Método para atualizar uma pessoa fisica pelo id
    protected async atualizar(
        req: Request<{ id: string }, any, Produto, ParsedQs, Record<string, any>>,
        res: Response<any, Record<string, any>>
    ): Promise<void> {
        const produto = req.body; // Pega a pessoa fisica do corpo da requisição
        const id = Number(req.params.id); // Pega o id da pessoa fisica a ser atualizado
        await this.produtoController.atualizar(id, produto); // Chama o método atualizar do controller
        res.status(200).send()
    }
}
