import jwt from 'jsonwebtoken'

const authMiddleware = async (req, res, next) =>{
    try{
        const token = req.headers.authorization?.split(' ')[1]
        if(token){
            jwt.verify(token,'EstaEsMiCLAVESecreta$$##SSDDsas', (error, decoded) => {
                if(error){
                    res.status(401).send("No tienes permisos")
                }else{
                   next()
                }
            })
        }else{
            res.status(401).send("SIN TOKEN!!!")
        }
    }
    catch(e){
        res.status(500).send("Error al autenticar..")
    }
}

export {authMiddleware}