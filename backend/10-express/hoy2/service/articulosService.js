const getArticuloById =  async (req, res) =>{
    try{
        //obtengo de algun lado el articulo... (BD deberia ser)
        res.status(200)
        res.send(`Se solicito el articulo id: ${req.params.id}`)
    }
    catch(e){
        // manejaremos el error
    }
}

const insertArticulo =  async (req, res) =>{
    try{
      // agregar lógica de insert...
    }
    catch(e){
        // manejaremos el error
    }
}

export default{
    getArticuloById,
    insertArticulo
}