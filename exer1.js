let altura = parseFloat (prompt ("informe sua altura"));
let peso = parseFloat (prompt ("informe seu peso"));
let imc;
function calculoIMC (parPeso, parAltura){
    return parPeso/(parAltura*parAltura);
}

imc = calculoIMC(peso, altura);
alert (` O valor do IMC é ${imc.toFixed(2)}`);