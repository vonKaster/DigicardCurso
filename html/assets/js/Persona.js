class Persona{
    constructor(firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    set firstName(newName){
        this._firstName = newName;
    }

    set lastName(newName){
        this._lastName = newName;
    }

}