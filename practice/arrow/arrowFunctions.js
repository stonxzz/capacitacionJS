/*Tranforma esta funcion a una funcion flecha:
function restar(a, b) {
  return a - b;
}
*/ 

const restar = (a,b) => a-b;
console.log(restar(5,2));

/*
    Escribe una función flecha que reciba un array de números y devuelva un nuevo array con cada número al cuadrado:
*/

const numbers = [3,2,9,4,5]

const squaredNumbers = numbers.map(number => number*number)
console.log(squaredNumbers);

/*Crea una función flecha que reciba un string y devuelva el mismo string en mayúsculas:*/
const text = "convertir a mayusculas"
const textToUpper = text => text.toUpperCase();
console.log(textToUpper(text))

/*Dada una lista de objetos que representan estudiantes, escribe una función flecha que devuelva una lista con los nombres de los estudiantes que tienen una calificación mayor a 70: */
const estudiantes = [
    { nombre: 'Juan', calificacion: 80 },
    { nombre: 'Ana', calificacion: 50 },
    { nombre: 'Pedro', calificacion: 90 },
    { nombre: 'Luis', calificacion: 60 }
  ];
  
 const aprobados = estudiantes.filter(estudiante => estudiante.calificacion > 70)
 console.log(aprobados)
  
/*Dado un arreglo de objetos que representan productos en una tienda, crea una función flecha que devuelva un arreglo con los nombres de los productos que cuestan más de $20. */
const productos = [
    { nombre: 'Camisa', precio: 25 },
    { nombre: 'Pantalones', precio: 18 },
    { nombre: 'Zapatos', precio: 30 },
    { nombre: 'Sombrero', precio: 15 }
  ];
  
const productsMoreTwenty = productos.filter(product => product.precio > 20).map(product => product.nombre)
console.log(productsMoreTwenty)

/*Escribe una función flecha que reciba un array de palabras y devuelva la palabra más larga:*/
const words = ['hola', 'solo', 'tiro', 'kangura', 'tlatelolco']
let cont = 0
let longW
const wordLong = words.reduce((accumulator, currentValue) =>{
    if(currentValue.length > accumulator.length){
        accumulator = currentValue
    }return accumulator
}, "")
console.log(wordLong)

/*Contar el número de palabras que contienen la letra 'a':
Dado un array de palabras, escribe una función flecha que devuelva cuántas de esas palabras contienen la letra 'a'.*/

const palabras = ['manzana', 'pera', 'melón', 'uva', 'sandía'];
const contarA = palabras.filter(palabra => palabra.includes("a"))
const cuantasPalabrasTienenA = contarA.length
console.log(contarA)
console.log(`Hay un total de:${contarA.length} palabras con letras a`)

/*Filtrar números pares:
Dado un array de números, escribe una función flecha que devuelva un nuevo array con solo los números pares. */
const numbersNew = [1,2,3,4,5,6,7,8,9,10]
const paresNum = numbersNew.filter(number => number % 2 === 0)
console.log(paresNum)

/*Convertir un array de strings en mayúsculas:
Dado un array de strings, escribe una función flecha que devuelva un nuevo array con todas las palabras en mayúsculas. */
const wordsLowerCase = ['jorge','mariana','yahaira','saul', 'raul']
const convertUpperCase =  wordsLowerCase.map(word => word.toUpperCase())
console.log(convertUpperCase)

/*Dado un array de palabras, escribe una función flecha que cuente cuántas de esas palabras tienen más de 5 letras.*/
const vehiclesWords = ['bicicleta', 'coche', 'avión', 'autobús', 'tren', 'motocicleta'];
const wordLessThanFiveWords = vehiclesWords.filter(vehicle => vehicle.length >5)
console.log(wordLessThanFiveWords)
console.log(`hay un total de ${wordLessThanFiveWords.length} palabras con mas de 5 caracteres`)
// Escribe tu función aquí
