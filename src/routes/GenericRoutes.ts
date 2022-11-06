import { Request, Response, Router } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

import IRoute from "../interfaces/IRoutes";

export default abstract class GenericRoute<T> implements IRoute {
  protected abstract listarTodos(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<T[], Record<string, any>>
  ): Promise<void>;
  protected abstract criar(
    req: Request<ParamsDictionary, any, T, ParsedQs, Record<string, any>>,
    res: Response<{ id: number }, Record<string, any>>
  ): Promise<void>;
  protected abstract atualizar(
    req: Request<{ id: string }, any, T, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ): Promise<void>;
  protected abstract deletar(
    req: Request<{ id: string }, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ): Promise<void>;

  iniciarRotas(): Router {
    const router = Router();

    router
      .route("/")
      .get(async (req, res) => {
        try {
          await this.listarTodos(req, res);
        } catch (error) {
          res.status(500).send({ erro: "Erro ao Criar" });
        }
      })
      .post(async (req, res) => {
        try {
          await this.criar(req, res);
        } catch (error) {
          res.status(500).send({ erro: "Erro ao Criar" });
        }
      });

    router
      .route("/:id")
      .put(async (req, res) => {
        try {
          await this.atualizar(req, res);
        } catch (error) {
          res.status(500).send({ erro: "Erro ao Criar" });
        }
      })
      .delete(async (req, res) => {
        try {
          await this.deletar(req, res);
        } catch (error) {
          res.status(500).send({ erro: "Erro ao Criar" });
        }
      });

    return router;
  }
}
