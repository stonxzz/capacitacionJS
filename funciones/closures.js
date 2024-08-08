/*
    Closure: es una funcion que tiene acceso a variables en un ambito externo, incluso despues de que esa
    funcion haya terminado de ejecutarse.

    Ambito lexico: Cada vez que se declara una funcion, crea su propio ambito lexico y puede acceder a las variables dentro
    de ese ambito y a las variables en ambitos superiores
*/

function outerFunction(){
    let outerVariable = "I am from outer function"
    function innerFunction(){
        console.log(outerVariable)// ESto es un closure que es acceder a variables que esten fuera de este ambito lexico
    }
    return innerFunction
}

const closureExample = outerFunction();
closureExample();

function createCounter(){
    let count = 0;

    return function(){
        count++;
        console.log(count)
    }
}

const counterA = createCounter();
counterA();
counterA();

const counterB = createCounter();
counterB();

function outer(){
    let message = "Hello, "

    function inner(name){
        console.log(message + name)
    }
    return inner;
}
const closureA = outer()
const closureB = outer()

closureA("Jorge")
closureB("Chito")
