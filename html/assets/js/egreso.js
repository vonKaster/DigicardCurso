class Egreso extends Dato{
    static counterDischarge = 0;

    constructor(description, value){
        super(description, value);
        this._id = ++Egreso.counterDischarge;
    }

    get id(){
        return this._id;
    }
}