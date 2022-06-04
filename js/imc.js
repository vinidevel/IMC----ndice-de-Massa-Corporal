function calcular(){
    var peso = document.getElementById("peso");
    var altura = document.getElementById("altura");
    var res = document.getElementById("res");
    var numpeso = Number.parseFloat(peso.value);
    var numaltura = Number.parseFloat(altura.value);
    var imc = numpeso / (numaltura * numaltura);
    if (imc <= 18.5) {

        res.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}. Você está abaixo do recomendado</p>`;

    } else if (imc > 18.5 && imc <= 24.9) {

        res.innerHTML = `<p> Seu IMC é ${imc.toFixed(2)} !</p> <p>Você está no peso normal.</p>`;
    } else if (imc > 25 && imc <= 29.9) {
        res.innerHTML = `<p> Seu IMC é ${imc.toFixed(2)} ! </p> <p>Você está em sobrepeso.</p>`;

    } else if (imc >= 30 && imc <= 39.9) {

        res.innerHTML = `<p> Seu IMC é ${imc.toFixed(2)} ! </p> <p>Você está obeso, se cuide.</p>`;
    } else if (imc >= 40){

        res.innerHTML = ` <p> Seu IMC é ${imc.toFixed(2)} ! <br> <br> </p> <p>Você está em obesidade grave.</p>`;
    } else if (numaltura === "") {
        alert("Você precisa preencher todos os campos"); 
    } else if (numpeso === ""){
        alert("Você precisa preencher todos os campos");
    } else {
       alert("Você precisa preencher todos os campos"); 
        }
}

