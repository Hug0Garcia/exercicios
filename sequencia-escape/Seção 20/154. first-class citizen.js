//First-Class Function
//Fisrt-Class Citizen
//As funções em Javascript são tratadas como objeto/valor
/*
Algumas coisas que podemos fazer com uma função em JS:
1- Atribuir a função a uma variável ou propriedade de objeto
2- Passar um função argumento para parâmetro de outra função
3- Retornar a função como valor para um chamador de outra função
4- Armazenar a função em uma estrutura de dados como o array ou objeto
*/

//! 1 - Atribuir a função a uma variável ou propriedade de objeto
var msg = function () { console.log("Olá") };
msg();

//! 2- Passar um função argumento para parâmetro de outra função
function som(a, b) { return a + b };
function sub(a, b) { return a - b };

function calc(fn, v1, v2) {
    //regras...
    return fn(v1, v2);
}

console.log('Calc :', calc(som, 50, 70));
console.log('Calc :', calc(sub, 100, 70));


//! 3 - Retornar a função como valor para um chamador de outra função
function somar(a, b) { return a + b };
function subtrair(a, b) { return a - b };

function calculadora(operacao) {
    if (operacao == 'somar') {
        return somar;
    } else if (operacao == 'subtrair') {
        return substrair;
    } else {
        return 'Operacao inválida';
    }
}
var retornoOperacao = calculadora('somar');

console.log('retornoOperacao: ' + retornoOperacao);
console.log('retornoOperacao: ' + retornoOperacao(45, 20));

//! 4- Armazenar a função em uma estrutura de dados como o array ou objeto
var array = [function (nome) { return "Oi " + nome + "!" }, function (nome) { return "Adeus " + nome + "!" }];
console.log("Array: ", array[0]('Fernanda'));
console.log("Array: ", array[1]('Fernanda'));

var objeto = { msg: function (nome) { return "Oi " + nome + "!" } };
console.log("Objeto: ", objeto.msg('Paulo'));