//! freeze  || isFrozen
/* Congelando objecto, irá ficar: não extensível, não configurável e não será possível gravar dados
não pode ser adicionadar propriedades, 
não pode deletar propriedades e 
nem setar dados nas propriedades

depois de congelado não pode reverter o processo
-> o congelamento afeta apenas o objeto em questão e não a cadeia de protótipos*/
var artigo = {
    auto: 'prof. X',
    titulo: 'Classes em JS'
};
console.log("Object.isFrozen(artigo): ", Object.isFrozen(artigo));
console.log("Object.isExtensible(artigo): ", Object.isExtensible(artigo));
console.log("Object.isSealed(artigo): ", Object.isSealed(artigo));
console.log("");
//! Object.freeze(artigo) o que altera o freeze?  =>  writable : false  && configurable: false
console.log("Object.freeze(artigo) :", Object.freeze(artigo));

console.log("Object.isFrozen(artigo): ", Object.isFrozen(artigo));
console.log("Object.isExtensible(artigo): ", Object.isExtensible(artigo));
console.log("Object.isSealed(artigo): ", Object.isSealed(artigo));

console.log(Object.getOwnPropertyDescriptors(artigo));

artigo.paginas = 5;
artigo.titulo = "PHP"
console.log("delete artigo.titulo: ", delete artigo.titulo);
console.log(Object.getOwnPropertyDescriptors(artigo));