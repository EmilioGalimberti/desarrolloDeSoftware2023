<h1>Express</h1>

<h2>Resumen de que es Express</h2>
Express es un framework de aplicación web para Node.js que simplifica el desarrollo de aplicaciones web y APIs. Es de código abierto y ofrece una serie de características y utilidades que permiten a los desarrolladores crear aplicaciones web de manera más eficiente. Aquí hay un resumen de algunas de las características clave de Express:

Enrutamiento: Express facilita la definición de rutas para manejar las solicitudes HTTP, lo que permite crear rutas para diferentes URLs y métodos HTTP (GET, POST, PUT, DELETE, etc.).

Middleware: Express utiliza un sistema de middleware que permite realizar acciones intermedias en una solicitud HTTP, como autenticación, validación de datos, compresión, entre otros.

Plantillas: Permite la integración de motores de plantillas para generar dinámicamente el contenido HTML de las páginas web.

Gestión de solicitudes y respuestas: Express simplifica la manipulación de solicitudes y respuestas HTTP, lo que facilita la creación de APIs y sitios web dinámicos.

Middleware de terceros: Express tiene una amplia comunidad de desarrolladores que han creado middleware de terceros que se pueden utilizar para agregar funcionalidades adicionales a la aplicación.

Escalabilidad: Es altamente escalable y se puede utilizar para crear tanto aplicaciones pequeñas como grandes y complejas.

Amplia adopción: Express es ampliamente utilizado en la comunidad de desarrollo web de Node.js y tiene una gran cantidad de recursos y documentación disponibles.

En resumen, Express es una herramienta esencial para el desarrollo de aplicaciones web y APIs en Node.js, ya que proporciona una estructura sólida y muchas características útiles que aceleran el proceso de desarrollo y mejoran la mantenibilidad de las aplicaciones web.

<h1>Practica con Express</h1>


1. iniciar proyecto node init
2. en el package.json vamos agregar type:"module" para usar js6
3. instalamos expres ```npm i express --save```
4. inicio de servidor ```app.js```
5. utilize el routeo route:```articulosRuta.js```
6. llame al serivico service:```articulosService.js```


<h1>Explicacion de todo</h1>
Claro, puedo explicarte estos archivos en JavaScript:

**app.js**:

En este archivo, se crea una aplicación web utilizando el framework Express.js. Aquí hay una descripción de lo que hace cada parte del código:

1. Importación de Express:
   ```javascript
   import express from 'express'
   ```
   Importa el módulo 'express' que es necesario para crear la aplicación Express.

2. Creación de la aplicación Express:
   ```javascript
   const app = express()
   ```
   Crea una instancia de la aplicación Express y la asigna a la variable `app`.

3. Configuración del puerto:
   ```javascript
   const port = 3000
   ```
   Define el puerto en el que la aplicación escuchará las solicitudes entrantes.

4. Uso de middleware:
   ```javascript
   app.use(express.json())
   ```
   Configura Express para usar el middleware `express.json()`, que permite analizar y manejar solicitudes JSON.

5. Enrutamiento:
   ```javascript
   app.use('/api', routerArticulos.router)
   ```
   Asocia el enrutador definido en `routerArticulos` con la ruta "/api" en la aplicación.

6. Inicio del servidor:
   ```javascript
   app.listen(port, () => {
       console.log("Inicio de api...")
   })
   ```
   Inicia el servidor Express para que escuche en el puerto especificado (en este caso, el puerto 3000) y muestra un mensaje de inicio en la consola cuando el servidor se inicia.

**articulosRuta.js**:

Este archivo contiene definiciones de rutas específicas utilizando Express Router. Aquí está la explicación:

1. Importación de Express y el servicio:
   ```javascript
   import express from 'express'
   import servicio from '../service/articulosService.js'
   ```
   Importa Express y el módulo `articulosService.js` para utilizarlo en las rutas.

2. Creación de un enrutador Express:
   ```javascript
   const router = express.Router()
   ```
   Crea una instancia de enrutador Express y la asigna a la variable `router`.

3. Definición de rutas:
   ```javascript
   router.get("/articulos/:id", servicio.getArticuloById)
   router.post("/articulos", servicio.insertArticulo)
   ```
   Estas líneas definen dos rutas: una para obtener un artículo por su ID y otra para insertar un artículo. Estas rutas utilizan las funciones definidas en `articulosService.js` como manejadores de ruta.

4. Exportación del enrutador:
   ```javascript
   export default{
       router
   }
   ```
   Exporta el enrutador para que pueda ser utilizado en otros archivos, como `app.js`.

**articulosService.js**:

Este archivo contiene las funciones que actúan como manejadores de ruta para las rutas definidas en `articulosRuta.js`. Aquí está la explicación:

1. Función `getArticuloById`:
   - Esta función se encarga de manejar la solicitud para obtener un artículo por su ID.
   - Establece el estado de respuesta HTTP en 200 (éxito).
   - Utiliza `res.send` para enviar una respuesta al cliente con un mensaje que indica que se solicitó el artículo con el ID especificado.

2. Función `insertArticulo`:
   - Esta función se encarga de manejar la solicitud para insertar un artículo (aunque la lógica real de inserción aún debe implementarse).
   - Puede contener lógica para insertar un artículo en una base de datos u otro almacenamiento.
   - Captura cualquier error que pueda ocurrir durante la operación.

3. Exportación de las funciones:
   - Exporta ambas funciones como un objeto para que puedan ser importadas y utilizadas en otros archivos.

En resumen, estos archivos trabajan juntos para crear una aplicación web utilizando Express.js, definir rutas y manejar solicitudes HTTP relacionadas con artículos. La lógica de negocio real, como la inserción de artículos en una base de datos, debe implementarse en el servicio `articulosService.js`.