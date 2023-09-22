// TIEMPO: 20 minutos

/* 1- Crear una funcion que tome un array de number y retorne otro 
array de number con solo aquellos que son pares */

var numeros = [2,4,5,7]
let numerosPares = [2,4,5,7].filter(number => number %2==0 );
console.log(numerosPares)
//todo: solamente usar funcion flecha
//todo: usar metodos de array

/* 2- Crear una funcion que tome un array de number como primer parametro y un number como segundo, 
que devuelva el numero de veces que ese number se repite dentro del array o -1 si no se encuentra */

numeroEncontrado([2,4,5,7,2], 2)
function numeroEncontrado(array, numero){
    let numeroFiltrado = array.filter((arr) => arr = numero)
    console.log(numeroFiltrado.length)
  }

/* 3- Crear una funcion que tome un array de string y que retorne un string con cada elemento del array concatenado por el caracter '_' */

function caracter(cadena){
    let cadenaCaracter = cadena.reduce(function(acum, l){
        return acum = acum + '_' + l
    })
    return cadenaCaracter
}



/* 4- Crear una funcion que tome un numero desconocido de parametros, todos numbers y que retorne la suma de los mismos */

const sumar = (...numeros) =>{
    return numeros.reduce((acumulador, valor) => acumulador + valor)
}

console.log(sumar(1,2,5,8));