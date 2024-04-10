function maiorNumero(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}

let numero1 = parseInt(prompt("digite um numero"));
let numero2 = parseInt(prompt("digite outro numero"));
let maior = maiorNumero(numero1, numero2);
console.log("O maior número é: " + maior);