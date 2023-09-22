import servicio from './service/usuariosService.js'

(async function main(){
    console.log("Bienvenidos")
    const usuarios = await servicio.obtener_usuarios()
    console.log("*****")
    console.log(usuarios)
})()