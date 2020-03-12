var nome = "Maria Corona";
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
console.log('replace("a", "4"):', nome.replace("a", "4"));