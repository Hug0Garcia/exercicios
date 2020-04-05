//Propriedades e funções de função

var funcao = function () { };
console.log("typeof funcao: ", typeof funcao);

function somar(a, b) { return a + b };
function subtrair(a, b) { return a - b };

calculadora.operacoes = [];
calculadora.contador = 0;

function calculadora(operacao, operando1, operando2) {
    var resultado = 0;
    if (operacao == 'somar') {
        resultado = somar(operando1, operando2);
    } else if (operacao == 'subtrair') {
        resultado = subtrair(operando1, operando2);
    } else {
        return 'Operacao inválida!'
    }
    setarMemoriaCalculadora(operacao, operando1, operando2, resultado)
    return resultado;
}
function setarMemoriaCalculadora(operacao, operando1, operando2, resultado) {
    var objCalc = { operacao: operacao, operando1: operando1, operando2: operando2, resultado: resultado };
    calculadora.operacoes.push(objCalc);
    calculadora.contador++;
}
calculadora.exibirOperacoesRealizadas = function () {
    console.log("####>>> : " + calculadora.contador + " operacoes realizadas!");
    for (const op of calculadora.operacoes) {
        var sinal = op.operacao == 'somar' ? ' + ' : ' - ';
        console.log('->>>>' + op.operacao + ":");
        console.log('->>>>' + op.operando1 + sinal + op.operando2 + ' = ' + op.resultado);
    }
}

console.log("Soma: ", calculadora('somar', 20, 30));
console.log("Soma: ", calculadora('somar', 45, 113));
console.log("Subtrair: ", calculadora('subtrair', 20, 10));
calculadora.exibirOperacoesRealizadas();


