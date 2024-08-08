//Funciones puras

// Side effects es cuando trabajamos con el codigo a lo largo del tiempo, acciones que hacen que nuestro codigo sea impuro
//1. Modificar variables globales
//2. modificar parametros
//3. Solicitudes HTTP
//4. Imprimir mensajes en pantalla o consolas
//5. manipulacion del DOM
//6. Obtener la hora actual

//Funciones impuras
function suma(a,b){
    console.log('A: ', a)
    return a+b;
}

let total = 0;
function sumWithSideEffect(a){
    total+=a;
    return total;
}

//Funcion pura
function square(x){
    return x*x;
}

function addTen(x){
    return x+10;
}

const number = 5;
const finalResult = addTen(square(number));

console.log(finalResult);
