const persons = [
    new Persona("Franco", "Caminos"),
    new Persona("Cecilia", "Dragonetti")
]

function showPersons(){
    let text = "";
    for(let person of persons){
        console.log(person);
        text += `<li>${person.firstName}, ${person.lastName}</li><br>`;
    }
    document.getElementById("persons").innerHTML = text;
}

function addPerson(){
    const form = document.forms["formListaE"];
    const firstName = form["firstName"];
    const lastName = form["lastName"];
    const person = new Persona(firstName.value, lastName.value);
    persons.push(person);
    showPersons();
}
