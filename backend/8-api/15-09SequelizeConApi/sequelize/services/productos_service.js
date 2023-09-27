import {Producto} from "../models/producto.js";


async function  getAll(){
    return await Producto.findAll({}) //select * from sin WHERE
}

async function updateById(id, nuevoStock){
    const prod = await Producto.findOne({ where: { id: id } }) 

    if(prod){
        prod.stock = nuevoStock
        return await prod.save()
    }

    return null
}

async function remove(id){
    const prod = await Producto.findOne({ where: { id: id } }) 
    if(prod){
        return await prod.destroy()
    }

    return null

}

async function add(nuevo){
    await Producto.create(nuevo)
}


export default{
    getAll,
    updateById, 
    remove,
    add
}