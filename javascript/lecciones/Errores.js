'use strict'

// Try - Catch - Finally

try { // Se intenta ejecutar la siguiente secuencua
    //saludo = "hola"; // linea con error
    let saludo = "hola"; // linea sin error
    console.log(saludo)
} catch(error){ // En caso de dar error, catch lo recibe y se pasa como parámetro, en este caso "error"
    console.log(error); // printeo el error
} finally {
    console.log("Fin de la cacería de errores c:") // Se ejecuta de todas maneras, pase lo que pase en el try/catch.
}

let number = -2;

try{
    if(isNaN(number)) throw "No es un número"; // con throw podes personalizar errores, y se pasa esa información al catch
    else if(number < 0) throw "es un número negativo";
} catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}


