const canasta = {
    nombre: "Manzana",
    peso: 1,
    precio: 120,
    describirProducto: function(){
        console.log(`Compre ${this.peso} de ${this.nombre} a un precio de ${this.precio}`)
    }
}

const canasta2 = {
    nombre: "Uvas",
    peso: 3,
    precio: 240,
    
}

const metodoLlamar = canasta.describirProducto;
metodoLlamar.call(canasta2);