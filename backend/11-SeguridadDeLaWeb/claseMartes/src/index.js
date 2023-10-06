import express from "express";
import jwt from 'jsonwebtoken'
import {authMiddleware} from './middleware/auth.js'

const app = express()
const port = 3000

app.use(express.json())

app.get('/articulos/:id', (req, res) => {
    const {id} = req.params

    res.status(200).send(`Articulo seleccionado: ${id}`)
})

app.post("/login", async (req, res) => {
    const {mail} = req.body
    const {password} = req.body
    const {rol} = req.body
    
    //Ir a la bd, validar que exista ese usuario, blabla...
    const token = jwt.sign({ 
        mail: mail, 
        rol: rol 
      }, 'EstaEsMiCLAVESecreta$$##SSDDsas', { expiresIn: '1h' });
      
      res.status(200).send(token)
})

app.get('/test', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1]
    if(token){
        jwt.verify(token,'EstaEsMiCLAVESecreta$$##SSDDsas', (error, decoded) => {
            if(error){
                res.status(401).send("No tienes permisos")
            }else{
                res.status(200).send(decoded.mail + ' ' + decoded.rol)
            }
        })
    }
   
})

app.get('/test2',authMiddleware, (req, res) => {

    res.status(200).send(`Felicidades nuevamente, accediste`)
})

app.listen(port, async() => {
    console.log("Api iniciada en el puerto 3000")
})