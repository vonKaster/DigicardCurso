// No se puede crear un objeto antes de declarar su respectiva clase, no se aplica el concepto de "Hoisting" (el cual si se aplica en las Funciones)
//let persona3 = new Persona("Carlos", "Tevez");

class Persona { // Creo mi clase padre | "extends Object" es el extend por default de todas las clases (a menos que se especifique otra)
    constructor(firstName, lastName){ // Creo el constructor
        this._firstName = firstName;
        this._lastName = lastName;

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
        return this._firstName + " " + this._lastName;
    }

    toString() { // Sobreescribe el método de su clase padre "Object.toString"
        return this.fullName(); // Se aplica polimorfismo (múltiples formas en tiempo de ejecución), se ejecuta si es por una referencia de tipo padre o hijo
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
console.log(empleado1);
console.log(empleado1.fullName()); // Empleado hereda el método "fullName"
console.log(empleado1.toString());
