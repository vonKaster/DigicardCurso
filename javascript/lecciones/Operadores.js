let a = 5, b = 7; // Suma
let z = a + b;
console.log("Resultado: " + z)

z = z - 2; // Resta
console.log("Resultado: " + z)

z = a * b; // Multiplicación
console.log("Resultado: " + z)

z = a / b; // División
console.log("Resultado: " + z)

z = a % b; // Resto de la división
console.log("Resultado: " + z)

z = a ** b; // Resultado de exponente (b como exponente)
console.log("Resultado: " + z)

////////////////////////// INCREMENTO - DECREMENTO ////////////////////////////////////////////////////

let c = 2, d = 4;
let y = c + d;
console.log(y);

y = ++c; // Pre-Incremento
console.log(a);
console.log(y);

y = d++; // Post-Incremento
console.log(d);
console.log(y); // No surte efecto hasta la próxima operación

y = --c; // Pre-Decremento
console.log(a);
console.log(y);

y = d--; // Post-Decremento
console.log(d);
console.log(y); // No surte efecto hasta la próxima operación

////////////////////////// Asignación ////////////////////////////////////////////////////

let e = 2;

e += 2; // Es lo mismo que a = a + 2
console.log(e);

e -= 2; // Es lo mismo que a = a - 2
console.log(e);

e *= 2; // Es lo mismo que a = a * 2
console.log(e);

e /= 2; // Es lo mismo que a = a / 2
console.log(e);

////////////////////////// Comparación ////////////////////////////////////////////////////

let f = 3, g = "3", w = 0;

w = f == g; // Revisa el valor sin importar el tipo
console.log(w);

w = f === g; // Revisa el valor y el tipo
console.log(w);

w = f != g; // Revisa el valor sin importar el tipo
console.log(w);

w = f !== g; // Revisa el valor y el tipo
console.log(w);

////////////////////////// Relacionales ////////////////////////////////////////////////////

let h = 2, i = "2", v = 0;

v = h < i; // H menor que I
console.log(v);

v = h <= i; // H menor o igual que I
console.log(v);

v = h > i; // H mayor que I
console.log(v);

v = h >= i; // H mayor o igual que I
console.log(v);

////////////////////////// Número par o impar ////////////////////////////////////////////////////

let j = 10;

if(j % 2 == 0){
    console.log("Es PAR");
} else {
    console.log("Es IMPAR");
}

////////////////////////// Ejercicio Edad ////////////////////////////////////////////////////

let edad = 22, adulto = 18;

if(edad >= adulto){
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

////////////////////////// AND & OR ////////////////////////////////////////////////////

let k = 15, valMin = 0, valMax = 20;

if(k >= valMin && k <= valMax){ // Deben cumplirse las dos
    console.log("Está dentro del rango")
} else {
    console.log("Está fuera del rango")
}

let horarioTrabajo = false, esFinde = true;

if(horarioTrabajo || esFinde) {
    console.log("Se descansa")
} else {
    console.log("Se trabaja");
}

////////////////////////// Ternario ////////////////////////////////////////////////////

let res = (4>2) ? "Verdadero" : "Falso";
console.log(res);

let numero = 1;
res = (numero>2) ? "Verdadero" : "Falso";
console.log(res);

////////////////////////// Convertir String a Número | NaN ////////////////////////////////////////////////////

let miNumeroString = "21";
console.log(typeof(MiNumero))
let miNumeroInt = Number(miNumeroString);
Number(miNumeroInt);
console.log(typeof(miNumeroInt));

miNumeroString = "28x";
miNumeroNan = Number(miNumeroString);
console.log(miNumeroNan); // Not a Number
