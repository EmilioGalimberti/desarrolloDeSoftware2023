import data from '../data/data.js'
async function obtenerProductosConStock(){
    return await data.ejecutarQuery('SELECT * FROM productos WHERE stock > 0')
}
export default{
    obtenerProductosConStock
}