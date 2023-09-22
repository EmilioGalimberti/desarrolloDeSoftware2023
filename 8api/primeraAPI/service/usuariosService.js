import datos from '../data/usuariosData.js'

async function obtener_usuarios(){
    const result = await datos.obtener_usuarios()
    return result
}

export default{
    obtener_usuarios
}