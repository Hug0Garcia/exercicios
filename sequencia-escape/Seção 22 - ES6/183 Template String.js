/* Template string ou literais string é um novo recurso do ES6 que permitem interpetrar
strings da forma como a mesma é escrita, com quebra de linha, expressões embutidas e
ainda pode marcar a mesma para chamar uma função.

-Você pode usar string multi-linhas
- Interpolação de Expressões
- Marcar literal string para executar uma função com tagged template strings
*/
console.log("---------------------------------------------------");
let texto = "Olá Jovem! \n Seja bem-vinda ao curso."
console.log(texto);

let texto2 = `Olá Jovem! 
Seja bem - vinda ao curso.`;
console.log(texto2);


//exemplo interpolação de expressões vs placeholders ${}

//(1) Antes do ES6
let expressao = "5 + 5 é igual a " + (5 + 5) + " e 3 * 3 é igual a " + (3 * 3) + ".";
console.log(expressao);
//(2) Depois do ES6
let expressao2 = `5 + 5 é igual a ${5 + 5} e 3 * 3 é igual a ${3 * 3}.`;
console.log(expressao2);

let pessoa = { nome: 'Paulo', idade: 27 };

let apresentacao = `Olá meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos`;
console.log(apresentacao);

//exemplo marcação ou tag (tagged template strings)
let nome = "Maria";
let sobrenome = "Barbosa";

function caixaAlta(arrayTemplate, ...arrayValores) { // arrayTemplate = texto , ...arrayValores = values
    console.log('arrayTemplate: ', arrayTemplate);
    console.log('arrayValores: ', arrayValores);

    let str = '';
    arrayTemplate.forEach(function (texto, indice, array) {
        str += `${texto} ${arrayValores[indice] != undefined ? arrayValores[indice].toUpperCase() : ''}`;
    });

    return str;
}
console.log(caixaAlta`Olá ${nome}, seu sobrenome é ${sobrenome} ?`);
console.log(``);
console.log(`\`` === '`');
console.log("---------------------------------------------------");
var a = 5;
var b = 10;

function tag(strings, ...values) {
    console.log(strings[0]); // "Hello "
    console.log(strings[1]); // " world"
    console.log(values[0]);  // 15
    console.log(values[1]);  // 50

    return "Bazinga!";
}

tag`Hello ${a + b} world ${a * b}`;

console.log("-----------------------Strings Raw----------------------------");
function tag(strings, ...values) {
    console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;

console.log(String.raw`Hi\n${2 + 3}!`); // "Hi\\n5!"