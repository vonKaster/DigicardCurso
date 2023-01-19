// No se puede crear un objeto antes de declarar su respectiva clase, no se aplica el concepto de "Hoisting" (el cual si se aplica en las Funciones)
// let persona3 = new Persona("Carlos", "Tevez");

class Persona { // Creo mi clase padre | "extends Object" es el extend por default de todas las clases (a menos que se especifique otra)
    
    static contadorPersonas = 0;
    default = "texto default";

    static get MAX_OBJ(){ // Se simula una constante, puesto que actúa como tal al no agregarle un "set"
        return 3;
    }

    constructor(firstName, lastName){ // Creo el constructor
        this._firstName = firstName;
        this._lastName = lastName;
        if (Persona.contadorPersonas < Persona.MAX_OBJ) {

            this.id = Persona.contadorPersonas++; // Cada vez que el constructor es llamado, incrementa 1

        } else {
            console.log("Alcanzaste el límite de este objeto")
        }
    }
    
    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    set changeFirstName(newName){
        return this._firstName = newName;
    }

    set changeLastName(newName){
        return this._lastName = newName;
    }

    fullName() {
        return this.id + " " + this._firstName + " " + this._lastName;
    }

    toString() { // Sobreescribe el método de su clase padre "Object.toString"
        return this.fullName(); // Se aplica polimorfismo (múltiples formas en tiempo de ejecución), se ejecuta si es por una referencia de tipo padre o hijo
    }

    static saludar(){
        console.log("Saludos desde el método estático")
    }

    static saludarNombre(persona){
        console.log("Hola, " + persona.firstName + " " + persona.lastName);
    }

}

class Empleado extends Persona { // Creo una clase hija de Persona

    constructor(firstName, lastName, departamento) {
        super(firstName, lastName)
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this.departamento = departamento;
    }

    fullName() { // Aplico sobreescritura para agregar información al método en esta clase hija
        return super.fullName() + " " + this._departamento;
    }

}

let persona1 = new Persona("Franco", "Caminos");
console.log(persona1);
console.log(persona1.firstName) // Llamo al método get y el mismo retorna la propiedad de "firstName"
persona1.changeFirstName = "Daniel";
console.log(persona1.firstName);

let persona2 = new Persona("Cecilia", "Dragonetti");
console.log(persona2);

let empleado1 = new Empleado("Juana", "Molina", "Programadora");
let empleado2 = new Persona("Cristiano", "Ronaldo", "Jugaodr de Fútbol")
console.log(empleado1);
console.log(empleado1.fullName()); // Empleado hereda el método "fullName"
console.log(empleado1.toString());
// persona1.saludar(); no se puede llamar un método static desde un objeto
Persona.saludar(); // En cambio, si puedo llamarlo desde la clase
Persona.saludarNombre(empleado1);

console.log(Empleado.contadorPersonas++); // Valor estático, accedo a el medicante su clase
console.log(empleado1.default); // Valor no estático, accedo a el mediante un objeto