//Libreria para levantar http
import * as http from 'http'

let data = null
const productos = [{ id: 1, nombre: 'Producto TEST', stock: 10 }] //lista de productos fija, para test!
http.createServer((req, res) => {
    // procesar el pedido HTTP y generar la respuesta correspondiente:
    //estas serian dos propiedades de objeto y son desestructurada del req
    //Es decir en el objeto req se fijara si tiene dos atributos llamados url y method y los va a copiar en nuestras contantes
    const { url, method } = req
    console.log(`Pedido HTTP con URL: ${url}, mediante: ${method}`)
    //Por defecto esto procesa solo GETs

    switch (method) {

        case 'GET': {
            if (url === '/')
                data = { mensaje: 'BIENVENIDO A LA API DE PRODUCTOS!' }

            if (url === '/productos')
                data = productos

            break;
        }
        case 'POST': {
            if (url === '/productos') {

            }
            break;
        }
    }


    res.writeHead(200, 'Ok', { 'content-type': 'application/json' })
    res.write(JSON.stringify(data))
    res.end()

}).listen(3001, () => {
    console.log('Escuchando en el puerto 3001!')
})

//npm i nodemon -D (para que se actualize solo y no tener que estar parando y volviendo a iniciar en cada cambio que hagamos