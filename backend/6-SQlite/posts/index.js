import * as servicio_post from './servicios/servicio.js'

//main:

/*import { Post } from "./modelos/post.js";

const oPost = new Post()
oPost.id = 1
oPost.id_usuario = 1cls
oPost.titulo = 'Test'
oPost.cuerpo = 'Cuerpo del Test'

console.log(oPost)*/

(async function () { 
    console.log('Obteniendo posts desde Jsonplaceholder...')
    //lo mismo con el await
    const v = await servicio_post.obtener_posts_usuario(1)
    console.log(v)
    console.log('********')
})()


