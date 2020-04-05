/*O escopo no Javascript define a abrangência no qual variáveis, valores, funções e objetos
poderão ser referências e acessados.
No JS tenho dois escopos:
- Global: Pertencente ao Objeto Window que representa a janela do Browser
- Local: Nível de bloco que é usando pelas funções
*/

//exemplo 1
var pessoa = 'Maria'; //escopo global

console.log('global pessoa: ', pessoa);

function empresa() {
    var funcionario = 'Pedro'; // escopo local - escopo da função, Pedro só existe quando a função é chamada
    console.log('local pessoa: ', pessoa);
    console.log('local funcionairo : ', funcionario);
}

empresa();
//console.log('global funcionairo : ', funcionario);//funcionario is not defined = é local
console.log("");
//exemplo2
function casa() {
    var morador1 = 'José';
    morador2 = 'Francisca';  // se não usar 'var' é definido em escopo global
    // usar variáveis sem var é uma quebra de segurança, porque define a variável em escopo global
    console.log('local morador1: ', morador1);
    console.log('local morador2: ', morador2);
}

casa();
// console.log('global morador1: ', morador1); // ReferenceError morador1 is not defined
console.log('global morador2: ', morador2);
console.log("");
console.log("");
//exemplo3
var aluno1 = 'Fernando';
var aluno2 = 'Érica';

function salaDeAula(aluno3) { //aluno3 é o parametro da funcao salaDeAula => transforma-se em variav
    var aluno1 = 'Joana';
    aluno2 = 'Paula';
    console.log('Local aluno1: ', aluno1);
    console.log('Local aluno2: ', aluno2);
    console.log('Local aluno3: ', aluno3);
}

salaDeAula('Bruno');
console.log("");
console.log("");
console.log('global aluno1: ', aluno1);
console.log('global aluno2: ', aluno2);
//console.log('global aluno3: ', aluno3); // Referencer: aluno3 is not defined = parametro de um funcao transformam-se em variável temporariamente