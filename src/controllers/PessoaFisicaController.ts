import IController from "../interfaces/IController";
import PessoaFisica from "../models/PessoaFisica";
/*
 * Classe responsável por controlar as requisições
 * referentes a entidade PessoaFisica
 * Com as implementações da interface IController
 * Com as funções do models pessoaFisica
 */
export default class PessoaFisicaController implements IController<PessoaFisica> {
    async criar(pessoaFisica: PessoaFisica) {
        const pessoaFisicaCriada = await PessoaFisica.create({ ...pessoaFisica });
        return pessoaFisicaCriada.id;
    }

    async listarTodos(): Promise<PessoaFisica[]> {
        try {
            const aa = await PessoaFisica.findAll();
            console.log('busco isso aqui', aa);
            return aa;   
        } catch (error) {
            console.log('erro', error);
            return [];
        }
    }

    async alterar(id: number, pessoaFisica: PessoaFisica): Promise<void> {
        await PessoaFisica.update({ ...pessoaFisica }, { where: { id } });
    }

    async deletar(id: number): Promise<void> {
        PessoaFisica.destroy({ where: { id } });
    }

    async atualizar(id: number, pessoaFisica: PessoaFisica): Promise<void> {
        await PessoaFisica.update({ ...pessoaFisica }, { where: { id } });
    }
}