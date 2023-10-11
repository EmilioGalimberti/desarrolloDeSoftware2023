/*
Ejemplo sin usar el type:module n JavaScript,
la declaración "type": "module" se utiliza en los archivos de módulos para indicar que el archivo debe ser tratado como un módulo ES (ECMAScript)
 */
const express = require('express')
const productos = require('./routers/productos.js')
const app = express()
app.use(express.json())
const PORT = 3000
app.use('/api', productos.router)

app.listen(PORT, async() => {
    console.log(`App listening on port ${PORT}`)  
})