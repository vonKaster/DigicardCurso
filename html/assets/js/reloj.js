const showClock = () => {
    let date = new Date(); // obtengo la fecha actual
    let hour = date.getHours(); // obtengo la hora actual usando de referencia la fecha
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let months = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    let days = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");


    document.getElementById("hour").innerHTML = `${hour}:${minutes}:${seconds}`;
    document.getElementById("date").innerHTML = (days[date.getDay()] + ", " + date.getDate() + " de " + months[date.getMonth()]);
}

setInterval(showClock, 1000);