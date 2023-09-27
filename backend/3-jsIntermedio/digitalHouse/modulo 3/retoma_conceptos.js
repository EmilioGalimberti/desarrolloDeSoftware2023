// Variables (var, let, const)
// var lo utilizamos para crear variables generales dentro del documento
var id = 1;
// let es similar a var pero tiene un scope (alcance) distinto. Var nos sirve para una variable global y let para una variable "local: (de bloque), actua dentro de un bloque u entorno.
let dni = 12345678;
// const es un espacio de memoria (variable) que indica que el dato no va a variar durante la ejecucion del programa. Tiene un scope "local" (bloque, similar al let)
const PI = 3.141592;

// Tipos de datos
// numero, string, booleano, array, objeto literal
// tipo de dato /* number */: enteros o decimales, positivos, negativos y el 0
let edad = 24;
let altura = 1.6;
let nulo = 0;

// tipo de dato /* string */: se usan para almacenar cadenas ⛓️ de caracteres. Los caracteres serian las "letras", y una cadena de caracteres seria 1 o mas "letras" Por ejemplo:
let nombre = " .-*/ÀÆé - Misael";
let nombre2 = " .-*/ÀÆé - Misael";
let nombre3 = ` .-*/ÀÆé - Misael`;

// tipo de dato /* booleano */: son estos que tiene valor (logico) true or false. Los true tienen valor 1 y los false valor 0.
let tengoHambre = true;
tengoHambre = !tengoHambre; // ahora tengoHambre es false

// tipo de dato /* array */: son collecciones datos que pueden ser de distinto tipo, que se escriben entre corchetes y que se separan cada dato por comas. Cada elemento tiene un indice, y el primer elemento siempre tiene indice 0
let paises = ["artgentina", "brasil", "uruguay"];
let edades = [28, 15, 50];
let interruptores = [true, true, false, true, false, false];

// tipo de dato /* object */: son entidades que contienen  propiedades de los mismos rtipos que fuimos viendo. Tienen atributos, metodos.. PG: son colecciones de datos, separados por comas, agrupados entre llaves. Cada cosito tiene una key y un valor. Por eso decimos que es un tipo de dato clave/valor.
let persona = {
  edad: 24,
  nombre: "Pepito",
  altura: 1.62,
  estaCasado: false,
};

// NaN, null, undefined
//tip: NaN: es un valor que noi es numerico => Not A Number
//tip: null: es una variable nula.
//tip: undefined: es una variable sin definir.
let valor = "asd" * 5;
console.log(valor); // NaN

let valor2 = null;
console.log(valor2); // null

let valor3;
console.log(valor3); // undefined

// Operadores
// Asignación (= nos sirve para asignar un valor a una variable)

// Aritméticos:
// suma (+), resta(-), mult(*), div(/), modulo(%), incremento(++), decremento(--), exponente(**)

// Comparación:
// Simple: igualdad(==) y desigualdad(!=)
// Estrictos: igualdad(===) y desigualdad(!==)
let simple = 15 == "15";
let estricta = 15 === "15";

// Lógicos:
// AND(&&), OR(||), NOT(!)

// Funciones: nos permiten modularizar el codigo
// expresadas y declaradas
function f1() {
  // declarada
  return 0;
}

let f2 = function (parametro) {
  // expresada
  return "hola";
};

// Condicionales: evaluan condiciones y en base a eso trabajan con el resultado de esa condicion.
if (5 > 6) {
  // hago lo que necesite
} else if (4 > 6) {
  // otra posibilidad
} else {
  // todo lo que va a suceder si no se cumplieron ninguna de las otras condiciones
}

// Arrays
// METODOS: push, pop, shift, unshift, lastIndexOf, indexOf, includes, join
// PROPS: length

// /* push */: agrega un elemento al final, recibe un elemento como parametro, y retorna la longitud del array despues de agregar el elemento
// /* pop */: quita el ultimo elemento, no recibe parametros y devuelve el elemento quitado
// /* indexOf */: nos indica la posicion de la primer ocurrencia del elemento que pasamos por parametro y si el elemento no se encuentra en el array retorna -1
// /* lastIndexOf */: nos indice la ultima posicion de la ocurrencia del elemento que pasamos por parametro, si no existe tal, retorna -1
// /* shift */: es como el pop pero con el primero.
// /* unshift */: es como el push pero con el primero
// /* includes */: recibe un elemento como parametro, y nos devuelve un valor booleano true si se enceutra en el array y false sui no se encuentra.
// /* join */: se utiliza para unir elementos de un array y le pasamos por parametro (string) que va a funcionar como separador. Devuelve un string con todos los elementos de array concatenados y separados por el separador.
let nombres = ["pablo", "emilio", "escobar"];
let concatenado = nombres.join("-");
console.log(concatenado);

// /* length */: es una propiedad que nos devuelve la longiutud del arreglo
