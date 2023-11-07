import { DataTypes, Model } from "sequelize";
import connection from "../connection";
import Pessoa from "./Pessoa";

class PessoaJuridica extends Model {
    public id!: number;
    public email!: string;
    public telefone?: string;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
    public readonly delete_at!: Date;
    public cnpj!: string;
    public razaoSocial!: string;
}
// Responsavel por inicializar o model e criar a tabela no banco de dados
PessoaJuridica.init(
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        telefone: {
            type: DataTypes.STRING,
        },
        delete_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        cnpj: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        razaoSocial: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        sequelize: connection,
        modelName: "pessoa_juridica",
        underscored: true,
    }
);
// PessoaJuridica.belongsTo(Pessoa);

export default PessoaJuridica;
