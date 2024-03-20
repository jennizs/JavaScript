const { questionFloat } = require("readline-sync");

let salario = questionFloat("Digite seu salario: ");
let abono = questionFloat("Digite seu Abono Salarial:") ; 
let NovoSalario = salario + abono;

console.log(NovoSalario);	
