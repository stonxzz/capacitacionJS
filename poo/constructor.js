// const persona = {
//     nombre: 'jorge',
//     apellido: 'calderon'
// }

//Si ocupo crear 500, se tiene que usar una funcion constructora
// el nombre de la funcion tiene que ser el nombre de lo que va a construir y con mayusc al inicio, van las propiedades en los parametros
function Persona(nombre, apellido, edad){
    //El this hace referencia al nombre de la funcion, el otro es el que llega como parametro
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

//Generar instancias de tipo persona
const persona1 = new Persona('jorge','calderon', 21)
console.log(persona1);

const persona2 = new Persona('Diego', 'Martinez', 17)
console.log(persona2);

//GEnerar o agregar una propiedad con prototype
Persona.prototype.telefono ="555-555-5555";
//El prototipo es la copia de nuestra funcion constructora, tanto metodos y atributos que existen dentro de nuestra funcion constructora

//Cuando se quiere agregar una propiedad a una sola instancia creada y no se necesita en todas las instancias
persona1.nacionalidad = "Mexicano";
console.log(persona1);

//Agregar metodos a nuestra funcion constructora se hace igual con el protype
Persona.prototype.saludar = function(){
    //Se usa el this para llamar all atributo de la funcion constructora
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

persona1.saludar();
persona2.saludar();

