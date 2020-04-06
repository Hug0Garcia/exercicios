// var, let e const
// Içamento de variável (hoisting)
// Temporal Dead Zona (Zona Morta Temporal)

//exemplo 1 - hoisting
var nome;
console.log('nome', nome);
nome = 'maria';


var numero;

console.log('numero: ', numero);
numero = 235;


// Temporal Dead Zona (Zona Morta Temporal)
console.log('nome2', nome2);  //=> TDZ
let nome2 = 'pedro';


var numero4;

console.log('numero4: ', numero4);
numero4 = 123123125;