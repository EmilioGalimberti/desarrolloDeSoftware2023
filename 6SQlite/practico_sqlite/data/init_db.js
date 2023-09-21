import * as sqlite3 from 'sqlite3'
//sqlite gestor de archivo plano, ejecutando sql en el mismo

//script de creacion de db
//el ultimo paramatro es un callback, que se ejecutara en caso de error
const db = new sqlite3.default.Database('./data/my_db.sqlite', sqlite3.OPEN_READWRITE, (error)=>{
    if(error)
        console.log('Ha ocurrido un error: ' + error.message)
})

//db es una conexion logica a la db
//lo exporto para luego utilzarlo en el data.js y no tenes que volver abrir la conexion
//aca se exporta un objeto por default que adentro tiene el DB
export default{
    db
}
