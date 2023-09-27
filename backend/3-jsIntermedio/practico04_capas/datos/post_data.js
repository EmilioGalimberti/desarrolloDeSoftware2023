//uso del constructor de la clase post para armar los objetos apartir del json que se obtuvo
import {Post} from '../entidades/Post.js'
import fetch from 'node-fetch'

async function obtener_posts(){
    const v = []
    let url = 'https://jsonplaceholder.typicode.com/posts'
    try{    
        const promesa = await fetch(url)
        const data = await promesa.json()
        data.forEach(element => {
            //console.log(element)
            const post = new Post()
            post.id_usuario = element.userId
            post.id = element.id
            post.titulo = element.title
            post.cuerpo = element.body
            v.push(post)
        });
        
    }catch(error){
        console.log(error)
    }
    return v

}

export default{
    obtener_posts
}