import express from 'express'
import routerArticulos from './routes/articulosRuta.js'

const app = express()
const port = 3000

app.use(express.json())

app.use('/api', routerArticulos.router)


app.listen(port, () => {
    console.log("Inicio de api...")
})