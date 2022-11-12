import IController from "../interfaces/IController";
import Cliente from "../models/Cliente";

/*
 * Classe responsável por controlar as requisições
 * referentes a entidade Cliente
 * Com as implementações da interface IController
 * Com as funções do models cliente
 */
export default class ClienteController implements IController<Cliente> {
  async criar(cliente: Cliente) {
    const clienteCriado = await Cliente.create({ ...cliente });
    return clienteCriado.id;
  }

  async listarTodos(): Promise<Cliente[]> {
    return await Cliente.findAll();
  }

  async alterar(id: number, cliente: Cliente): Promise<void> {
    await Cliente.update({ ...cliente }, { where: { id } });
  }

  async deletar(id: number): Promise<void> {
    Cliente.destroy({ where: { id } });
  }

  async atualizar(id: number, cliente: Cliente): Promise<void> {
    await Cliente.update({ ...cliente }, { where: { id } });
  }
}
