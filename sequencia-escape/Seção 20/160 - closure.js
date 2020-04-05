/* Closure
Closure é um escopo próprio para função
Entenda closure como sendo algo fechado para acesso via escopo global,externo ao closure,
e ao mm tmp sendo aberto a partir do escopo local interno para acessar o escopo global.

Quando se cria uma função no escopo raiz, se cria uma closure para a mesma em escopo global;
Quando se cria uma função no escopo local de uma função, se cria uma closure em escopo local.
Somando isso a uma instrução de return e uma variável global para armazenar o closure podemos
contruir um escopo totalmente encapsulado e em memória em tempo indeterminado

Uma closure é criada com escopo no qual ela foi definida, mesmo que o escopo superior não exista
mais, a closure irá criar um clone temporário do escopo no qual foi criada */
//! Closure é um escopo isolado, encapsulado em uma função
/*
//exemplo 1
var contadorEscopoGlobal = 0;
console.log('contadorEscopoGlobal:', contadorEscopoGlobal);

function incrementar() {
    var contadorEscopoLocal = null;  //esta variável volta a null sempre a função acaba
    ++contadorEscopoLocal;
    ++contadorEscopoGlobal;

    console.log('Dentro da função(contadorEscopoLocal):', contadorEscopoLocal);
}

incrementar();
incrementar();
incrementar();
//console.log('contadorEscopoLocal:', contadorEscopoLocal); //Não posso aceder da function incrementar
console.log('contadorEscopoGlobal:', contadorEscopoGlobal);

console.log("--------------------------");
//Aninhamento de escopo 
var contador;

function incrementarV2() {
    var contadorEscopoLocal = 0;

    function gravar() {
        ++contadorEscopoLocal;
        console.log("Dentro da função(contadorEscopoLocal): ", contadorEscopoLocal);
    }
    contador = gravar; // astribui a função gravar ao contador
}

incrementarV2();
contador();
contador();
contador();
console.log(contador);
*/
//EXEMPLO3
console.log("--------------------------");
var contar = (function () {   //IIFE
    var contadorPrivado = 0; //privado
    console.log("");
    function setarValor(valor) {
        contadorPrivado += valor;

    }
    return {   //objeto
        incrementar: function () {
            setarValor(1);
        },
        decrementar: function () {
            setarValor(-1);
        },
        getValor: function () {
            return contadorPrivado;
        }
    }
})();

console.log('incrementar', contar.incrementar());
console.log('valor do contador', contar.getValor());

console.log('decrementar', contar.decrementar());
console.log('valor do contador', contar.getValor());