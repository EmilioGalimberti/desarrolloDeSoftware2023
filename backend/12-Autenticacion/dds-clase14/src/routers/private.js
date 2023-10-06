//Cuales sería las rutas públicas?:

//R1 /api/users


import {Router} from 'express'
import { Usuario } from '../models/usuarios.js'
import { auth } from '../middlewares/jwt_auth.js'

export const router_private = Router()
/*
Lo aplicamos como middelware porque tendriamos que usarlo para muchas urls
entonces para no repetir para cada uno lo mismo
 */
//middelware, que pued poner un proces antes,durante o despues del proceso de un request
router_private.use(auth)

//todas las rutas de este router serán seguras
router_private.get('/users', async(req, res)=>{
    res.json(await Usuario.findAll())
})

//para hacer la prueba en postman manda un metodo post donde a la fuerza le pone el bearer de un usuario ya autenticado
//en el header del post