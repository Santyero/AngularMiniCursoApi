import { DataTypes, Model } from "sequelize";
import connection from "../connection";
import Pessoa from "./Pessoa";

class PessoaFisica extends Model {
    public id!: number;
    public email!: string;
    public telefone?: string;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
    public readonly delete_at!: Date;
    public cpf!: string;
    public rg!: string;
    public nome!: string;
}
// Responsavel por inicializar o model e criar a tabela no banco de dados
PessoaFisica.init(
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
        nome: {
            type: DataTypes.STRING,
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        rg: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        sequelize: connection,
        modelName: "pessoa_fisica",
        underscored: true,
    }
);

// PessoaFisica.belongsTo(Pessoa);

export default PessoaFisica;
