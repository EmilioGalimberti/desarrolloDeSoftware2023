import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('productos.sqlite', '', '', {
    dialect : 'sqlite',
    host: 'src/data/productos.sqlite' 
})