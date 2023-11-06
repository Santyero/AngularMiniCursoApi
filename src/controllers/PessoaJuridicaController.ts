import IController from "../interfaces/IController";
import PesoaJuridica from "../models/PessoaJuridica";
/*
 * Classe responsável por controlar as requisições
 * referentes a entidade PessoaJuridica
 * Com as implementações da interface IController
 * Com as funções do models pessoaJuridica
 */
export default class PessoaJuridicaController implements IController<PesoaJuridica> {
    async criar(pessoaJuridica: PesoaJuridica) {
        const pessoaJuridicaCriada = await PesoaJuridica.create({ ...pessoaJuridica });
        return pessoaJuridicaCriada.id;
    }

    async listarTodos(): Promise<PesoaJuridica[]> {
        return await PesoaJuridica.findAll();
    }

    async alterar(id: number, pessoaJuridica: PesoaJuridica): Promise<void> {
        await PesoaJuridica.update({ ...pessoaJuridica }, { where: { id } });
    }

    async deletar(id: number): Promise<void> {
        PesoaJuridica.destroy({ where: { id } });
    }

    async atualizar(id: number, pessoaJuridica: PesoaJuridica): Promise<void> {
        await PesoaJuridica.update({ ...pessoaJuridica }, { where: { id } });
    }
}