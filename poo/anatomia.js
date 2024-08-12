/*
    Estructura de datos

    objeto{
        propiedad:valor,
        propiedad:valor,

        Metodos()
    }
*/

const persona = {
    nombre: 'Juan',
    edad: 30,
    direccion: {
        calle: 'Calle 123',
        ciudad: 'Ciudad 1',
    },
    saludar(){
        console.log(`Hola mi nombre es: ${persona.nombre}`);
    }
}
console.log(persona);
persona.saludar();

//Agregar proipiedades.
persona.telefono = '555-555-55-55';
console.log(persona.telefono);

//Agregar metodos
persona.despedir = () =>{
    console.log(`Adios ${persona.nombre}`);
}

persona.despedir();

//Borrar propiedades y metodos
delete persona.telefono;

delete persona.despedir;