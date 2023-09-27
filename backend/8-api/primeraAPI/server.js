import http from 'http'
import servicio from './service/usuariosService.js'
//req request <incomingMessage>
//res response <ServerResponse>
http.createServer(async function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'}); // http header
    var url = req.url
if(url === '/hola' && req.method === 'GET'){
    res.write("Bienvenidos a nuestra api")
    res.end()
}else if(url === '/usuarios' && req.method === 'GET'){
    const result = await servicio.obtener_usuarios()
    res.write(JSON.stringify(result))
    res.end()
}else if(url === '/nuevoUsuario' && req.method === 'POST'){
    let body = ''
    req.on('data', buffer => {
        body+= buffer.toString()
    })
    req.on('end', () => {
        const bodyObject = JSON.parse(body)
        console.log(body)
        res.write(JSON.stringify(bodyObject))
        res.end()
    })
}
}).listen(3000, function(){
    console.log("Api escuchando en puerto 3000")
})

/*
Este código de JavaScript crea un servidor HTTP utilizando el módulo `http` de Node.js.
El servidor escucha en el puerto 3000 y responde a diferentes rutas y métodos HTTP. Aquí hay una explicación paso a paso de lo que hace este código:

1. Importación de módulos:
   - Importa el módulo `http` de Node.js, que se utiliza para crear un servidor HTTP.
   - Importa un módulo llamado `servicio` desde el archivo `'./service/usuariosService.js'`.
   Presumiblemente, este módulo contiene funciones relacionadas con el servicio de usuarios.

2. Creación del servidor HTTP:
   - Utiliza el método `http.createServer()` para crear un servidor HTTP.
   - El servidor se crea con una función callback que se ejecutará cada vez que se reciba una solicitud HTTP.

3. Manejo de solicitudes HTTP:
   - Dentro de la función de callback, se utiliza `res.writeHead()` para establecer el código de estado HTTP en 200 (éxito) y
   el tipo de contenido en 'text/html'. Esto configura las cabeceras de la respuesta HTTP.
   - Se obtiene la URL de la solicitud HTTP con `req.url` y se almacena en la variable `url`.
   - Se inicia una serie de condiciones `if` para determinar cómo responder a diferentes rutas y métodos HTTP.

4. Ruta '/hola' (GET):
   - Si la URL es '/hola' y el método HTTP es 'GET', se envía la respuesta "Bienvenidos a nuestra api" con `res.write()`
   y luego se finaliza la respuesta con `res.end()`.

5. Ruta '/usuarios' (GET):
   - Si la URL es '/usuarios' y el método HTTP es 'GET', se llama a `servicio.obtener_usuarios()` de manera asíncrona y se espera a que se complete.
   - El resultado obtenido se convierte en una cadena JSON utilizando `JSON.stringify()`, y esta cadena se envía como respuesta con `res.write()`
   y luego se finaliza la respuesta con `res.end()`.

6. Ruta '/nuevoUsuario' (POST):
   - Si la URL es '/nuevoUsuario' y el método HTTP es 'POST', se configura un manejo de eventos para la solicitud (`req.on()`)
   para capturar los datos enviados en el cuerpo de la solicitud.
   - Los datos se acumulan en la variable `body` a medida que se reciben a través del evento 'data'.
   - Cuando se completa la recepción de datos (evento 'end'), se analiza el cuerpo como un objeto JSON utilizando `JSON.parse()`.
   - El objeto JSON analizado se registra en la consola con `console.log()` y luego se envía como respuesta utilizando `res.write()`,
   seguido de `res.end()`.

7. Escucha del servidor:
   - Finalmente, el servidor se pone en funcionamiento y comienza a escuchar en el puerto 3000. Se imprime un mensaje en la consola para
   indicar que la API está escuchando en ese puerto.

En resumen, este código crea un servidor HTTP que responde a tres rutas diferentes ('/hola', '/usuarios' y '/nuevoUsuario') y maneja solicitudes G
ET y POST, devolviendo respuestas en formato JSON en varios casos. También muestra mensajes en la consola para indicar que el servidor está en funcionamiento.
 */