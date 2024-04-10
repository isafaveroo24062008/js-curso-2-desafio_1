function calcularMedia(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3)/3;
}

let numero1 = parseInt(prompt("Insira um número:"));
let numero2 = parseInt(prompt("Insira outro número:"));
let numero3 = parseInt(prompt("Insira mais um número:"));

let resultado = calcularMedia(numero1, numero2, numero3);

console.log("A média dos números inseridos é: " + resultado);