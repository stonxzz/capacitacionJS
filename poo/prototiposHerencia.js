//Solo las clases y funciones constructoras van a generar la propiedad de prototipo, un prototipo tiene los metodos y propiedades de la clase, una instancia no genera la propiedad de prototipo
class Animal{
    constructor(nombre,tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido(){
        console.log("El animal emite un sonido");
    }
}//Molde para construir animales

//Otra clase para perro, cuando extiende de una clase, trae las propiedades de la clase padre
class Perro extends Animal{
    constructor(nombre,tipo,raza){
        //para poder sus atributos tengo que llamar al super()
        super(nombre,tipo);
        this.raza = raza;
    }
    emitirSonido(){
        console.log("El perro emite un ladrido");//Se puede reescribir el metodo para ser mas especifico
    }
    corre(){
        console.log(`${this.nombre} corre alegremente.`)//Con el super tambien podemos usar el this para los atributos de la superclase
    }
}

const perro1 = new Perro("Arturo", "Perro", "Chihuahua");
console.log(perro1);
perro1.corre();
perro1.emitirSonido();

//Generar nuevos metodos solo en una innstancia de perro 1
perro1.nuevoMetodo = function(){
    console.log("Este es un nuevo metodo");
}

//Generar nuevo metodo con el prototype de la clase, recordar que las instancias no generan la propiedad prototype
Perro.prototype.segundoMetodo = function(){
    console.log("Este es otro metodo");
}

perro1.segundoMetodo();