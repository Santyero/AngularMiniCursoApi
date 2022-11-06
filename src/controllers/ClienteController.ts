import IController from "../interfaces/IController";
import Cliente from "../models/Cliente";

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
