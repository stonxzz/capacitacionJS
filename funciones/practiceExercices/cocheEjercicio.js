const coche = {
    marca: "Nissan",
    modelo: "X-trail",
    precio: 500000,
    presentarCoche: function(){
        console.log(`La marca del auto es ${this.marca}, el modelo es ${this.modelo} y lo puedes comprar a un precio de: $${this.precio}`)
    }
}

coche.presentarCoche();