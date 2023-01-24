const incomes = [
    new Ingreso("Salario", 2000.00),
    new Ingreso("Venta coche", 1500),
]

const discharges = [
    new Egreso("Alquiler", 900),
    new Egreso("Ropa", 400),
]

let loadApp = () => {
    loadHead();
    loadIncomes();
    loadDischarges();
}

let totalIncomes = () => {
    let totalIncome = 0;
    for(let income of incomes){
        totalIncome += income.value;
    }
    return totalIncome;
}

let totalDischarges = () => {
    let totalDischarge = 0;
    for(let discharge of discharges){
        totalDischarge += discharge.value;
    }
    return totalDischarge;
}

let loadHead = () => {
    let budget = totalIncomes() - totalDischarges();
    let percentageDischarge = totalDischarges() / totalIncomes();
    console.log(totalIncomes())
    document.getElementById("presupuesto").innerHTML = currencyFormat(budget);
    document.getElementById("porcentaje").innerHTML = percentageFormat(percentageDischarge);
    document.getElementById("ingresos").innerHTML = currencyFormat(totalIncomes());
    document.getElementById("egresos").innerHTML = currencyFormat(totalDischarges());
}

const currencyFormat = (value) => {
    return value.toLocaleString("es-AR", {style:"currency", currency:"ARG", minimumFractionDigits:2})
}

const percentageFormat = (value) => {
    return value.toLocaleString("es-AR",{style:"percent", minimumFractionDigits:2});
}

const loadIncomes = () => {
    let incomesHTML = "";
    for(let income of incomes){
        incomesHTML += createIncomeHTML(income);
    }
    document.getElementById("lista-ingresos").innerHTML = incomesHTML;
}

const createIncomeHTML = (income) => {
    let incomeHTML = `

    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${income.description}</div>
            <div class="derecha limpiarEstilos">
                 <div class="elemento_valor">${currencyFormat(income.value)}</div>
                     <div class="elemento_eliminar">
                        <button class="elemento_eliminar--btn">
                        <i onclick="deleteIncome(${income.id})" class="material-icons-outlined">cancel</i>
                    </button>
            </div>
        </div>
    </div>

    `;
    return incomeHTML;
}

const deleteIncome = (id) => {
    let deleteIncome = incomes.findIndex(income => income.id === id); // = for(let income of incomes)
    incomes.splice(deleteIncome, 1);
    loadHead();
    loadIncomes();

}

const loadDischarges = () => {
    let dischargesHTML = "";
    for(let discharge of discharges){
        dischargesHTML += createDischargeHTML(discharge);
    }
    document.getElementById("lista_egresos").innerHTML = dischargesHTML;
}

const createDischargeHTML = (discharge) => {
    let dischargeHTML = `
    
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${discharge.description}</div>
            <div class="derecha limpiarEstilos">
                    <div class="elemento_valor">${currencyFormat(discharge.value)}</div>
                        <div class="elemento_porcentaje">${percentageFormat(discharge.value/totalDischarges())}</div>
                        <div class="elemento_eliminar">
                       <button class="elemento_eliminar--btn">
                        <i onclick="deleteDischarge(${discharge.id})" class="material-icons-outlined">cancel</i>
                     </button>
             </div>
        </div>
    </div>

    `;
    return dischargeHTML;
}

const deleteDischarge= (id) => {
    let deleteDischarge = discharges.findIndex(discharge => discharge.id === id); // = for(let income of incomes)
    discharges.splice(deleteDischarge, 1);
    loadHead();
    loadDischarges();

}

let addFact = () => {
    let form = document.forms["forma"];
    let type = forma["tipo"];
    let description = forma["descripcion"];
    let value = forma["valor"];

    if(description.value !== "" && value.value !== ""){
        if(type.value === "ingreso"){
            incomes.push(new Ingreso(description.value, +value.value))
            loadHead();
            loadIncomes();
        } else if(type.value === "egreso"){
            discharges.push(new Egreso(description.value, +value.value))
            loadHead();
            loadDischarges();
        }
    }
}
