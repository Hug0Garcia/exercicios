//Some- este método testa se alguns dos elementos no array passam no teste implementado
//pela função atribuída
// Retorn True ou false, sendo que irá retornar true se pelo menos um elemento do array passar no teste

var x = [1, 12, 312, 4, 23324];

var retorno1 = x.some(function (item, indice, arrayAll) {
    return item > 10;
});

console.log(retorno1);