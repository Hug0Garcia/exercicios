//Testar o padrão (método RegExp.test())

//literal
var regexpLiteral = /js/; // atenção RegExp é regular
var regexpConstrutor = new RegExp("Jedi");

var string = "Formação Completa Javascript - Mestre JS Jedi";

console.log(regexpLiteral.test(string));
console.log(regexpConstrutor.exec(string));
//test.() verifica se existe e retorna boolean 
//exec.() verifica o index e retorna o primeiro