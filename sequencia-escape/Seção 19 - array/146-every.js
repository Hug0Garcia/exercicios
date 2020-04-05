/* Every - Este método testa se todos os elementos do array 
passam pelo teste implementado pela função fornecida.*/
//! Retorna true ou false, sendo que irá retorna true SOMENSE SE TODOS OS TESTES RETORNAREM TRUE

var numeros = [0, 2, 3, 5, 6, 8, 4, 12];

console.log('numeros', numeros);
var retorno = numeros.every(function (item, indice, array) {
    return item < 20;
});

console.log(retorno);