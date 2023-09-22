/* Clase de hoy */
//todo: repaso de contenidos vistos en PG (19:05 - 20:00)
//todo: terminar app de tareas (20:10 - 21:10)

/* Callbacks */
// definicion: es una funcion que pasamos por parametro
// se ejecuta cuando el asiconronismo termina
// nos permite llamar una una duncion dentro de otra funcion, con la particularidad que pasamos una fucncion como parametro de otra, y la ejecutamos (a la que esta como parametro) dentro del bloque, cuando lo encesitemos..
// ejemplo:
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const realizarOperacion = (a, b, callback) => callback(a, b);
console.log(realizarOperacion(4, 3, sumar));

/* Metodos de array II */
const edades = [10, 15, 20, 25, 30, 35];
/* edades.indexOf 
edades.lastIndexOf
edades.pop        
edades.push       
edades.length     
edades.unshift    
edades.shift      
 */

/* .map */
// definicion: es un metodo que recorre el arreglo para que trabajemos con el.. Hace modificaciones en todo el arreglo.. Toma un callbak y retorna un array del mismo lenth.. no modifica el array de origen
// ejemplo:
let edadesDobles = edades.map(function (valor, indice) {
  // console.log("el valor es: " + valor + ", y el indice es: " + indice);
  let nuevoValor = valor * 2;
  return nuevoValor;
});
console.log(edades);
console.log(edadesDobles);

/* .filter */
// definicion: es un metodo que recorre un arrray y lo filtra segun una condicion que pasamos por callback.. devuelve un array de length <= que el original
// ejemplo:
let mayores = edades.filter((valor) => valor > 18);
console.log(mayores);

/* .foreach */
// definicion: es una funcion que itera el array, qure toma como parametro un callback pero no tiene valor de retorno.
// ejemplo:
edades.forEach((elemento, index) => {
  console.log(elemento, index);
  // no ponemos return
});

/* .reduce */
// definicion: metodo q recorre todo el array y nos devuelve un unicoi valor en el callback le pasamos dos parametros: un acumulador y el elemento
// ejemplo:
let sumaDeEdades = edades.reduce((acum, elemento) => acum + elemento);
console.log("La suma de edades (con reduce) es: " + sumaDeEdades);

/* Objeto DATE */
// definicion: es un objeto (clase) que tiene metodos que nos ayudan a obtener informacio n sobre fecha (tiempo)
const fecha = new Date();
/* .getDate */
/* .getMonth */
/* .getDay */
/* .getFullYear */
// ejemplos:
console.log(fecha.getDate()); // devuelve el nro del dia 1-31
console.log(fecha.getMonth()); // devuelve el nro del mes 0 - 11
console.log(fecha.getDay()); // devuelve el nro de dia de la semana 0-6 (domingo como 0)
console.log(fecha.getFullYear()); // devuelve el nro del año 1000 - 9999
const otraFecha = new Date(1989, 9, 12);

/* Destructuring o asignacion por destructuracion */
// definicion: extrae los elementos de un array o un objeto y
const frutas = ["manzana 🍎", "pera 🍐", "durazno 🍑", "anana 🍍"];
const persona = {
  nombre: "Carlos",
  apellido: "Baglietto",
  profesion: "Musico",
  edad: 65,
};

/* let primero = frutas[0];
let segundo = frutas[1];
let tercero = frutas[2]; */

let [primero, segundo, tercero] = frutas;
console.log(primero, segundo, tercero);
let { profesion, nombre } = persona;
console.log(profesion, nombre);

/* Spread Operator, operador de propagacion */
// definicion: lo usamos para soltar los elementos de un arr o de un obj (propaga)
const otrasFrutas = ["manzana verde 🍏", "uva 🍇", "melon 🍈", "sandia 🍉"];
const otrosDatosPersona = {
  pais: "Argentina",
  instrumentos: ["guitarra", "voz"],
};
const todasLasFrutas = [...frutas, ...otrasFrutas];
console.log(todasLasFrutas);

const personConMasDatos = {
  ...persona,
  nacionalidad: "argentino",
};

console.log(personConMasDatos);

/* Parametro rest */
// definicion: es un parametro que nos sirve para
// ejemplo:

let sumarMuchosNumero = (...numeros) => {
  let suma = numeros.reduce((a, c) => a + c);
  console.log(suma);
};

sumarMuchosNumero(1, 2, 3, 4);
