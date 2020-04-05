/* 
Callback é um recurso no qual uma função é passada via argumento para outra função no
ato da invocação, desta forma a função que recebe a função callback como argumento
pode chamar o callback durante sua execução em um processo síncrono ou assíncrono

Processo síncrona: significa que cada instrução será executada mediante a finalização da instrução
anterior.

Processo assíncrono: significa que durante a execução da aplicação pode haver instruções
que serão executadas mediante resposta de alguma processo, mas não interromperá o fluxo
principal da aplicação não será comprometido. */

//exemplo1  - sincrono
function mostrarCliente(nome) {
    console.log("Cliente:", nome);
}

function realizarVenda(fn) {
    fn('Pedro');   // como é sincrono só passa para a linha do item A qd acabar mostrarCliente(nome) ;
    console.log('1 - Item A');
    console.log('2- Item B');
    console.log('3- Item c');

}
//realizarVenda(mostrarCliente);

//exemplo 2 - sincrono
function contador() {
    var num = 5;
    for (var i = 0; i < num; i++) {
        console.log(i);
    }
}

function iniciar(callback) {
    console.log('Inicio');
    callback();
    console.log('Fim');
}
iniciar(contador);
// ####################################### exemplo 3 

function propaganda(tempo) {
    setTimeout(function () {
        console.log('Propaganda >>>>>>>>>>>')
    }, tempo);
}

function rodar(callback) {
    console.log('Inicio');
    callback(3000);
    console.log('App Rodando....');
}
rodar(propaganda);
