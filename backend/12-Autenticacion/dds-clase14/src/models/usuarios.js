import { DataTypes } from "sequelize";
import { sequelize } from "../data/db_config.js";

//mapea contra la tabala de usuario
export const Usuario = sequelize.define(
    "Usuario", 
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true, 
            primaryKey: true
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false, 
            unique: true
        },
        pass:{
            type: DataTypes.STRING,
            allowNull: false
        },
        rol:{ // Admin - Consultor. Definir una política de Autorización
            type: DataTypes.STRING,
            allowNull: false
        },

    },
    {
      sequelize, 
      timestamps:false  
    }
)