/* Default parameters, ou parametros padrao é uma forma de garantir um valor padrão 
para os parametros de uma função quando os argumentos nao sao repassados, desta forma 
caso a funcao seja invocada omitindo algum de seus parametros, estão irá ser setado algum valor
padrao para o argumento para evitar o valor undefined na ausencia de valor */
console.clear();
//Exemplo 1
//problema
function exibirMsgSaudacao(nome) {
    /* if (nome == undefined) {
        nome = 'cliente';
    }*/
    nome = nome || 'cliente';

    let msg = "Olá " + nome + ",seja bem-vindo!";
    console.log(msg);
}

exibirMsgSaudacao("Maria");
exibirMsgSaudacao();  // Output Expected:  Undefined
console.log("------------------ES6-----------OPCAO 1-------");
function exibirMsgSaudacao(nome = 'cliente') {

    let msg = "Olá " + nome + ",seja bem-vindo!";
    console.log(msg);
}

exibirMsgSaudacao("Maria");
exibirMsgSaudacao();  // Output Expected:  Undefined
console.log("------------------ES6-------------OPCAO 2-----");

let valorPadrao = 'Olá';

function exibir(mensagem = valorPadrao) {
    console.log(mensagem)
}

exibir('Hello');
exibir();
console.log("------------------ES6-------------OPCAO 3-----");

function fn(nome = 'cliente', sobrenome = nome) {
    console.log("Olá " + nome + "!");
    console.log("Obrigada " + sobrenome + ".");
}

fn('Maria');
fn('Maria', 'Silva');
fn();
console.log("------------------ES6-------------OPCAO 4-----");

function elevarNumero(valor = 0, base = (function () { return 2; }())) { //IIFE
    console.log(Math.pow(valor, base));
}
elevarNumero(8, 2);
elevarNumero(2);

