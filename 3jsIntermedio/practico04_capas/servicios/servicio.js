import datos from '../datos/post_data.js'


async function obtener_post_usuario(id){
    const posts = await datos.obtener_posts()
    return posts.filter(post =>
        post.id_usuario === id
    )
}

async function obtener_post_titulo(patron){
    const posts = await datos.obtener_posts()
    return posts.filter(post =>
        post.titulo.includes(patron)
    )
}

export default{
    obtener_post_titulo, 
    obtener_post_usuario
}