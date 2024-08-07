let expresion = 'Uvas';

switch(expresion){
    case 'Naranjas':
        console.log('Las naranjas cuestan $20 el kg');
        break;
    case 'Manzanas':
        console.log('Las manzanas cuestan $43 el kg');
        break;
    case 'Platanos':
    console.log('El platano cuesta $30 el kg');
    break;
    case 'Mangos':
    case 'Papayas':
        console.log('Los mangos y las papayas cuestan $25 el kg');
        break;
    default:
        console.log(`Lo sentimos, no contamos con ${expresion}`);
        break;
}

console.log('¿Hay algo mas que desees?');