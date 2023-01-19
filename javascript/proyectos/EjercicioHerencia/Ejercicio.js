class Persona {

    static contadorObjP = 0;

    constructor(firstName, lastName, age){
        this.idP = ++Persona.contadorObjP;
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    get idP(){
        return this._idP;
    }
    
    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get age(){
        return this._age;
    }

    set idP(newID){
        return this._idP = newID;
    }

    set firstName(newName) {
        this._firstName = newName;
    }

    set lastName(newName) {
        return this._lastName = newName;
    }

    set age(newAge) {
        this._age = newAge;
    }
    /* Actualización: para usar mas de una línea al retornar se usa:

    return `
            ${this._idP}
            ${this._firstName}
            ${this._lastName}
            ${this._age};

        En mi caso hice el ejercicio sin mirar los videos con el código para resolverlo, y cuando lo terminé y me autocorregí encontré que sea retornaba de esta manera
    */
    toString() {
        return "ID Persona: " + this._idP + " | " + "Nombre: " + " | " + this._firstName + " | " + "Apellido: " + this._lastName + " | " + "Edad: " + this._age
    }

}

class Empleado extends Persona {

    static contadorObjE = 0;
    
    constructor(firstName, lastName, age, salary) {
        super(firstName, lastName, age)
        this.idE = ++Empleado.contadorObjE;
        this._salary = salary;
    }

    get idE(){
        return this._idE;
    }

    get salary(){
        return this._salary;
    }

    set idE(newID){
        return this._idE = newID;
    }

    set salary(newSalary){
        this._salary = newSalary;
    }

    toString(){
        return super.toString() + " | " + "ID Empleado: " + this.idE + " | " + "Salario: " + this._salary;
    }

}

class Cliente extends Persona {

    static contadorObjC = 0;
    
    constructor(firstName, lastName, age, regDate) {
        super(firstName, lastName, age)
        this.idC = ++Cliente.contadorObjC;
        this.regDate = regDate;
    }

    get idC(){
        return this._idC;
    }

    get regDate(){
        return this._regDate;
    }

    set idC(newID){
        return this._idE = newID;
    }

    set regDate(newRegDate){
        return this._regDate = newRegDate;
    }

    toString(){
        return super.toString() + " | " + "ID Cliente: " + this.idC + " | " + "Fecha de Registro: " + this._regDate;
    }

}

// Prueba

persona1 = new Persona("Franco", "Caminos", 19);
console.log(persona1);
console.log(persona1.toString());

empleado1 = new Empleado("Mauro", "Lombardo", 26, "95000$")
console.log(empleado1);
console.log(empleado1.toString());

cliente1 = new Cliente("Alejo", "Migliarini", "24", new Date());
console.log(cliente1.toString());