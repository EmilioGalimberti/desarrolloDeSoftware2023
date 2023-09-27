const { request, response } = require("express")
const express = require("express")
const app = express()
const path = require("path")

let listaDeAliens = [ "alien 1", "alien 2"]

app.get("/", (request, response) =>{
    response.send("start server ")
})

app.get("/lista/de/aliens", (request, response) =>{
    if (listaDeAliens.length == 0){ response.send('No hay mas aliens')}
    else{
    // let datos = `lista de aliens: (${listaDeAliens[0]} | ${listaDeAliens[1]})`.toUpperCase()
    response.send(listaDeAliens)
    }
})
app.get("/destruir/alien", (request, response) =>{
    listaDeAliens.pop()
    response.send("Se saco un elemento del array de la lista de aliens ")
})

app.get("/historia", (request, response) =>{
    response.sendFile(path.join(__dirname, "./views/home.html"))
})

app.listen(3000, () => { console.log('start server')})