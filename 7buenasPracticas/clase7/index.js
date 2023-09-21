import {sequelize} from "./data/db.js"
import servicio from "./service/user_service.js"

(async function(){
    try{
        await sequelize.sync().then(()=>{
            console.log("Db conectada...")
        })
        await servicio.obtener_usuarios()
        //await servicio.obtener_usuarios2()
    }
    catch(e){
        console.log("Error", e)
    }
})()