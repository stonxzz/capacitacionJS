//1. copia un arreglo

const originalArray = [1,2,3,4,5]
const copiedArray = [...originalArray]

//Estaas copias son para no mutar el original y hacer pruebas sin dañarlo
console.log(originalArray)
console.log(copiedArray)

//2. tambien sirve para convinar arrays
const array1 = [1,2,3]
const array2 = [4,5,6]
const combinedArray = [...array1,...array2]

console.log(array1)
console.log(array2)
console.log(combinedArray)

//3.  tambien se pueden copiar arreglos y agregar elementos adicionales
const baseArray = [1,2,3]
const arrayWithAdditionalElements = [...baseArray,4,5,6]

console.log(baseArray)
console.log(arrayWithAdditionalElements)

//4. tambien se pueden pasar elementos a una funcion
function sum(a,b,c){
    return a+b+c
}
const number = [1,2,3]
const result = sum(...number)
console.log(result)