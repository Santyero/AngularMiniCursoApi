import { Model } from "sequelize";

interface IController<T extends Model> {
  criar(model: T): Promise<number>;
  listarTodos(): Promise<T[]>;
  alterar(id: number, model: T): Promise<void>;
  deletar(id: number): Promise<void>;
}

export default IController;
