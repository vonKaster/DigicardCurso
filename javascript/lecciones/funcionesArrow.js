funcion(); // Hoisting: puedo llamar la función antes de definirla, debido a que JS pone las deficiones de las funciones al principio del archivo por defecto.
// funcionFlecha(); | El Hoisting no se aplica con funciones flecha, debido a que se usa "let"

function funcion(){
    console.log("Hola desde una función normal");
}

let funcionFlecha = () =>  {console.log("Hola desde una función flecha")};

function returnObjeto() {
    return ({ firstName: "Franco", lastName: "Caminos" });
}
console.log(returnObjeto());

const arrowParametros = (num1, num2) => {
    let result = num1 + num2;
    return result;
};

console.log(arrowParametros(4, 4));

