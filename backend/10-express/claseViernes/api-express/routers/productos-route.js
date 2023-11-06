import express from 'express'
import servicio from '../services/productos-services.js'

//Manejar todas las rutas de /api/productos
/*
Utilice la clase express.router para crear manejadores de rutas montables y modulares. Una instancia Router
es un sistema de middleware y direccionamiento completo; por este motivo, a menudo se conoce como una
miniaplicación”
 */
const router = express.Router();
//post mando algo
router.post("/api/productos", async function (req, res) {
    //generalmente en el get no vamos a levantar el body
    /*
    req.body
    Contiene pares clave-valor de datos enviados en el cuerpo de la solicitud. De forma predeterminada, no está
    definido y se completa cuando usa un middleware de análisis del cuerpo, como express.json()
     */
    const data  = req.body
    console.log(data)
    //proceso asincronrono
    const nuevo = await servicio.add(data)
    res.json(nuevo) // Genera una respuesta con un objeto JSON código 200 OK
    //la otra forma de armar la app maneja mejor errores
});

router.get("/api/productos", async function (req, res) {
    const lst = await servicio.getAll()
    res.json(lst)            
});


export default{
    router
}

