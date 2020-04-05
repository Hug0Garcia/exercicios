/*let e const 

Regras :
- Tem escopo de bloco
- Não podem ser redeclaradas no mesmo escopo - Irá mostrar erro caso alguma biblioteca esteja usando no mesmo escpo
- Não pode ser referenciadas antes de sua declaração
- Não são içadas, ou seja, não sofrem hoisting */

//Exemplo 1 - Tem escopo de bloco;
var escopoGlobal = 'escopoGlobal';

function fn() {
    var escopoLocalFuncao = 'escopoLocalFuncao';
    escopoLocalFuncao2 = 'escopoLocalFuncao2';    // como não tem var o JS cria variável global
}

fn();

console.log('escopoGlobal : ', escopoGlobal);




//Exemplo 2 - Não podem ser redeclaradas (mesmo nome)






//Exemplo 3 - Não pode ser referenciadas antes de sua declaração