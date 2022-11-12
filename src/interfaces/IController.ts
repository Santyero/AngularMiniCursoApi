import { Model } from "sequelize";

// Define um padrão para o controller, em que os métodos que serão implementados são obrigatórios e devem ser implementados na classe que herdar de IController
interface IController<T extends Model> {
  criar(model: T): Promise<number>;
  listarTodos(): Promise<T[]>;
  alterar(id: number, model: T): Promise<void>;
  deletar(id: number): Promise<void>;
}

export default IController;
