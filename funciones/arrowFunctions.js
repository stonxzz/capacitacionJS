//Clasico
const greeting = function(name){
    return `Hi, ${nombre}`
}

//Arrow function - explicit return

const newGreeting = (name)=>{
    return `hi, ${nombre}`
}

//Arrow function - Implicit return

const newGreetingImplicit = (name)=>`hi, ${nombre}`

//Lexical binding

const finctionalCharacter ={
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function(message){
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message)=>{
        console.log(`${this.name} says: ${message}`)
    }
}
finctionalCharacter.messageWithTraditionalFunction(`hola mijo`);
finctionalCharacter.messageWithArrowFunction(`como estas?`);