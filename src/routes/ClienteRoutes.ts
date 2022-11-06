import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import ClienteController from "../controllers/ClienteController";
import Cliente from "../models/Cliente";
import GenericRoute from "./GenericRoutes";

export default class ClienteRoute extends GenericRoute<Cliente> {
  private clienteController = new ClienteController();

  protected async criar(
    req: Request<ParamsDictionary, any, Cliente, ParsedQs, Record<string, any>>,
    res: Response<{ id: number }, Record<string, any>>
  ): Promise<void> {
    const cliente = req.body;
    const idCriado = await this.clienteController.criar(cliente);
    res.status(201).send({ id: idCriado });
  }

  protected async listarTodos(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<Cliente[], Record<string, any>>
  ): Promise<void> {
    const clientes = await this.clienteController.listarTodos();
    res.status(200).send(clientes);
  }

  protected async deletar(
    req: Request<{ id: string }, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ): Promise<void> {
    const id = Number(req.params.id);
    await this.clienteController.deletar(id);
  }

  protected async atualizar(
    req: Request<{ id: string }, any, Cliente, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ): Promise<void> {
    const cliente = req.body;
    const id = Number(req.params.id);
    await this.clienteController.atualizar(id, cliente);
  }
}
