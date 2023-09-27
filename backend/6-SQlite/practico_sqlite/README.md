<h1>Ejemplo usando sqlite primera vez</h1>

1. para iniciar proyecto node init
2. en el package.json vamos agregar type:"module" para usar js6
3. Creamos el main con funcion  "IIFE"
4. instalamos sqlite3 "npm i sqlite3"
5. Crear db con script archivo:init_db.js
6. Con este ejemplo creo las tablas con aplicacion para manejar motoresdeDB / En mi caso uso dataGrip
7. Creacion de modelo models/producto.js
8. obtener los datos de la db utilizando el modelo ejecutarQuery() data/data.js
9. obtenerProductosConStock() services/productos.service.js






<h2>Ejemplo de uso de promesa o try and catch</h2>

En JavaScript, las promesas y las estructuras `try...catch` se utilizan para manejar errores y gestionar el flujo de control en situaciones diferentes. Aquí hay una breve descripción de cuándo usar cada una:

1. **Promesas**:
    - **Asincronía**: Las promesas se utilizan principalmente cuando se trabaja con código asíncrono, como solicitudes a servidores, lectura/escritura de archivos, o cualquier operación que pueda tomar un tiempo variable para completarse.
    - **Manejo de resultados asincrónicos**: Las promesas son ideales cuando necesitas manejar el resultado de una operación asincrónica, ya sea con éxito o con error.
    - **Encadenamiento**: Puedes encadenar múltiples promesas para manejar secuencias complejas de operaciones asincrónicas, lo que facilita la gestión de flujos de trabajo complejos.

Ejemplo de uso de promesas:

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    // Hacer algo asincrónico y luego llamar a resolve() o reject()
  });
}

fetchData()
  .then(resultado => {
    // Manejar el resultado exitoso
  })
  .catch(error => {
    // Manejar el error
  });
```

2. **Try...Catch**:
    - **Sincronía**: La estructura `try...catch` se utiliza cuando necesitas manejar errores en código síncrono o bloqueante, es decir, en código que se ejecuta de manera secuencial.
    - **Errores predecibles**: Se utiliza cuando esperas errores específicos que puedes anticipar y manejar de manera controlada.
    - **Múltiples operaciones sincrónicas**: Puedes utilizar varios bloques `try...catch` para manejar errores en diferentes partes de tu código síncrono.

Ejemplo de uso de `try...catch`:

```javascript
try {
  // Código síncrono que puede generar errores
} catch (error) {
  // Manejar el error de manera controlada
}
```

En resumen, las promesas se utilizan para manejar operaciones asincrónicas y controlar flujos de trabajo complejos, mientras que `try...catch` se utiliza para manejar errores en código síncrono o para manejar errores específicos y predecibles. Es importante elegir la herramienta adecuada según el contexto de tu código para garantizar un manejo eficaz de errores y control de flujo.