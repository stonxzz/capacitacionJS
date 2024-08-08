const num1 = 22;
const num2 = 2;

function calcularNumeroMayor(num1,num2){
    if(num1>num2){
        console.log(`El numero ${num1} es el mayor`)
    }else if (num2>num1){
        console.log(`El numero ${num2} es el mayor`)
    }else{
        console.log(`Los numeros son iguales`)
    }
}

calcularNumeroMayor(num1,num2);