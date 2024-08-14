// Promesas en JavaScript:
// Ejercicio 1: Simulación de Carga de Datos
// Crea una función llamada cargarDatos que simule la carga de datos desde un servidor. 
// La función debe devolver una promesa que se resuelve después de 2 segundos con un mensaje que diga 
// "Datos cargados correctamente".

const cargarDatos = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let operationSuccesfull = true
        if(operationSuccesfull){
            resolve('Datos cargados correctamente')
        }else{
            reject('Fallo la operación')
        }
    },2000)
})

cargarDatos.then(succesMessage=>{
    console.log(succesMessage)
}).catch(error=>{
    console.log(error)
})

// Ejercicio 2: Manejo de Errores
// Modifica la función anterior para que tenga un 50% de probabilidad de fallar. 
//Si falla, la promesa debe ser rechazada con un mensaje que diga "Error al cargar los datos".


// 2. Async y Await:
// Ejercicio 3: Uso de async/await
// Crea una función procesarDatos que utilice async/await para llamar a la función cargarDatos 
//y maneje el resultado y posibles errores.

async function procesarDatos(){
    try{
        const resultado = await cargarDatos()
        console.log(resultado)
    }catch(error){
        console.log(error)
    }
}

// Ejercicio 4: Múltiples Promesas
// Crea dos funciones cargarUsuarios y cargarPosts, ambas simulando la carga de datos con promesas 
// que tardan 2 segundos cada una. Usa async/await
//  para esperar a que ambas funciones terminen y luego muestra un mensaje que diga "Usuarios y Posts cargados".

const cargarUsuarios = new Promise((resolve, reject)=>{
    setTimeout(()=>{
    let cargado = true
    if(cargado){
        resolve('Se cargo el usuario correctamente')
    }else{
        reject('error al cargar usuario')
    }
    },2000)
})

const cargarPosts = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let done = true
        if(done){
            resolve('posts cargado correctamente')
        }else{
            reject('error al cargar el post')
        }
    },2000)
})

async function donePosts(){
    try{
        const usuario = await cargarUsuarios
        console.log(usuario)
        const posts  = await cargarPosts
        console.log(posts)

        console.log('Usuarios y Posts cargados')
    }catch(error){
        console.log(error)
    }
}

donePosts()

// 3. For await of:
// Ejercicio 5: Iterar sobre Promesas
// Crea un array de promesas, cada una simulando la carga de datos 
// (como en el primer ejercicio). Usa for await of para esperar cada promesa y mostrar el resultado.

const promesas = [
    cargarUsuarioss = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let user = true
            if(user){
                resolve('Usuario cargado con exito')
            }else{
                reject('Error al cargar el usuario')
            }
        },2000)
    }),
    cargarDatoss = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let datos = true
            if(datos){
                resolve('Datos cargado con exito')
            }else{
                reject('Error al cargar los datos')
            }
        })
    }), 
    cargarPostss = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let posts = true
            if(posts){
                resolve('Posts cargados con exito')
            }else{
                reject('Error al cargar los posts')
            }
        })
    })
]

async function finalProme(){
    try{
        for await(promesa of promesas){
            let response = await promesa
            console.log(response)
        }
    }catch(error){
        console.log(error)
    }
}

