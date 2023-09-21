import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("DB0509","","",{
    dialect: "sqlite",
    storage: "./data/DB0509.db"
})