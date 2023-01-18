function Suma(num1, num2){ // Declaro la función
    console.log("Suma: " + (num1 + num2))
}

Suma(2, 2); // Llamo a la función pasandole sus respectivos parámetros
console.log(typeof(Resta)); 

function Resta(num1, num2){ 
    let resultado = num1 - num2;
    return resultado; // devuelvo "resultado"
}

let resultado = Resta(10, 5); 
console.log(resultado);

let Sumar = function (num1, num2){return num1 + num2}; // Declaro función de tipo expresión
resultado = Sumar(3, 7);
console.log(resultado);
 
(function (num1, num2) { // Función Self Invoking (se define de forma anónima y solo puede invocarse una vez)
    console.log("La suma es :" + (num1 + num2));
})(4,4); // Invoco la función

let funcionString = Sumar.toString(); // Paso a String la función
console.log(funcionString);

const sumarArrow = (num1, num2) => num1 + num2; // Funcion flecha, función escrita en una sola línea (no es necesario escribir ni "function" ni "return")
console.log("La suma de 4 + 2 es: " + sumarArrow(4, 2));

function sumarTodoConArgumentos(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){ // Obtengo la cantidad de argumentos con .length
    suma += arguments[i];
    }
    return suma;
}

console.log("El resultado es: " + sumarTodoConArgumentos(4, 6, 254, 521, 999)); 

const persona = {

    firstName: "Franco",
    lastName: "Caminos"

}

function cambiarValorObjeto(p){

    p.firstName = "Daniel",
    p.lastName = "Macchiavello"

}

cambiarValorObjeto(persona);
console.log(persona);
