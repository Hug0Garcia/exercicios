// ! como obter as chaves (nome de propriedades) do objeto
// TODO LIST
// ? NICE 
var produtoTeste = { nome : 'teste', valor: 12, ativo : true}

var chaves = Object.keys(produtoTeste);
console.log("Object.keys(produtoTeste)", chaves);
console.log("Tipo com typeof", typeof chaves);

//TODO########## Qual a função construtora?
console.log("Object.prototype.toString.call(chaves): ", Object.prototype.toString.call(chaves));

// TODO########## Verificar se de facto é array
console.log(Array.isArray(chaves));

//acessar os valores de propriedades do objecto
for(var prop in produtoTeste){
    console.log(produtoTeste[prop]);
}

//ES2017 ES5
var valoresProp = Object.values(produtoTeste);
console.log("Object.values(produtoTeste):", valoresProp);

//!Recuperar as propriedades e valores do objeto
var chavesValorArray = Object.entries(valoresProp); // em array
var chavesValorObjeto = Object.entries(produtoTeste); // em array
console.log(chavesValorArray);
console.log(chavesValorObjeto);

//! Recuperar os valores dentro dos objetos
for(const [chave , valor] of chavesValorObjeto){
    console.log(chave+":",valor);
}