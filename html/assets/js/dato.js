class Dato{
    constructor(description, value){
        this._description = description;
        this._value = value;
    }

    get description(){
        return this._description;
    }

    get value(){
        return this._value;
    }

    set description(newDescription){
        this._description = newDescription;
    }

    set value(newValue){
        this._value = newValue;
    }

}