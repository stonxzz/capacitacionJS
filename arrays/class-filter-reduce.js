//Son metodos para iterar sobre un Array
// Estos metodos no modifican el Array original(Inmutability).

// filter()

const numbers = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = numbers.filter(number => number % 2 === 0)

console.log(numbers);
console.log(evenNumbers);

//reduce(), caso 1 suma los numeros para reducirlos a solo 1

const numberReduce = [1,,2,3,4,5]
const sum = numberReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0) 

console.log(numberReduce);
console.log(sum);

//reduce(), caso 2 contar cuantas veces aparece una palabra
const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']

const wordFrecuency = words.reduce((accumulator, currentValue) =>{
    if(accumulator[currentValue]){
        accumulator[currentValue]++
    }else{
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})

console.log(wordFrecuency)


