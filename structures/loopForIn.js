/*
  nos sirve para iterar sobre ennumerables, por ejemplo objetos
  Los objetos tienen propiedades que tienen algun valor.
  En cambio los arrays solo tienen items que conforman una lista

  Estructura
  for(variable in objeto){
    código
  }

*/

const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1
}

for(fruta in listaDeCompras){
    console.log(fruta);
}

for(fruta in listaDeCompras){
    console.log(`${fruta} : ${listaDeCompras[fruta]}`)
}