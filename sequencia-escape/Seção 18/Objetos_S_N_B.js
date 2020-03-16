var nome = "Maria da Silva";

for(var index in nome){
    console.log("index: ", index, nome[index]);
}
console.log("charAt():", nome.charAt(4));
console.log("charCodeAt():", nome.charCodeAt(4));
console.log("indexOf():", nome.indexOf("n"));
console.log("lastIndexOf():", nome.lastIndexOf("o"));
//concatenar mais dados na string
console.log(nome.concat(" - Seja Bem-vinda!").concat("Obrigada!"));

//retorna código html
console.log("sub: ", nome.sub());
console.log("sup: ", nome.sup());

//buscar uma quantidade de caracter a partir de um índice
console.log(nome.substr(0,5));
console.log(nome.substr(0,nome.length));

console.log(nome.substring(0,10));

//replace - substituir dados em uma string
console.log('replace("a", "?"):', nome.replace("a", "?"));
console.log('replace(/a/, "?"):', nome.replace(/a/, "?"));
console.log('replace(/a/g, "?"):', nome.replace(/a/g, "?"));

console.log(nome = nome.replace(/a/g, "?"));
nome = nome.replace(/\?/g, function(x){
    return "a";
}
)
console.log(nome);

//split - dividr a string
console.log("split " , nome.split());
console.log(nome.split(""));
console.log(nome.split(" "));
console.log(nome.split(" ",1));
console.log(nome.split(/ da /g));

//Texto em caixa alta e baixa
console.log(nome.toLowerCase());
console.log(nome.toUpperCase());

//match - realizar uma pesquisa com RegExp
var texto = "Casa de Papel de Madeira de Ferro";
var resultado = texto.match(/de/g);
console.log("tipo: ", Object.prototype.toString.call(resultado));
console.log(resultado);

//Search
var resultado2 = texto.search(/de/g); //quando não encontra devolve -1  || ou devolve a posição index
console.log("tipo: ", Object.prototype.toString.call(resultado2));
console.log(resultado2);

// Para verificar se uma string começa com algo '?'
console.log(nome.startsWith("Maria"));
console.log(nome.startsWith("Maria",4));

//retirar os espaços antes ou depois do texto.
var texto2 = " texto ";
console.log(texto2.trim());

//valueof - string
var nome2 = new String("Pedro");
console.log(typeof nome2);
console.log(typeof nome2.valueOf());

//precisar repetir o valor da string
console.log(nome2.repeat(3));

// converter para um numero inteiro
var valor = new Number(4.456);
var valorInteiro = Number.parseInt(valor);
console.log(valorInteiro, typeof valorInteiro);

//precisar verificar se é número
var v1 = 23.67;
var v2 = "78";
var v3 = false;
var v4= 32;

console.log(v1, "  ", Number.isInteger(v1));
console.log(v2, "  ", Number.isInteger(v2));
console.log(v3, "  ", Number.isInteger(v3));
console.log(v4, "  ", Number.isInteger(v4));
