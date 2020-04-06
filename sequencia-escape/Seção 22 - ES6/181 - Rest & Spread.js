/*
...theArgs = juntar em um array
...Spread = expande um array em elementos distintos  */

function somarNumeros(...theArgs) {  //rest parameter  (como parametro)/ array
    let retornoSoma = theArgs.reduce(function (acumulador, valor, indice, array) {
        return acumulador = acumulador + valor;
    });
    console.log('Resultado soma=', retornoSoma);
}

let numeros = [2, 8, 4, 12];

somarNumeros(...numeros); // spread