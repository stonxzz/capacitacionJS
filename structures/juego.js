const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(prompt("Adivina el numero secreto entre el 1 al 10"));

console.log(`Este es el numero con el que juegas: ${numeroJugador}`);

if(numeroJugador === numeroSecreto){
    console.log('Has ganado!!')
}else{
    console.log('Has perdido')
}
