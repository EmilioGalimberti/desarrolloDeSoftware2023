import express from 'express'
import productosRouter from './routers/productos-route.js'
import {sequelize} from './data/cnn_db.js' //desescturctura el objeto y directamente uso la propiedad

//crear el api con Express
const app = express()
app.use(express.json()) // permite recuperar el body del request. MIDELWARE ya que todo lo que viaja por http lo hace como cadena
//endpoints fucion de url y metodo http
//principos rest -> get,post,update,delete
app.use(productosRouter.router)

//levantamos servidor y le pasamos el puerto a usar, haciendo uso de expresss
app.listen(3001, async()=>{
    console.log('Escuchando en puerto 3001')
    await sequelize.sync()
    console.log('Base de datos sincronizada')
})

