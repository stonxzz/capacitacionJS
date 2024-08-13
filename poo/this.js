/*
    this es una palabra reservada que se usa al trabajar con clases, hace referencia al objeto o la clase que se este construyendo
    nos permite hacer referencia a los valores del metodo cuando se esta construyendo un objeto, ejemplo:
*/
class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;//El this hace referencia al objeto, es decir que this.propiedad se refiere a la propiedad del objeto, para el momento en el que se instancie un objeto inyectemos los parametros a la propiedad del objeto
        this.edad = edad;
    }
}

const persona1 = new Persona("Jorge", 21);
console.log(persona1);

persona1.nuevoMetodo = function(){
    console.log(`Mi nombre es ${this.nombre}`);//aqui se vuelve a usar el this por que hace referencia a las instancia persona1, entonces traemos  su nombre.
}

persona1.nuevoMetodo();