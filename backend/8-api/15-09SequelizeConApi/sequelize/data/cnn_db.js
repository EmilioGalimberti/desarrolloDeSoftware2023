import { Sequelize } from "sequelize";

export const sequelize =  new Sequelize("my_db", "", "",{ //conexion UNICA a la base de datos
    dialect: "sqlite",
    storage: "./data/my_db.sqlite"

}) // base, usuario, pass, opciones de conexion