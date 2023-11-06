const getArticuloById = async (req, res)=>{
    try{
        res.status(200)
        res.send("Se solicito el articulo: "+ req.params.id)
    }
    catch(e){

    }
}

const createArticulo = async (req, res)=>{
    try{
       
    }
    catch(e){

    }
}



module.exports = {getArticuloById, createArticulo}