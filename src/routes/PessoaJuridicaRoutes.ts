import { ParamsDictionary, Request, Response } from "express-serve-static-core";
import PessoaJuridica from "../models/PessoaJuridica";
import GenericRoute from "./GenericRoutes";
import PessoaJuridicaController from "../controllers/PessoaJuridicaController";
import { ParsedQs } from "qs";

export default class PessoaJuridicaRoutes extends GenericRoute<PessoaJuridica> {
    private pessoaJuridicaController = new PessoaJuridicaController(); // Importa o controler do cliente

    // Método para criar um pessoa juridica
    protected async criar(
        req: Request<ParamsDictionary, any, PessoaJuridica, ParsedQs, Record<string, any>>, 
        res: Response<{ id: number }, Record<string, any>>
    ): Promise<void> {
        const pessoaJuridica = req.body; // Pega o cliente do corpo da requisição
        const idCriado = await this.pessoaJuridicaController.criar(pessoaJuridica); // Chama o método criar do controller
        res.status(201).send({ id: idCriado }); // Retorna o id do cliente criado
    }

    // Método para buscar as pessoas juridicas
    protected async listarTodos(
        req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, 
        res: Response<PessoaJuridica[], Record<string, any>>
    ): Promise<void> {
        const pessoasJuridicas = await this.pessoaJuridicaController.listarTodos(); // Chama o método listarTodos do controller
        res.status(200).send(pessoasJuridicas); // Retorna a lista de clientes
    }

    // Método para deletar uma pessoa juridica pelo id
    protected async deletar(
        req: Request<{ id: string }, any, any, ParsedQs, Record<string, any>>,
        res: Response<any, Record<string, any>>
    ): Promise<void> {
        const id = Number(req.params.id); // Pega o id do cliente a ser deletado
        await this.pessoaJuridicaController.deletar(id); // Chama o método deletar do controller
    }

    // Método para atualizar uma pessoa juridica pelo id
    protected async atualizar(
        req: Request<{ id: string }, any, PessoaJuridica, ParsedQs, Record<string, any>>, 
        res: Response<any, Record<string, any>>
    ): Promise<void> {
        const pessoaJuridica = req.body; // Pega a pessoa juridica do corpo da requisição
        const id = Number(req.params.id); // Pega o id da pessoa juridica a ser atualizado
        await this.pessoaJuridicaController.atualizar(id, pessoaJuridica); // Chama o método atualizar do controller
    }
}