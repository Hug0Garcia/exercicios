//Propriedades computadas em objetos literais
//ES5
var objProdutoES5 = {
    nome: "A"
}

objProdutoES5["seq" + 23] = 23;

console.log('objProdutoES5: ', objProdutoES5);

//ES6
var objProdutoES6 = {
    nome: "A",
    ["seq" + 23]: 12
}

console.log('objProdutoES6: ', objProdutoES6);

console.log('');
//
let retNum = function () {
    return 267;
}

let nomeProp = 'teste';

var objProdutoES6v2 = {
    nome: "C",
    ["seq" + retNum()]: retNum(),
    [nomeProp]: nomeProp
}
console.log('objProdutoES6v2: ', objProdutoES6v2);

