const persona = {
    nombre:  "Jorge",
    edad: 21,
    saludar: function(){
    console.log(`Hola ${this.nombre} tienes ${this.edad} años.`)
}
}
persona.saludar();