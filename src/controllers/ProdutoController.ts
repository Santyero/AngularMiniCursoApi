import IController from "../interfaces/IController";
import Produto from "../models/Produto";

export default class ProdutoController implements IController<Produto> {
    async criar(produto: Produto) {
        const produtoCriada = await Produto.create({ ...produto });
        return produtoCriada.id;
    }

    async listarTodos(): Promise<Produto[]> {
        try {
            const produtos = await Produto.findAll();
            return produtos;   
        } catch (error) {
            console.log('erro', error);
            return [];
        }
    }

    async alterar(id: number, produto: Produto): Promise<void> {
        await Produto.update({ ...produto }, { where: { id } });
    }

    async deletar(id: number): Promise<void> {
        Produto.destroy({ where: { id } });
    }

    async atualizar(id: number, produto: Produto): Promise<void> {
        await Produto.update({ ...produto }, { where: { id } });
    }
}