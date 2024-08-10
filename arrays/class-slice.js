// crea una copia  del Array  de una porcion que se indique,  cuando se indica la posicion final como en el ejemplo se puso
//4 el metodo le resta 1

const animals = ['hormiga', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2))
console.log(animals.slice(2,4))
console.log(animals.slice(1,5))

//Slice nos permite usar indices negativos, ya que si tenemos arreglos muy largos los resta desde el ultimo indice
console.log(animals.slice(-2))
console.log(animals.slice(2,-1))

console.log(animals.slice())