import express from 'express'
import routerArticulos from './routes/articulosRuta.js'
/*
app: es el objeto de la aplicación. Se usa este nombre convencionalmente para la aplicación Express.
Créelo llamando a la función express() de nivel superior exportada por el módulo Express:
 */
const app = express()
const port = 3000

app.use(express.json())

app.use('/api', routerArticulos.router)


app.listen(port, () => {
    console.log("Inicio de api...")
})