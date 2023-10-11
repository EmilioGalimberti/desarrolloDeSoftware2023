//mas ejemplo de
//import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
const express = require("express"); //import {Router} from 'express' // Esto solo importa el objeto Router de express
const Producto = require('../models/productos.js') // import * as Producto from '../models/productos.js'         el import seria lo correcto

//asi lo hico polioto, lo correcto seria
//const router = express.Router()
const router = express.Router()
router.get('/productos', async (req, res) => {
    const productos = await Producto.findAll()
    res.json(productos)
})



router.get('/productos/:id', async (req, res) => {
    try {
        const id = req.params.id //al valor id lo pone como una propeidad del objeto paramas
        const productFound = await Producto.findOne({ where: {id:id}})
        if (productFound) {
            res.json(productFound)
        } else {
            res.status(404).send({ mensaje: 'Producto inexistente! (404) no se encontro' })
        }
        console.log(productFound)
    } catch (error) {
        res.status(500).send({ mensaje: 'Error interno!' })
    }
})

router.post('/productos', async (req, res) => {
    try {
        const data = req.body
        console.log(data)
        const producto = await Producto.create(data)
        res.json(producto)

    } catch (error) {
        res.status(500).send({ mensaje: 'Error interno!' })
    }
})


module.exports = { router }