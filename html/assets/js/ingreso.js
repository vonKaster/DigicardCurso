class Ingreso extends Dato{
    static counterIncome = 0;

    constructor(description, value){
        super(description, value);
        this._id = ++Ingreso.counterIncome;
    }

    get id(){
        return this._id;
    }
}