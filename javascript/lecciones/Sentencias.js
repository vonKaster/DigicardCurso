let condicion = true;

if(condicion){
    console.log("La condición es verdadera");
} else {
    console.log("La condición es falsa")
}

let a = 5, b = 3;

if(a < b) {
    console.log("Verdadero, A es menor que B");
} else {
    console.log("Falso, B es mayor que A");
}

/////////////////////////////////////////// Ejercicio Estaciones ///////////////////////////////////////////

let mes = 2, estacion;

if (mes == 1 || mes == 2 || mes == 12) {
    estacion = "Invierno";
} else if (mes == 3 || mes == 4 || mes == 5){
    estacion = "Primavera";
} else if (mes == 6 || mes == 7 || mes == 8){
    estacion = "Verano";
} else if (mes == 9 || mes == 10 || mes == 11) {
    estacion = "Otoño";
}

console.log(estacion);

/////////////////////////////////////////// Ejercicio Calculo Hora del Día ///////////////////////////////////////////

/*
6am-11am - Buenos días
12-18pm - Buenas tardes
19-24pm - Buenas noches
0am-6am - Durmiendo
*/

let hora = 15, mensaje;

if(hora >= 6 && hora <= 11){
    console.log("Buenos días");
} else if (hora >= 12 && hora <= 18) {
    console.log("Buenas tardes");
} else if (hora >= 19 && hora <= 24){
    console.log("Buenas noches");
} else if (hora >= 0 && hora < 6){
    console.log("Durmiendo")
}

/////////////////////////////////////////// Switch ///////////////////////////////////////////

let numero = 5, numeroTxT = "Valor desconocido";

switch(numero){
    case 1:
        numeroTxT = "Número 1";
        break;
    case 2:
        numeroTxT = "Número 2";
        break;
    case 3:
        numeroTxT = "Número 3";
        break;
    default:
        numeroTxT = "Caso no encontrado";
        break;
}

console.log(numeroTxT);

mes = 7, estacion = "Estación desconocida";

switch(estacion){
    case 1: case 2: case 12:
        estacion = "Invierno";
        break;
    case 3: case 4: case 5:
        estacion = "Primavera"
        break;
    case 6: case 7: case 8:
        estacion = "Verano";
        break;
    case 9: case 10: case 11:
        estacion = "Otoño"
        break;
    default:
        estacion = "No es ninguna estación"
}

console.log(estacion);