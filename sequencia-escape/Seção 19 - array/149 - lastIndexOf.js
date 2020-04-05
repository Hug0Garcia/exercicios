//IndexOf e lastIndexOf
//Procurand um valor específico em um array e retornam seu índice

// IndexOf procura do primeiro para o último index
// lastIndexOf procura do últiumo para o primeiro
var valores = ['maria', 'josé', 'fernanda', 'paulo'];

var retorno1 = valores.indexOf('fernanda');
console.log(retorno1);

var retorno2 = valores.indexOf('joão'); // retorna -1 se não encontrar nada
console.log(retorno2 + ' ' + ': Retorna -1 quando não encontra');

//lastIndexOf
var retorno3 = valores.lastIndexOf('josé');  // é case sensitive
console.log(retorno3);

function pesquisarNome(nome) {
    var retornoPesq = valores.indexOf(nome);
    if (retornoPesq == -1) {
        return 'Não foi encontrado esse nome no array'
    } else {
        return retornoPesq + " - " + valores[retornoPesq];
    }
}

var retorno4 = pesquisarNome('paulo');
console.log('retorno4: ', retorno4);