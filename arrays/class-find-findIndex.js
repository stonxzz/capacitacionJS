//Inmutability

//find(), devuelve el primer elemento del array que cumpla con la funcion especificada

const multipleOfFiver = [5,10,15,20]
const firstNumberGreaterThanTen = multipleOfFiver.find(number => number>10)

console.log(multipleOfFiver)
console.log(firstNumberGreaterThanTen)

//findIndex(), toma el Array y devuelve el primer indice que encuentre que cumpla la condicion, si no encuentra ninguna devuelve -1

const randomNumbers = [6,14,27,56,40]
const indexNumber = randomNumbers.findIndex(number => number>50)

console.log(randomNumbers)
console.log(indexNumber)