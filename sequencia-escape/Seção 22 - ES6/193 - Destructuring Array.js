//Desestruturação de array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let [um, dois, tres, , , , , , nove, dez] = array;

console.log(um, dois, tres, nove, dez);

let pessoas = [
    { nome: 'maria', telefone: '6456342' },
    { nome: 'Carlos', telefone: '64563432342' },
    { nome: 'mPedro', telefone: '6423423456342' }
]

let [, { nome, telefone }] = pessoas;  //Reparar que na primeira posicao do array está em branco
// assim o ES6 sabe que é o 2
console.log(`Nome : ${nome} - telefone: ${telefone}`);
console.log("");

//desestruturacao-inverter-valores
let x = 10;
let y = 20;
console.log(x, y);

[x, y] = [y, x];
console.log(x, y);