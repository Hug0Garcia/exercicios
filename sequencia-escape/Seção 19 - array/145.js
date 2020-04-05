/*ECMAScript 5
Filter - Este método itera por todos os elementos com valores atribuidos q não seja undefined;
Filter retorna um novo array com base em um retorno booleano (true) de cada iteração;
Recebe uma função (callback) por parâmetro no qual é chamada para cada elemento do array;
A funcão pode receber até três parâmetros:
1- valor (elemento array)
2- índice do elemento no array
3- o próprio array
*/
var nomes = ['Maria', 'João', 'Pedro', 'José', 'Flávio', 'Fernanda', 'Marta', 'jaquim'];
var numeros = [2, 9, 5, 4, 3, 1, 0, 7, 6, 15];

var subConjuntoNumeros = numeros.filter(function (valor, indice, array) {
    return valor > 5;
});
//! Não cria um novo array
console.log('resultado filtro : ', subConjuntoNumeros);

//pesquisa
console.log('nomes', nomes);
var regExp = new RegExp("[a-zA-Z]*a[a-zA-Z]*");

var resultadoNomes = nomes.filter(function (valor) {
    return regExp.test(valor);
});
console.log("resultado nomes pesquisa", resultadoNomes);