//IIFE imediately - invoked function expression (expressão de função invocada imediatamente)
/* Esse padrão é frequentemente usado ao tentar evitar poluir o namespace global, poque
todas as variáveis usadas dentro IIFE ( como em qualquer outra função normal) não são visíveis 
fora do seu escopo.
IIFE faz uso de uma função anônima e é exceutada de imediata, criado um escopo temporário durante
a execução da função.
 Segurança, você declara a função anónima, executa e ponto final
/* Partes da IIFE
1- '()' parenteses que recebem como padrão uma função anónima concretizando uma expressão a ser avaliada;
2- 'function (){}' funcao anónima a ser executada com seu escopo próprio;
3- '()' operador para execução função/expressão da IIFE;
*/
(function () {

})();

// exemplo 1 - ESCOPO  - EXECUTADA DE IMEDIATO
var teste = true;
console.log('teste', teste);

(function () {           //variáveis local   TODAS AS VARIÁVEIS NA IIFE DEVEM TER 'VAR' 
    teste = false;
    var local = true;
    teste2 = true;
    console.log('teste', teste);
    console.log('local', local);
})();  //! no final os parentesis     (); executam logo a IIFE

console.log('teste', teste);
console.log('teste2', teste2);  //ReferenceError 

console.log("--------------");


//exemplo 2 - IIFE não fica poluindo o escopo global
//Pode retornar algo
//Segurança, você declara a função anónima, executa e ponto final;
var teste2 = true;
console.log('teste2', teste2);

var fn = (function (win) {
    win.teste2 = false;
    var local2 = true;
    console.log('teste2', win.teste2);
    console.log('local2', local2);
})(this);  // => arguments  como this, ou seja, escopo window

console.log('fn: ', fn);
console.log('------------------EXEMPLO3-----------------');

//exemplo 3
var valor = 40.4;
var cobranca = (function (vlr) {                         //vlr = valor
    var juros = 3.3;
    var total = (juros / 100 * vlr) + vlr;

    return { total: total, juros: juros };
})(valor);                                               //valor = vlr

console.log("Valor: R$ ", valor);
console.log("Juros: % ", cobranca.juros);
console.log("Total: R$ ", cobranca.total.toFixed(2));
console.log("Cobranca: ", cobranca);