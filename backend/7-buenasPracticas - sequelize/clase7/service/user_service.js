import fetch from "node-fetch";
import {Usuario} from "../models/user.js"

async function obtener_usuarios(){
    const result = []
    const url = "https://jsonplaceholder.org/users"

    try{
        const promesa = await fetch(url)
        const data = await promesa.json()

        data.forEach(usuApi => {
            console.log(usuApi.firstname)
            //REALIZAR INSERT A LA BD
        });
    }
    catch(e){
        console.log("Error al obtener usuario", e)
    }
}

async function obtener_usuarios2(){
    console.log(await Usuario.findAll())
}

export default{
    obtener_usuarios,
    obtener_usuarios2
}