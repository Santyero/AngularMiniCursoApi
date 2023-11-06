import { DataTypes } from "sequelize";
import connection from "../connection";
import Pessoa from "./Pessoa";

class PessoaJuridica extends Pessoa {
    public cnpj!: string;
    public razaoSocial!: string;
}
// Responsavel por inicializar o model e criar a tabela no banco de dados
PessoaJuridica.init(
    {
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
        modelName: "pessoa_fisica",
        underscored: true,
    }
);

export default PessoaJuridica;
