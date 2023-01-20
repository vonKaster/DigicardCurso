class DispositivoEntrada {

    constructor(inputType, brand){
        this._inputType = inputType;
        this._brand = brand;
    }

    get inputType(){
        return this._inputType;
    }

    get brand(){
        return this._brand;
    }

    set inputType(newInput){
        this._inputType = newInput;
    }

    set brand(newBrand){
        this._brand = newBrand;
    }

}

class Mouse extends DispositivoEntrada {

    static contMouse = 0;

    constructor(inputType, brand){
        super(inputType, brand);
        this._idR = ++Mouse.contMouse;
    }

    get idR(){
        return this._idR;
    }

    toString(){
        return `N° de Serie: ${this._idR}, Tipo de Entrada: ${this._inputType}, Marca: ${this._brand}`
    }

}

class Teclado extends DispositivoEntrada {

    static contKeyb = 0;

    constructor(inputType, brand){
        super(inputType, brand)
        this._idT = ++Teclado.contKeyb;
    }

    get idT(){
        return this._idT;
    }

    set idT(newID){
        return this._idT = newID;
    }

    toString(){
        return `N° de Serie: ${this._idT}, Tipo de Entrada: ${this._inputType}, Marca: ${this._brand}`
    }

}

class Monitor {

    static contMon = 0

    constructor(brand, size){
        this._idM = ++Monitor.contMon;
        this._brand = brand;
        this._size = size;
    }

    get idM(){
        return this._idM;
    }

    set idM(newID) {
        this._idM = newID;
    }

    toString() {
        return `N° de Serie: ${this._idM}, Marca: ${this._brand}, Tamaño: ${this._size}`
    }
}

class Computadora {

    static contComp = 0;

    constructor(name, monitor, mouse, teclado){
        this._idC = ++Computadora.contComp;
        this._name = name;
        this._monitor = monitor;
        this._mouse = mouse;
        this._teclado = teclado;
    }
    
    toString(){
        return `Computadora: ${this._idC}: ${this._name} \n ${this._monitor} \n ${this._mouse} \n ${this._teclado}`
    }
    
}

class Orden {

    static contOrd = 0;

    constructor(){
        this._idO = ++Orden.contOrd;
        this._computers = []
    }

    get idO(){
        return this._idO;
    }

    set idO(newID){
        this._idO = newID;
    }

    addComputer(computer){
        this._computers.push(computer);
    }

    showOrder(){
        let compOrder = "";
        for(let computer of this._computers){
            compOrder += `\n${computer}`
        }
        console.log(`N° Orden: ${this._idO}, Computadoras: ${compOrder}`);
    }

}

// Prueba

let mouse1 = new Mouse("USB 3.0", "Logitech")
console.log(mouse1.toString());

let teclado1 = new Teclado("USB 3.1", "HyperX");
console.log(teclado1.toString());

let monitor1 = new Monitor("LG", '24"')
console.log(monitor1.toString());

let computadora1 = new Computadora("HP", monitor1, mouse1, teclado1);
let computadora2 = new Computadora("Asus", monitor1, mouse1, teclado1);
console.log(computadora1.toString());

let orden1 = new Orden();
orden1.addComputer(computadora1);
orden1.addComputer(computadora2);
orden1.showOrder();
