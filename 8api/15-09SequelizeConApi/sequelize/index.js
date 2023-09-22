import * as http from 'http'
import { sequelize } from "./data/cnn_db.js"
import service from "./services/productos_service.js"


let data = null
const productos = []
http.createServer(async(req, res)=>{
    // procesar el pedido HTTP y generar la respuesta correspondiente:
    const {url, method} = req
    console.log(`Pedido HTTP con URL: ${url}, mediante: ${method}`)
    //Por defecto esto procesa solo GETs

    switch(method){

        case 'GET':{
            if(url === '/')
                data = {mensaje: 'BIENVENIDO A LA API DE PRODUCTOS!'}
            
            if(url === '/productos')
                data = await service.getAll() 
            
                break;
        }
        case 'POST':{
            if(url === '/productos'){
                //INVESTIGAR COMO PROCESAR UN POST CON DATOS DE UN PRODUCTO PARA
                //GRABARLO EN LA BASE DE DATOS y DEVOLVER 200 OK    
            }
            break;
        }
    }


    res.writeHead(200, 'Ok', {'content-type': 'application/json'})
    res.write(JSON.stringify(data))
    res.end()

}).listen(3001, async()=>{
    console.log('Escuchando en el puerto 3001!')
    await sequelize.sync()
    console.log('BD sincronizada!')
})