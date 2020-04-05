/*
'user stric'
O modo restrito é um recurso definido no ES5 para executar o código de forma rigorosa
e exibir erros que antes eram silenciados na execução.*/

/*
console.log('###this em contexto de execução global objeto window');

function fn() {
    console.log(">>> this em escopo de função: ", this);  // window
    console.log('this == windows: ', this == windows);

    function fnInterna() {
        console.log(">>> this em escopo de função interna: ", this); // window
        console.log('this == windows: ', this == windows);
    }
    fnInterna();
}

fn();// função amarrada ao objeto que a está a invocar a função em contexto global (window)
*/
var nome = 'paulo';

function fnNome() {
    let nome = 'fernanda';
    console.log('this.nome: ', this.nome);   //faz referência ao objeto que está invocar a função window
    console.log('nome: ', nome);             //fernanda porque procura dentro da função
}
fnNome();
