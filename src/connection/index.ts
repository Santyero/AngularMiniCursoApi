import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../../database/development.sqlite'
}); // Gera um exemplo de banco de dados em memória

export default sequelize; // Exporta o banco de dados na memoria para ser usado em outros arquivos
