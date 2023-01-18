 // let lenguajes = ["JavaScript", "Python", "GoLang", "LUA", "PHP"]; [deprecated]
const lenguajes = ["JavaScript", "Python", "GoLang", "LUA", "PHP"];
console.log(lenguajes);

for(let i = 0; i < lenguajes.length; i++){ // Recorrer Array
    console.log(lenguajes[i]);
}

lenguajes.push("Ruby"); // Agregar elemento
console.log(lenguajes);

let esUnArray = Array.isArray((lenguajes));
console.log(esUnArray);
