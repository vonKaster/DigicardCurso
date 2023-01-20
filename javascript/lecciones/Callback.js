myFunction1(); // Hoisting
myFunction2(); // Hoisting

function myFunction1(){
    console.log("Función #1")
}

function myFunction2(){
    console.log("Función #2")
}

function myPrint(msg){ // Función callback (Es una función que se usa como parámetro de otra función, y se utiliza dentro de su estructura)
    console.log(msg);
}

function add(num1, num2, callback) {
    let res = num1 + num2;
    callback(`Resultado: ${res}`); // Se usa la función callback
}

add(4, 8, myPrint);

// Llamadas asíncronas con setTimeout

function myFunctionCallback(){
    console.log("Saludo asíncrono despues de 5 segundos")
}

setTimeout(myFunctionCallback, 5000); // tiempo en milisegundos
setTimeout(function(){console.log("Saludo asíncrono despues de 10 segundos")}, 10000);

let reloj = () => {
    let date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}

setInterval(reloj, 1000); // setInterval ejecuta la función una vez cada el tiempo que le asignes