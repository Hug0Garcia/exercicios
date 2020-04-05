/*Reduce/ReduceRight - Este método itera por todos os elementos de um array, tendo como objetivo
principal reduzir tudo a um único valor no qual será o retorno da função */

/* Recebe uma função (callback) e um valor inicial para seu acumulador

A funcão callback recebe quatro parâmetros no qual é chamada para cada elemento do array;
1- Acumulador, no qual irá reter o valor oriundo do retorno de cada iteração.
2- valor
3- indice do elemento no array
4- o próprio array
O reduce right começa pelo fim do array. Ou seja, da direita para a esquerda. */

var testeReduce = [1, 2, 3, 4, 5];

var retornoReduce = testeReduce.reduce(function (acumulador, valorEleArray, indice, array) {
    console.log('acumulador: ', acumulador);
    console.log('valorEleArray: ', valorEleArray);
    console.log('indice: ', indice);
    console.log("----------");
    return acumulador + valorEleArray;
}, 0);

console.log('retornoReduce: ', retornoReduce);
var valorInicial = 2;
console.log("RIGHT : -------------------------------------------------------");
var retornoReduceR = testeReduce.reduceRight(function (acumulador, valorEleArray, indice, array) {
    console.log('valor Inicial: ', valorInicial);
    console.log('acumulador: ', acumulador);
    console.log('valorEleArray: ', valorEleArray);
    console.log('indice: ', indice);
    console.log("----------");
    return acumulador + valorEleArray;
}, valorInicial);

console.log('retornoReduceR: ', retornoReduceR);