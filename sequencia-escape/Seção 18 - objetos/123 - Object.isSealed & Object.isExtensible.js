//! Selando objetos com Object.seal e isSealed
/* como selar um objeto selado não é extensível (pode add prop.)
e também as propriedades não são configuráveis(não é possível deletar prop.)*/

var livro = {
    titulo: 'Javascript Mestre Jedi',
    paginas: 12345

};

console.log("Object.isExtensible(livro): ", Object.isExtensible(livro));
console.log("Object.isSealed(livro): ", Object.isSealed(livro));
console.log();
console.log("Selando o objeto:", Object.seal(livro));
console.log();
console.log("Object.isExtensible(livro): ", Object.isExtensible(livro));
console.log("Object.isSealed(livro): ", Object.isSealed(livro));
console.log();
// add 
livro.ebook = true;
console.log("add ebook livro.hasOwnProperty('ebook'): ", livro.hasOwnProperty('ebook'));
console.log("Apagar livro.titulo: ", delete livro.titulo);
console.log("Adicionar ebook livro.hasOwnProperty('titulo'): ", livro.hasOwnProperty('titulo'));
console.log();
livro.paginas = 1498;
console.log(Object.getOwnPropertyDescriptors(livro));
//Object.defineProperty(livro, 'paginas', {configurable: true});
