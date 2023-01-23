console.log("Inicializando Calculadora");
document.getElementById("result").innerHTML = `Resultado: `;

function calc(){
    const formc = document.getElementById("formc");
    let num1 = formc["num1"];
    let num2 = formc["num2"];
    document.getElementById("result").innerHTML = `Resultado: `;

    if(document.getElementById('btnAdd').classList.contains("btn-add")){
        let result = parseInt(num1.value) + parseInt(num2.value);
        document.getElementById("result").innerHTML = `Resultado: ${result}`;
    } else if (document.getElementById('btnSubs').classList.contains("btn-subs")){
        let result = parseInt(num1.value) - parseInt(num2.value);
        document.getElementById("result").innerHTML = `Resultado: ${result}`;
    } else if(document.getElementById('btnMult').classList.contains("btn-mult")){
        let result = parseInt(num1.value) * parseInt(num2.value);
        document.getElementById("result").innerHTML = `Resultado: ${result}`;
    } else if(document.getElementById('btnDiv').classList.contains("btn-div")){
        if(parseInt(num2.value) <= 0){
            document.getElementById("result").innerHTML = `Resultado: No podes dividir por 0`;
        } else{ 
        let result = parseInt(num1.value) / parseInt(num2.value);
        document.getElementById("result").innerHTML = `Resultado: ${result}`;
        }
    }

}