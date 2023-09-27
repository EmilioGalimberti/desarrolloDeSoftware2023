import { sequelize } from "./data/cnn_db.js"
import service from "./services/productos_service.js"


(async function main() {
    /*
    Permite sincronizar el modelo con la base de datos.
    Si sicronizamos un modelo con una tabla que no existe, la creara
    Se puede hacer que cada vez que sincronize borre todas las tablas y la vuelva a crear {force:true}
    es asincronico a diferencia de sqlite que debiamos hacerlos asincronicos
    me quedo duda del sync() como hace para sincronizar el modelo con la db??
     */
   await sequelize.sync()
        .then(() => { console.log('Base de productos sincronizada!') })
        .catch(() => { console.error('Error al sincronizar la base!') })

    console.log("Obtener todos los datos de la db")
    console.log(await service.getAll())


    //Id: 1 stock -> 100
    console.log("Actualizar  datos de producto especifico por id")
    const prodUpdate = await service.updateById(1, 100)
    if(prodUpdate == null)
        console.error('No se pudo actualizar producto ID: 1' )
    else{
        console.log('Producto actualizado!' )
        console.log(prodUpdate)
    }

    //Id: 2 deleted
    console.log("Borrar fila id 3")
    const prodDeleted = await service.remove(3)
    console.log(prodDeleted)

    //id: xx nuevo
    console.log("agregar nuevo producto")
    const nuevo = {
        nombre: 'PRODUCTO NUEVO', 
        stock:20    
    }
    await service.add(nuevo)
    

})()