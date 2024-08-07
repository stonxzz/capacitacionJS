/*

    estructura 
    do{
        código
    } while (conndición)

    la diferencia con el while es que sin importar la condicion se ejecuta al menos una vez el codigo y despues se rompe si no se cumple la condición

*/

let contador = 0;

do{
    console.log(contador);
    contador++;

}while(contador<10);