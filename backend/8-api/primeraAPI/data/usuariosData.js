import fetch from "node-fetch"

async function obtener_usuarios(){
    const url = "https://jsonplaceholder.org/users"

    try{
        const promesa = await fetch(url)
        const data = await promesa.json()

        return data
    }
    catch(error){
        console.log("error!!", error)
    }
}

export default{
    obtener_usuarios
}