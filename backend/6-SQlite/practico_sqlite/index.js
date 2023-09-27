import servicio from './services/productos.service.js'

(async function main(){
    //Código principal de la app.
    //consultar todos los productos en stock:
    const v = await servicio.obtenerProductosConStock()
    console.log(v)

})() //Funcion  que se llama en el mismo momento que se declara
//"IIFE", que significa "Immediately Invoked Function Expression
