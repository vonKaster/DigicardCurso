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

function Persona(firstName, lastName, email, age, idiom){ // Función constructor
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.idiom = idiom;
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
}

let lionelMessi = new Persona("Lionel", "Messi", "messi@gmail.com", 35, "es");
console.log(lionelMessi);
console.log(lionelMessi.fullName());

Persona.prototype.tel; // Agregar una propiedad global para todos los objetos tipo "Persona"

for(nombrePropiedad in persona){

    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);

}

let personaArray = Object.values(persona); // Convertir en array las propiedades del objeto
console.log(personaArray, typeof(personaArray));

let personaString = JSON.stringify(persona); // Convertir en String las propiedades del objeto
console.log(personaString, typeof(personaString));

let persona2 = {
    firstName: "Daniel",
    lastName: "Macchiavello",
    fullName: function(job, address){
        return this.firstName + " " + this.lastName + " " + job + " " + address;
    }

    }

let persona3 = new Object(); // Crea un nuevo objeto y asigna memoria para el mismo
persona3.firstName = "Cecilia";
persona3.lastName = "Dragonetti";
persona3.address = "Avenida Siempreviva 742";
console.log(persona3);
console.log(persona2.fullName.call(persona3, "Programmer", "Avenida Illia 2942")); // Utilizo el método "fullName" no existente en "persona3", llamándolo con call desde "persona2"

let array = ["Programmer", "Av Olazabal 2294"]
console.log(persona2.fullName.apply(persona3, array)); // Paso los argumentos como un array para que funcione el método "Apply"

delete persona2.address; // Borrar propiedad de un objeto
console.log(persona3);

