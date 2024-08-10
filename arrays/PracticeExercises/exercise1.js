/* Dado un array de números, utiliza reduce para calcular la suma total de todos los números en el array.*/
const numeros =[10,20,30,40,50]
const suma = numeros.reduce((accumulator, currentValue) =>{
    accumulator+= currentValue
    return accumulator
}, 0)
console.log(suma)

/*Ejercicio 2: Concatenar Strings
Dado un array de strings, utiliza reduce para concatenar todos los strings en una sola cadena de texto. */
const palabras = ['Hola', 'este', 'es', 'un', 'ejemplo'];
const palabrasConcatenadas = palabras.reduce((accumulator, currentValue) => {
    accumulator += currentValue
    return accumulator
}, "")
console.log(palabrasConcatenadas)

/*Ejercicio 3: Calcular la Edad Promedio
Dado un array de objetos que representan personas con su nombre y edad, utiliza reduce para calcular la edad promedio. */
const personas = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Luis', edad: 35 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Juan', edad: 20 }
  ];
  
const calculateProm = personas.reduce((accumulator, currentValue) =>{
    accumulator += currentValue.edad
    return accumulator
},0)
console.log(calculateProm/personas.length)  

/*Ejercicio 4: Contar la Frecuencia de Palabras
Dado un array de palabras, utiliza reduce para contar cuántas veces aparece cada palabra en el array. */
const words = ['hola', 'hola','hola','toscano','toscano','sandia']
const wordFrecuency = words.reduce((accumulator, currentValue) => {
    if(accumulator[currentValue]){
        accumulator[currentValue]++
    }else{
        accumulator[currentValue]=1
    }return accumulator
},{})
console.log(wordFrecuency)
/* Ejercicio 5: Encontrar el Número Máximo
Dado un array de números, utiliza reduce para encontrar el número más grande en el array. */
const numerosS = [10, 5, 8, 12, 3, 20];
const bigNumber = numerosS.reduce((accumulator, numero) =>{
    if(numero>accumulator){
        accumulator = numero
    }return accumulator
},0)
console.log(bigNumber)

//filter exercices
/*Filtrar Números Pares:
Dado un array de números, filtra solo los números que son pares. */
const numerosNew = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const onlyPair = numerosNew.filter(number => number %2===0)

console.log(onlyPair)

/*Filtrar Palabras Cortas:
Dado un array de palabras, filtra aquellas palabras que tienen menos de 5 caracteres.*/
const palabrasNew = ['mesa', 'silla', 'computadora', 'ratón', 'teclado'];
const wordsLessFive = palabrasNew.filter(word => word.length<=5)

console.log(wordsLessFive)

/* Ejercicios de map:
Multiplicar Números por 10:
Dado un array de números, multiplica cada número por 10.*/
const numerosMult = [1, 2, 3, 4, 5];
const numberTen = numerosMult.map(number => number*10)
console.log(numberTen)

/*Convertir a Mayúsculas:
Dado un array de palabras, convierte todas las palabras a mayúsculas. */
const palabrasLower = ['hola', 'mundo', 'javascript', 'es', 'genial'];
const upperWords = palabrasLower.map(word => word.toUpperCase())
console.log(upperWords)

/*Ejercicios de find
Encontrar el Primer Número Mayor que 10:
Dado un array de números, encuentra el primer número que sea mayor que 10. */
const numeross = [4, 9, 16, 2, 25, 8];
const findNumber = numeross.find(numero => numero>10)
console.log(findNumber)

/*Encontrar el Primer Nombre que Comienza con 'J':
Dado un array de nombres, encuentra el primer nombre que comience con la letra 'J'. */
const nombress = ['Ana', 'Juan', 'María', 'Jorge', 'Lucas'];
const findName = nombress.find(nombre => nombre.includes('J'))
console.log(findName)

//EJERCICIOS DE FIND INDEX
/*Encontrar el Índice del Primer Número Mayor que 5:
Dado un array de números, encuentra el índice del primer número mayor que 5. */
const numerosA = [1, 3, 7, 2, 9];
const findNumberr = numerosA.findIndex(number => number>5)
console.log(findNumberr)

/*Encontrar el Índice del Primer Nombre con Más de 4 Letras:
Dado un array de nombres, encuentra el índice del primer nombre que tenga más de 4 letras. */
const nombreso = ['Ana', 'Eva', 'Luis', 'Roberto', 'Sofía'];
const newNamess = nombreso.findIndex(name => name.length > 4)
console.log(newNamess)

//EJERCICIOS DE SLICE
/*Obtener los Primeros 3 Elementos:
Dado un array de números, usa slice para obtener los primeros 3 elementos. */
const numeroos = [5, 10, 15, 20, 25];
const sliNumber = numeroos.slice(0,3)
console.log(sliNumber)

/*Obtener los Últimos 2 Elementos:
Dado un array de palabras, usa slice para obtener los últimos 2 elementos. */
const palabraas = ['inicio', 'medio', 'final', 'postfinal'];
const lastTwoWords = palabraas.slice(-2)
console.log(lastTwoWords)

//EJERCICIOS SPREAD OPERATOR
/* Combinar Dos Arrays:
Dado dos arrays, combínalos en uno solo usando el spread operator.*/
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arraysConcatenados = [...array1,...array2]
console.log(arraysConcatenados)

/*Crear un Nuevo Array con Elementos Añadidos:
Dado un array de números, crea un nuevo array que tenga los mismos números más el número 10 al final, usando el spread operator. */
const nnumeros = [4, 7, 1, 9];
const arrayMoreTen = [...nnumeros,10]
console.log(arrayMoreTen)
