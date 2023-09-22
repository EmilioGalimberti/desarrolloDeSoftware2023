//Objeto Request: el objeto de solicitud representa la solicitud HTTP y tiene, entre otra, propiedades para la
// cadena de consulta de la solicitud (query string), los parámetros, el cuerpo (body), los encabezados (Headers)
// HTTP, etc.
// Objeto Response: el objeto de respuesta representa la respuesta HTTP que envía una aplicación Express
// cuando recibe una solicitud HTTP.
const getArticuloById =  async (req, res) =>{
    try{
        //obtengo de algun lado el articulo... (BD deberia ser)
        //Establece el estado HTTP para la respuesta. Es un alias encadenable de response.statusCode de Node.
        res.status(200)
        //res.send: Envía la respuesta HTTP
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