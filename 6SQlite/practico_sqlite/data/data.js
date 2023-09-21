import { Producto } from "../models/producto.js";
//importacion de objeto por default que adentor tiene la db
//cnn conexion
import cnn_db from "./init_db.js";

//Esto deberia ejecutarse de manera asincrona porque se buscan datos en un recurso externo
async function ejecutarQuery(query) {
    //devolvemos objeto promesa para el async, exuctor con resolve y reject
    return new Promise((resolve, reject) => {
        const v = []
        //.all nos va a permitir ejecutar una querey con parametros y callback
        cnn_db.db.all(query, [], (err, rows) => {
            if (err)
                return reject(err)

            rows.forEach(row => {
                const nuevo = new Producto()
                nuevo.id = row.id
                nuevo.nombre = row.nombre
                nuevo.stock = row.stock
                v.push(nuevo)
            });

            resolve(v)
        })

    })

}

export default {
    ejecutarQuery
}