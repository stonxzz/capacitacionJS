// Las promesas son las que hacen que nuestro codigo pase de ser sincrono a asincrono
//Tienen 3 estados las promesas
// Promise()
// pending
// fullfilled
// Rejected

//Manejan 2 tipos de callback
// resolve
// reject

//Hay 2 metodos importantes en las promesas
// then()//Se ejecuta una vez que la promesa se resuleve
// catch()//Obtener el error que nos dice por que no se a resuelto

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {//El set time out sirve para dar un tiempo para resolver cuando se manda a llamar la api
        //Simular como si llamaramos el metodo  de una api
        let operationSuccesfull = true;
        if (operationSuccesfull) {
            resolve("La operacion fue exitosa")
        } else {
            reject("Fallo la operación")
        }
    }, 2000) //Se indica que el tiempo de resolución es de 2 segundos 
})

promise.then(succesMessage=>{
    console.log(succesMessage)//Ejecuta la promesa si se resolvio exitosamente, trae el resolve, en este caso lo guarde en el parametro y lo imprimi
}).catch((errorMessage)=>{//Ahora, si no se resuelve, se coloca un catch que mande el reject para mostrar el error
    console.log(errorMessage)
})