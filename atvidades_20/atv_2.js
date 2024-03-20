const readlineSync = require("readline-sync");

let Nota1 = readlineSync.questionFloat("Digite a primeira nota: ");
let Nota2 = readlineSync.questionFloat("Digite a segunda nota: ");
let Nota3 = readlineSync.questionFloat("Digite a terceira nota: ");
let Nota4 = readlineSync.questionFloat("Digite a quarta nota: ");

let MediaFinal = (Nota1 + Nota2 + Nota3 + Nota4) / 4;
console.log("Média final:", MediaFinal);
