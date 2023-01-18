let y = 10; // Valor primitivo, no tiene métodos
console.log(y.lenght);

let persona = { // Defino un objeto
    firstName: "Franco",
    lastName: "Caminos",
    email: "fcaminos@digicard.net",
    age: 19,
    idiom: "es",
    // fullName: function() | al usar "get" simplifico la manera de llamarlo, pasando de "persona.fullName()" a simplemente "persona.fullName"
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    get language() {
        return this.idiom.toUpperCase(); // Obtengo idiom y lo transformo a mayúsculas
    },
    set language(language) {
        this.idiom = language.toUpperCase(); // Le asigno a "idiom" el valor de mi setter "language" para que al llamarlo y darle valor, este se lo asigne a idiom.
    } 

}

console.log(persona.firstName); // Metodos del objeto
console.log(persona["firstName"]); // Opción alternativa para acceder a un valor del objeto
console.log(persona.lastName);
console.log(persona.email);
console.log(persona.age);
console.log(persona.fullName);
console.log(persona.language);
persona.language = "en"; // Uso mi setter y cambio el valor
console.log(persona.language);

function Persona(firstName, lastName, email, age, idiom){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.idiom = idiom;
}

let lionelMessi = new Persona("Lionel", "Messi", "messi@gmail.com", 35, "es");
console.log(lionelMessi);

for(nombrePropiedad in persona){

    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);

}

let personaArray = Object.values(persona); // Convertir en array las propiedades del objeto
console.log(personaArray, typeof(personaArray));

let personaString = JSON.stringify(persona); // Convertir en String las propiedades del objeto
console.log(personaString, typeof(personaString));


let persona2 = new Object(); // Crea un nuevo objeto y asigna memoria para el mismo
persona2.nombre = "Franco";
persona2.direccion = "Avenida Siempreviva 742"

delete persona2.direccion; // Borrar propiedad de un objeto
console.log(persona2);

