import { DataTypes, Model, Sequelize } from "sequelize";
import connection from "../connection";

class Pessoa extends Model {
    public id!: number;
    public email!: string;
    public telefone?: string;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
    public readonly delete_at!: Date;
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
        delete_at: {
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
