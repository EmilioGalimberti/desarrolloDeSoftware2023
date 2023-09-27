import { Post } from "../modelos/post.js";
import fetch from "node-fetch";

export async function obtener_posts_usuario(id_usuario) {
    let v = []
    try {
        // los await interrumpen y esperan a que se complete por ejemplo el fetch antes de seguir con el resto de la funcion
        const promesa = await fetch('https://jsonplaceholder.typicode.com/posts/')
        const data = await promesa.json()
        const v_filtrado = data.filter((x) =>
            x.userId === id_usuario
        )

        v_filtrado.forEach(elemento => {
            const post = new Post()
            post.id = elemento.id
            post.id_usuario = elemento.userId
            post.cuerpo = elemento.body
            post.titulo = elemento.title
            v.push(post)
        });

    } catch (err) {
        console.log(err)
        v = []
    }

    return v
}
/*
export default{
    obtener_posts_usuario
}*/