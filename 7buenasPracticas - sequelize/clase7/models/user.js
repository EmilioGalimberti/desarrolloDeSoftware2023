import { DataTypes } from "sequelize";
import { sequelize } from "../data/db.js";

export const Usuario = sequelize.define(
  "Usuario",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstname:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    }
  },
  {
    sequelize,
    modelName: "usuarios",
    timestamps: false
  }  
)