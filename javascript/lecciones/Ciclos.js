/////////////////////////////////////////// WHILE & DO WHILE ///////////////////////////////////////////

let contador = 0;

while(contador < 4) { // Repite todo el código mientras "contador" sea menor a 4
    console.log(contador)
    console.log("Vamos por la cuarta");
    contador++; //Se suma 1 a contador cada vez que se repite la sentencia
}

do{ // Aun que se cumpla o no la condición del while el "do" se ejecuta 1 vez SI O SI
    console.log("contador");
    contador++
} while(contador < 4);
console.log("Fin del ciclo")

/////////////////////////////////////////// FOR  w/labels ///////////////////////////////////////////

for(let contador = 0; contador <5; contador++){
    console.log(contador);
}
console.log("Fin del ciclo")

for(let contador = 0; contador <= 10; contador++) {

    if(contador %2 == 0){
        console.log(contador);
        break; // Termina la secuencia
    }

}

inicio:
for(let contador = 0; contador <= 10; contador++) {

    if(contador %2 !== 0){
       continue inicio; // Salta a la siguiente iteración
    }
    console.log(contador);

}