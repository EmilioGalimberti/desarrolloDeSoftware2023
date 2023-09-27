import { DataTypes } from "sequelize";
import { sequelize } from "../data/cnn_db.js";

export const Producto = sequelize.define("Producto", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre:
    {
        type: DataTypes.STRING, //también  DataTypes.TEXT
        allowNull: false
    },
    stock:
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }

},
{
    timestamps: false, // omita columnas de auditoría
    sequelize
}
);