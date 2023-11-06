import express from 'express'
import servicio from '../service/articulosService.js'

const router = express.Router()
router.get("/articulos/:id", servicio.getArticuloById)
router.post("/articulos", servicio.insertArticulo)

export default{
    router
}