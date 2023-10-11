//Cuales sería las rutas públicas?:

//R1 /home
//R2 /login

import {Router} from 'express'
//solo importamos el objeto
import { Usuario } from '../models/usuarios.js'
import { tokenSign } from '../utils/jwt.js'

export const router = Router()

router.get('/', (req, res)=>{
    res.json({message: 'API REST Segura!'})
})

/*
los datos privados no deben viajar por url
entonces lo mandamos por post asi van en el body
 */
//lo de sequelize es asincrono
router.post('/login', async(req, res)=>{
    const data = req.body
    //Ir a la base de datos a recuperar un usuario con esas credenciales.
    const user =  await Usuario.findOne({
        where:{
            email: data.email,
            pass : data.pass
        }
    })

    if(user){
        const token = tokenSign(user)    
        const userAuth =  {
            user: user.id,
            email: user.email,
            rol: user.rol,
            token: token
        }
        res.json(userAuth)
    }else{
        res.status(404).send({message: 'Usuario y/o clave incorrectos'})
    }

})

