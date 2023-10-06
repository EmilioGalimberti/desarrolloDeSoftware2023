import { verifyToken } from "../utils/jwt.js"

/*
portador, en una cabezera llamada authorization le enviaremos el portador
y en ese portador ira la clave

entonces sacamos de la cabezera ese dato, y lo verificamos con el verifyToken que hicimos

 */
//como se hace antews que un reques tiene req,res,next
export const auth = (req, res, next) =>{
    try{

        const tokenJWT = req.headers.authorization
        if(!tokenJWT){
            res.status(400).send({message: 'Sin datos de Autorización!'})
        }else{
            //sacamos de la cabezera el token
            const token = tokenJWT.split(' ').pop()
            const rta = verifyToken(token)
            if(!rta){
                res.status(401)
                res.send({message:'JWT Token no válido!'})
            }else{
                next() //para que siga el curso normal del request
            }
        }
    }catch(err){
        res.status(500)
        res.send({message: 'Ha ocurrido un error interno. Consulte con el administrador!'})
    }
}