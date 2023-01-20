class Producto {

    static contProd = 0;

    constructor(name, price){
        this.idP = ++Producto.contProd;
        this._name = name;
        this._price = price;
    }

    get idP(){
        return this._idP;
    }

    set idP(newID){
        this._idP = newID; 
    }

    get name(){
        return this._name;
    }

    get price(){
        return this._price;
    }

    set name(newName){
        this._name = newName;
    }

    set price(newPrice){
        this._price = newPrice;
    }
    
    toString(){
        return `idProducto: ${this._idP}, Nombre: ${this._name}, Precio: ${this._price}`
    }

}

class Orden {
    static contOrd = 0;

    static get max_cantprod() {
        return 5;
    }

    constructor(){
        this._idI = ++Orden.contOrd;
        this._products = [];
        this._contPadded = 0;
    }

    get idI(){
        return this._idI;
    }

    addProduct(product){
        if(this._products.length < Orden.max_cantprod){
            this._products.push(product); // Si se cumple la condición, agrego el producto al array
            // this._productos[this._contPadded++] = producto; Otra forma de agregar el producto, se lee mas claro en la línea de arriba
        } else {
            console.log("Llegaste a la máxima cantidad de productos que puedes comprar en una misma orden");
        }
    }

    calcTotal(){
        let totalSale = 0;
        for(let product of this._products){ // for simplificado para recorrer el array
            totalSale += product.price;
        }
        return totalSale;
    }

    showOrder(){
        let productOrder = "";
        for(let product of this._products){
            productOrder += "\n{" + product.toString() + "}";
        }
        console.log(`N° Orden: ${this._idI} Total: ${this.calcTotal()}, Productos: ${productOrder}`)
    }

}

// Prueba

let producto1 = new Producto("Esponja", 500)
let producto2 = new Producto("Jabón", 200)
console.log(producto1.toString());
console.log(producto2.toString());

let orden1 = new Orden();
orden1.addProduct(producto1);
orden1.addProduct(producto2);
orden1.showOrder();