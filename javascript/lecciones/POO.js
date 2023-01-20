class Empleado {

    constructor(firstName, salary){
        this._firstName = firstName;
        this._salary = salary;
    }

    getDetails(){
        return `[Empleado] | Nombre: ${this._firstName}, Sueldo: ${this._salary}`
    }

}

class Gerente extends Empleado{ // La clase "Gerente" hereda de "Empleado"
    constructor(firstName, salary, department){
        super(firstName, salary) // Solo hereda estas propiedades
        this._department = department;
    }

    getDetails(){ // Sobreescribo el método de la clase padre para cambiar & agregar información (en este caso agrego this._department, que la clase padre no conoce)
        return `[Gerente] | Nombre: ${this._firstName}, Sueldo: ${this._salary}, Departamento: ${this._department}`
    }

}

function printInfo(type){
    console.log(type.getDetails()) // Polimorfismo
    if(type instanceof Gerente){
        console.log("Es un objeto de tipo Gerente")
    }
}

empleado1 = new Empleado("Franco", "70000$");
console.log(empleado1.getDetails());

gerente1 = new Gerente("Cecilia", "200000$", "RRHH");
console.log(gerente1.getDetails());

printInfo(empleado1); // Polimorfismo, dependiendo el tipo que le pases va a ir a buscar el método que necesita
printInfo(gerente1); 
