const readlineSync = require('readline-sync');

let Num1 = readlineSync.questionFloat("Digite o primeiro Numero: ");
let Num2 = readlineSync.questionFloat("Digite o segundo Numero: ");
let Num3 = readlineSync.questionFloat("Digite o terceiro Numero: ");
let Num4 = readlineSync.questionFloat("Digite o quarto Numero: ");

let Diferenca = (Num1 * Num2) - (Num3 * Num4);
console.log("Diferenca:", Diferenca);
