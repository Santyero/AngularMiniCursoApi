import { DataTypes } from "sequelize";
import connection from "../connection";
import Pessoa from "./Pessoa";

class PessoaFisica extends Pessoa {
    public cpf!: string;
    public rg!: string;
    public nome!: string;
}
// Responsavel por inicializar o model e criar a tabela no banco de dados
PessoaFisica.init(
    {   
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

export default PessoaFisica;
