// How to create an array

//1. new Array() or Array()

const fruits = Array('apple', 'banana', 'orange')
console.log(fruits);

//No se puede hacer un arreglo con un solo numero, ejemplo:
const justOneNumber = Array(1);
console.log(justOneNumber);

const number = Array(1,2,3,4,5);
console.log(number);

//2. Array literal sintax

const oneNumber = [4];
console.log(oneNumber);

//Array vacio
const emptyArray = [];
console.log(emptyArray);

const sports=['Soccer', 'tenis', 'rugby']
console.log(sports);

//Arreglo mixto
const recipeIngredients = [
    'flour', true, 2, {
        ingredient: 'Milk', quantity: '1 cup'
    }, false
]

console.log(recipeIngredients);

//Accesing array elements
const firstFruit = fruits[0];
console.log(firstFruit)
console.log(fruits[0])

//length property
const numerOfFruits = fruits.length
console.log(numerOfFruits)