const { DataTypes } = require("sequelize");
const sequelize = require("../data/config.js")

const Producto = sequelize.define(
    "Producto",
    {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        nombre: { 
            type: DataTypes.STRING, 
            allowNull: false
        },
        precio: { 
            type: DataTypes.FLOAT, 
            allowNull: false, 
            defaultValue: 0.0
        },
        stock: { 
            type: DataTypes.INTEGER, 
            allowNull: false
        }

    },
    {
        sequelize,
        modelName: "producto",
        timestamps: true
    }
);

module.exports = Producto