<h1>Ejemplo usando sequlize primera vez</h1>

1. npm initi y moddificar el packson type:"module"
2.  instalamos librerias (```npm install sqlite3 ; npm install sequelize```)
3. Creo la db con aplicacion data/my_db.sqlite ```new Sequelize()```
4. Crear una conexión y obtener una  instancia data/cnn_db.js
5. crear un modelo models/producto.js ```sequelize.define```
6. sincronizar script con db archivo:index.js ```sequilize.sync()```
7. productos_service getALL() y lo usamos en el index.js  ```Modelo.findAll```
8. Buscar por id y editar productos_service updateByID(id, nuevoStock) y lo usamos en el index.js ```Modelo.findOne()  instancia.save()```
9. remove
10. agregar


<h2>Sequelize es un ORM</h2>
