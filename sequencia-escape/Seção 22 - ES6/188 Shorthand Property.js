/* No ES6 foi melhorado a forma de declaração de objetos literais, para simplificar e automatizar 
atribuições simples.

- shorthand property - propriedade abreviada
- shorthand methos - método abreviado
- name computed property/method - nome de propriedades/métodos computadas */

let nome = 'Maria', idade = 37, cidade = 'Sobral';

// ES5
let objPessoa = { nome: nome, idade: idade, cidade: cidade };

console.log('objPessoa', objPessoa);

//ES6 - shorthand property 
let objPessoaES6 = { nome, idade, cidade };

console.log('objPessoa', objPessoaES6);



