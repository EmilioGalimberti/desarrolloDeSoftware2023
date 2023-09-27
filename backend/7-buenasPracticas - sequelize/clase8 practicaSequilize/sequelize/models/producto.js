import { DataTypes } from "sequelize";
//aca estoy importando la instancia de conexion
import { sequelize } from "../data/cnn_db.js";

/*
Permite definir un modelo que representa una tabla en la db
modelo es el nexo entre db y nuestro objetos
 */
export const Producto = sequelize.define("Producto", {
    //Se deben llamar exactamente igual que en la tabla
    id: {
        //Las propiedades tambien deben ser iguales
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
    //por defecto buscaria otras columnas de auidotira entonces me tiraria error al estar intentado buscar
{
    timestamps: false, // omita columnas de auditoría
    sequelize
}
);
