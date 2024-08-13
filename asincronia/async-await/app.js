// hay otra manera de trabajar codigo de manera asincrona
// Async and await

// function fetchData(){
//     fetch("https://rickandmortyapi.com/api/character")//Hace una peticion a la web api
//     .then((response)=>response.json())//Despues si esta api funciona, pide que la respuesta la pase a json
//     .then((data)=> console.log(data))//Despues cuando se convierte a json exitosamente, se pide que se transforme a datos y los imprima
//     .catch((error)=>console.log(error))//En caso de no funcionar imprime el error del porque no funciona
// }

async function  fetchData(){
    //Usar el async indica que se vuelve una promesa, ademas el async cuenta con try que es el codigo que se espera ejecutar y el catch para manejar los errores de ese codigo que se intenta ejecutar
    try{
        //El await indica cual es el codigo que espera que resuelva la promesa
        let response = await fetch("https://rickandmortyapi.com/api/character")//Se usa el fetch para hacer una peticion a la url de la web api
        //Si funciona genera una variable data, del fetch que guardo todo en response
        let data = await response.json()
        //Y si se termina de resolver devuelve la data
        console.log(data)
    }catch(error){
        //Si eso no sucede se pide que imprima el error
        console.log(error)
    }
}