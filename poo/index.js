/*
    estructura de datos
    para guardar valores key/value

    objeto{
        propiedad:valor,
        propiedad:valor,
        Metodos
    }    
*/

const persona = {
    nombre: 'Jorge',
    edad: 21,
    direccion: {
        calle: 'Calle 1',
        ciudad: 'Ciudad 1',
    },
    saludar(){
        console.log(`hola, mi nombre es ${persona.nombre}`)
    }
}
