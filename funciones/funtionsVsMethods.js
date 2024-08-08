// Capacidades que tienen las funciones al igual que otros objetos

//1. Pasar funciones como argumentos -> callback
/*
function a(){

};
function b(){

};
b(a);

//retornar funciones
function a(){
    function b(){

    }
    return b;
}

//Asignar funciones a variables -> Expresión de funcion
const a = function(){}

// Tener propiedades y metodos
function a(){}
const obj = {}
a.call(obj)

//Anidar funciones -> Nested Functions
function a(){
    function b(){
        function c(){

        }
        c()
    }b()
}
a();
*/
//Es posbile almacenar funciones en objetos
const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage(){
        console.log('adioooooooooos');       
    }
}

rocket.launchMessage();