import jwt from 'jsonwebtoken'

//le asigno el nombre a la funcion y la exporto
const tokenSign = (user)=>{
    return jwt.sign({
        //firma del objeto completo user
        usuario: user,
    }, "palabraclave", {expiresIn: '1h'})
}

const verifyToken = (token)=>{
    try{
        return jwt.verify(token, 'palabraclave')
    }catch(error){
        return null
    }
}

export {tokenSign, verifyToken}
