import { DataTypes, Model } from "sequelize";
import connection from "../connection";

class Cliente extends Model {
  public id!: number;
  public nome!: string;
  public doc_federal?: string;
  public dt_nascimento?: Date;
}
// Responsavel por inicializar o model e criar a tabela no banco de dados
Cliente.init(
  {
    nome: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    doc_federal: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dt_nascimento: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize: connection,
    modelName: "cliente",
    underscored: true,
  }
);

export default Cliente;
