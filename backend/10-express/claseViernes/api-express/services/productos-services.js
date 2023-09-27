import {Producto} from "../models/producto.js";

async function  getAll(){
    //modelo.findaAll() Permite recuperar todos los registro de una tabla segun los criteros que se pasen por argumento
    return await Producto.findAll({}) //select * from sin WHERE
}

async function updateById(id, nuevoStock){
    //Modelo.findeOne Permite recuperar una fila por id
    //es necesiario el await para esperar hasta que se obtenga el producto osino saldra error
    const prod = await Producto.findOne({ where: { id: id } }) 

    if(prod){
        prod.stock = nuevoStock
        //intancia.Save() Podemos actualizar una entidad que ya hemos recuperado previamente
        return await prod.save()
    }
    //lo neceisto para devolver null para que no tiere error (tranquilamente se podria hacer con un try catch)
    return null
}

async function remove(id){
    const prod = await Producto.findOne({ where: { id: id } }) 
    if(prod){
        //intancia.destroy elimnar una instancai que ha sido recuperada previamente
        return await prod.destroy()
    }

    return null

}

async function add(nuevo){
    //para crear un solo registro
    // tener en cuenta del return porque osino no va funcionar para el res.json
  return await Producto.create(nuevo)
}


export default{
    getAll,
    updateById, 
    remove,
    add
}