function nomeCompletoUpperCase(nome1, nome2, nome3) {
    var nomeCompleto = nome1 + " " + nome2 + " " + nome3;
    return nomeCompleto.toUpperCase();
}

//console.log(nome2);
console.log(nomeCompletoUpperCase('joao', 'jaquim', 'Aguiar'));




//

function nomeCompletoUpperCaseV2(nome1, nome2, nome3) {
    var nomeCompleto = "";

    if (arguments.length > 3) {
        for (var indice in arguments) {
            nomeCompleto += " " + arguments[indice];
        }
    } else {
        nomeCompleto = nome1 + " " + nome2 + " " + nome3;
    }

    return nomeCompleto.toUpperCase();
}

console.log("Nome Completo UpperCase: ", nomeCompletoUpperCaseV2('Maria', 'Paula', 'Ferreira', 'Silva'));
