class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    
    saludar(){
        console.log(`hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }
}//Esto es un molde para instanciar personas

//Creacion de instancias de la clase persona
const persona1 = new Persona("Jorge", 21);
persona1.saludar();