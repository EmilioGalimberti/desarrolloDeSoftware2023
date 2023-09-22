let doble = (numero) => numero*2;
let triple = (numero) => numero*3;
let aplicarCallback = (numero, callback) => callback(numero)

/*
function aplicarCallback(numero, callback) {
    return callback(numero)
}
*/
// console.log(aplicarCallback(2, doble))

let suma = (numero1, numero2) => numero1 + numero2
let resta = (numero1, numero2) => numero1 - numero2
let multiplicacion = (numero1, numero2) => numero1 * numero2
let division = (numero1, numero2) => numero1 / numero2
let calculadora = (numero1, numero2, callback) => callback(numero1, numero2)

// console.log(calculadora(2, 2, division))

function agregarHttp(url) {
    return  'http://' + url
}

function procesar(array, callback){
    let element  = []
    for (let index = 0; index < array.length; index++) {
        element.push(callback(array[index])) 
    }
    return element
}

console.log(procesar(['holas', 'buneas'], agregarHttp))