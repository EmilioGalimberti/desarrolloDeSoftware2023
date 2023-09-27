// TIEMPO: 25 minutos

const modelo = {
  palabras: 0,
  cortas: 0,
  medias: 0,
  largas: 0
}

/* 1- Crear una funcion flecha que tome un numero desconocido de parametros, todos string, y que retorne un objeto que respete el modelo anterior. El objeto debera contener el numero de 
"palabras" totales, el numero de palabras "cortas", "medias" y "largas" */



let obj=(...array)=>{
  let cortas=0;
  let palabras=0;
  let medias=0;
  let largas=0;
  array.forEach(element => {
      palabras=palabras+1;
      if(element.length>=1&&element.length<=3){
        cortas+=1
      }
      if(element.length>=4&&element.length<=6){
        medias+=1
      }
      if(element.length>=7){
        largas+=1
      }
    }
  )
    
    const modelo = new Object();
    modelo.palabras = palabras;
    modelo.cortas = cortas;
    modelo.medias = medias;
    modelo.largas = largas;
    return modelo
}

console.log(obj("Hola","hgh","holaaaaaaaaa","holaa"))


//tip: palabras cortas tienen de 1 a 3 caracteres
//tip: palabras cortas tienen d 4 a 6 ecaracteres
//tip: palabras cortas tienen 7 o mas caracteres

/* 2- Crear una funcion flecha que tome un number X como primer param y un string como segundo, devolver un string con la palabra q se paso como param repetida X veces. Realizar validaciones */

const repetir = (n, palabra) => { 
  let acum = ''
  if(n>0){
    for (let index = 0; index < n; index++) {
      acum += palabra
    }
  }
  else{
    console.log('ERROR: el primer parametro debe ser un numero positivo')
  }
  console.log(acum)
}

repetir(2, "hace") // => "hacehace"
repetir(0, "mucho") // => ""
repetir(5, "calor") // => "calorcalorcalorcalorcalor"
repetir(-1, "calor") // => "ERROR: el primer parametro tiene que ser un numero positivo"
repetir("2", "calor") // => "ERROR: el primer parametro tiene que ser un numero positivo"
repetir(7, 5) // => 5555555

const persona = {
  edad: 31,
  nombres: ["Luis", "Alberto"],
  apellidos: ["Spinetta"],
  profesion: "músico",
  nacimiento: "1950-01-23T03:00:00.000Z"
}

/* 3- Crear una funcion flecha que tome cuatro parametros, number, array de string, array de string, sting y Date. La funcion deve crear un objeto que respete el formato anterior y retornar dicho objeto. Realizar validaciones de tipo para cada parametro */

const crearObj = (a, b, c, d, e) =>{

  
  persona.edad = typeof a == 'number' ? a : 'No es un numero'
  persona.nombre = typeof b == 'object' ? b : 'No es un array'
  persona.apellido = typeof c == 'object' ? c : 'No es un array'
  persona.profesion = typeof d == 'string' ? d : 'No es un string'
  persona.nacimiento = typeof d == 'string' ? new Date(e) : '0'

  return persona
}

console.log(crearObj(persona))