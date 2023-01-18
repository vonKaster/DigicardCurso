var x; // Indenifido
console.log(x, typeof(x));

var y = null;
console.log(y, typeof(y));

var Juan = "Juan"; //String

var JuanVacio = "";
console.log(JuanVacio, typeof(JuanVacio))

console.log(Juan, typeof(Juan));

Juan = 1; // Cambia su tipo de String a numérico [int]

console.log(Juan, typeof(Juan));

var numero = 1000; // Numérico

var objeto = { // Objeto

    firstName: "Franco",
    lastName: "Caminos",
    age: "19"

}

var messiLevantoLaCopa = true; // Booleano
console.log(messiLevantoLaCopa, typeof(messiLevantoLaCopa))

function Messi(){ // Función
    
    const Campeon = true; // Constante, no puede modificar su valor a lo largo del programa
    let Fachero = "Efectivamente"; // let = Variable Local

} 
console.log(Messi, typeof(Messi))

var simbolo = Symbol("Mi simbolo"); // Simbolo
console.log(simbolo);

class Persona {

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

}
console.log(Persona, typeof(Persona));

var lenguajes = ["JavaScript", "Python", "GoLang", "LUA", "PHP"]; // Array
console.log(lenguajes, typeof(lenguajes))

var firstName = "Franco";
var lastName = "Caminos";
var fullName = firstName + " " + lastName; // Concatenación != Suma
console.log(fullName);
 
var letrasNumeros = firstName + 2 + 2; 
console.log(letrasNumeros);

letrasNumeros = firstName + (2 + 2); // Toma como prioridar el paréntesis
console.log(letrasNumeros);

letrasNumeros = 2 + 8 + firstName; // Suma de izquierda a derecha
console.log(letrasNumeros);

