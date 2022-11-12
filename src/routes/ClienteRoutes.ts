import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import ClienteController from "../controllers/ClienteController";
import Cliente from "../models/Cliente";
import GenericRoute from "./GenericRoutes";

export default class ClienteRoute extends GenericRoute<Cliente> {
  private clienteController = new ClienteController(); // Importa o controler do cliente

  // Método para criar um cliente
  protected async criar(
    req: Request<ParamsDictionary, any, Cliente, ParsedQs, Record<string, any>>,
    res: Response<{ id: number }, Record<string, any>>
  ): Promise<void> {
    const cliente = req.body; // Pega o cliente do corpo da requisição
    const idCriado = await this.clienteController.criar(cliente); // Chama o método criar do controller
    res.status(201).send({ id: idCriado }); // Retorna o id do cliente criado
  }

  // Método para buscar os clientes
  protected async listarTodos(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<Cliente[], Record<string, any>>
  ): Promise<void> {
    const clientes = await this.clienteController.listarTodos(); // Chama o método listarTodos do controller
    res.status(200).send(clientes); // Retorna a lista de clientes
  }
  // Método para deletar um cliente
  protected async deletar(
    req: Request<{ id: string }, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ): Promise<void> {
    const id = Number(req.params.id); // Pega o id do cliente a ser deletado
    await this.clienteController.deletar(id); // Chama o método deletar do controller
  }

  // Método para atualizar um cliente pelo id
  protected async atualizar(
    req: Request<{ id: string }, any, Cliente, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ): Promise<void> {
    const cliente = req.body; // Pega o cliente do corpo da requisição
    const id = Number(req.params.id); // Pega o id do cliente a ser atualizado
    await this.clienteController.atualizar(id, cliente); // Chama o método atualizar do controller
  }
}
