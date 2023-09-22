import express from 'express'
import servicio from '../service/articulosService.js'
//express.router ()
const router = express.Router()
/*
app.get: Enruta las solicitudes HTTP GET a la ruta especificada con las funciones de devolución de
llamada especificadas

 */
router.get("/articulos/:id", servicio.getArticuloById)
router.post("/articulos", servicio.insertArticulo)

export default{
    router
}

/*
Utilice la clase express.router para crear manejadores de rutas montables y modulares. Una instancia Router
es un sistema de middleware y direccionamiento completo; por este motivo, a menudo se conoce como una
“miniaplicación”

 */