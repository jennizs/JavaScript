const readlineSync = require("readline-sync");

let SalarioBruto = readlineSync.questionFloat("Digite o salário bruto: ");
let AdicionalNoturno = readlineSync.questionFloat("Digite o valor do adicional noturno: ");
let HorasExtras = readlineSync.questionFloat("Digite a quantidade de horas extras: ");
let Descontos = readlineSync.questionFloat("Digite o valor dos descontos: ");

let SalarioLiquido = SalarioBruto + AdicionalNoturno + (HorasExtras * 5) - Descontos;
console.log("Salário líquido:", SalarioLiquido);
