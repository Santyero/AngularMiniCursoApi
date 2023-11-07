import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

import GenericRoute from "./GenericRoutes";
import PessoaFisica from "../models/PessoaFisica";
import PessoaFisicaController from "../controllers/PessoaFisicaController";

export default class PessoaFisicaRoute extends GenericRoute<PessoaFisica> {
    private pessoaFisicaController = new PessoaFisicaController(); // Importa o controler do cliente

    // Método para criar um pessoa juridica
    protected async criar(
        req: Request<ParamsDictionary, any, PessoaFisica, ParsedQs, Record<string, any>>,
        res: Response<{ id: number }, Record<string, any>>
    ): Promise<void> {
        const pessoaFisica = req.body; // Pega o cliente do corpo da requisição
        const idCriado = await this.pessoaFisicaController.criar(pessoaFisica); // Chama o método criar do controller
        res.status(201).send({ id: idCriado }); // Retorna o id do cliente criado
    }

    // Método para buscar as pessoas fisicas
    protected async listarTodos(
        req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
        res: Response<PessoaFisica[], Record<string, any>>
    ): Promise<void> {
        const pessoasFisicas = await this.pessoaFisicaController.listarTodos(); // Chama o método listarTodos do controller
        res.status(200).send(pessoasFisicas); // Retorna a lista de clientes
    }
    // Método para deletar uma pessoa fisica pelo id
    protected async deletar(
        req: Request<{ id: string }, any, any, ParsedQs, Record<string, any>>,
        res: Response<any, Record<string, any>>
    ): Promise<void> {
        const id = Number(req.params.id); // Pega o id do cliente a ser deletado
        await this.pessoaFisicaController.deletar(id); // Chama o método deletar do controller
        res.status(200).send()
    }

    // Método para atualizar uma pessoa fisica pelo id
    protected async atualizar(
        req: Request<{ id: string }, any, PessoaFisica, ParsedQs, Record<string, any>>,
        res: Response<any, Record<string, any>>
    ): Promise<void> {
        const pessoaFisica = req.body; // Pega a pessoa fisica do corpo da requisição
        const id = Number(req.params.id); // Pega o id da pessoa fisica a ser atualizado
        await this.pessoaFisicaController.atualizar(id, pessoaFisica); // Chama o método atualizar do controller
        res.status(200).send()
    }
}
