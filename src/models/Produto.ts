import { DataTypes, Model } from "sequelize";
import connection from "../connection";

class Produto extends Model {
    public id!: number;
    public nome!: string;
    public valor!: number;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
    public readonly delete_at!: Date;
}
// Responsavel por inicializar o model e criar a tabela no banco de dados
Produto.init(
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        valor: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
        },
        delete_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        sequelize: connection,
        modelName: "produto",
        underscored: true,
    }
);

export default Produto;
