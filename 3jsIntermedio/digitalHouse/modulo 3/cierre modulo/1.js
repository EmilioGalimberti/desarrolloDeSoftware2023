const  autos = require('./autos')

let concesionaria = {
   autos: autos,
 
 buscarAuto: function(filtro){
    for (let index = 0; index < autos.length; index++) {
        console.log(autos[index])
        console.log('a')
        
        if (autos[index].patente == filtro){
            console.log(autos[index])
            return autos[index]
        }   
        else{return null}  
    }
   },

   venderAuto: function(filtro){
   let autoEncotrado = this.buscarAuto(filtro)
   console.log(autoEncotrado)
    if(autoEncotrado != null ){
        autoEncotrado.vendido = true
        return autoEncotrado
    }
    else return null
    },


    autosParaLaVenta: function(){
        let filtrado = autos.filter(({vendido}) => vendido == false)
        return filtrado
    },


    autosNuevos: function(){
        let filtrado = this.autosParaLaVenta()
        let auto0km = filtrado.filter(({km}) => km == 0)
        return auto0km
     }

}
console.log('Autos nuevos')
console.log(concesionaria.autosNuevos())
console.log('vender auto')
console.log(concesionaria.venderAuto('APL1'))
console.log('autos nuevos sin vender')
console.log(concesionaria.autosNuevos())