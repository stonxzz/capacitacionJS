//Methods that iterate over an array
// Methods that DO NOT modify the original Array (Inmutability).

//Map()

const numbers = [1,2,3,4,5]
const squaredNumbers = numbers.map(num => num*num)

console.log(numbers);
console.log(squaredNumbers);

//foreach itera y realiza una funcion al elemento pero no crea un nuevo Array
const colors = ['red' , 'blue', 'pink'];
const iteratedColors = colors.forEach(color=>console.log(color))

console.log(colors);
console.log(iteratedColors);

//Exercise: Farenheit to Celsius Conversion using Map()

const temperaturesInFarenheit = [21,68,95,104,212]
const temperaturesInCelsius = temperaturesInFarenheit.map(temperatures => (5/9) * (temperatures-32));

console.log(`Temperatures in F: ${temperaturesInFarenheit}`);
console.log(`Temperatures in C: ${temperaturesInCelsius}`);

//Exercise: Sum of elements in an Array
const newNumbers = [1,2,3,4,5,6,7];
let sum = 0;

newNumbers.forEach(number=>{
    sum += number;
})

console.log(`Array of numbers: ${newNumbers}`);
console.log(`La suma de los numeros del Array es: ${sum}`);

