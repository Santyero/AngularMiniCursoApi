import { DataTypes, Model, Sequelize } from "sequelize";
import connection from "../connection";
import { all } from "bluebird";

class Pessoa extends Model {
    public id!: number;
    public email!: string;
    public telefone?: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletAt!: Date;
}
Pessoa.init(
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        telefone: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        deletAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        sequelize: connection,
        modelName: "pessoa",
        underscored: true,
        timestamps: true, // Ativar carimbos de data e hora
        paranoid: true,   // Ativar exclusão lógica
    }
);

export default Pessoa;
