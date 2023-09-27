import servicio from './servicios/servicio.js'

(async function main(){
    console.log('Consulta de posts desde: API JSON Placeholder ***')
    let posts = await servicio.obtener_post_usuario(1)
    console.log('POSTS Usuario ID =  1: \n' )
    console.log(posts)
    console.log('********\n')
    console.log('POSTS con titulo **eum**: \n')
    posts =  await servicio.obtener_post_titulo('eum')
    console.log('********\n')

})()
