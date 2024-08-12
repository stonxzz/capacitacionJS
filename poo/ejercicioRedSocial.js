/*
    Requerimientos 
    1,. el usuario debe poder ingresar su usuario y contraseña
    2. el sistema debe verificar si el usuario y contraseña existen en la db
    3. si el usuario y contraseña son correctos, el sistema debe mostrar el timeline del usuario
    4. si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline
*/

const userDatabase = [
    {
        username: 'stonxz',
        password: 'elotes',
    },
    {
        username: 'pablo',
        password: 'gamerPablo',
    },
    {
        username: 'juan',
        password: 'juanito',
    }
]

const userTimeLine = [
    {
        username: 'stonxz',
        timeline: 'Me encanta JavaScript!',
    },
    {
        username: 'pablo',
        timeline: 'Me encanta jugar videojuegos',
    },
    {
        username: 'juan',
        timeline: 'Me encanta leer libros',
    }
]

//Asigno las variables donde se guardaran los datos del usuario que ingresa desde teclado
let nombre = prompt('Ingresa tu usuario')
let contraseña = prompt('ingresa tu contraseña')

//Creo una arrowfunction que recibe como parametros el usuario y contraseña 
const loginUser = (nombre,contraseña) =>{
    //con el metodo find recorro la db que es como un foreach como todos los metodos para Array, para ver si el usuario del objeto actual es igual al que ingreso el usuario
const findIndex = userDatabase.find(usuario => usuario.username === nombre)
//Si la variable donde busca si existe el usuario es diferente de nula, es decir que si existia realiza el metodo, de lo contrario hay un else que dice usuario no encontrado
if(findIndex != null){
    //Despues lo que nos devolvio find index compara las password si es igual a la del usuario en caso de que si realiza una accion, de lo contrario dice contraseña incorrecta
if (findIndex.password == contraseña) {
    //Mando a llamar la funcion para mostrar la timeline del usuario
    const showTimeLine = (nombre) => {
        const findUser = userTimeLine.find(user => user.username === nombre)
        window.alert(`${findUser.username} dice: ${findUser.timeline}`)
    }
    showTimeLine(nombre)
} else {
    window.alert('contraseña incorrecta');
}
} else {
    window.alert('usuario no encontrado');
}
}
//Mando a llamar la funcion usando el metodo y enviando los parametros que ingreso el usuario
loginUser(nombre,contraseña)

// function showTimeLine(nombre){
//     const findUser = userTimeLine.find(user => user.username === nombre)
//     window.alert(`${findUser.username} dice: findUser.timeline`)
// }