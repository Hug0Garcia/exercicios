//Classe é um recurso bastante utilizado na programação orientada a objetos para instanciar objeto

//ES5
function PessoaES5(nome, cpf) {  //construtor
    //propriedades
    this.nome = nome;
    this.cpf = cpf;
}
PessoaES5.prototype.nomeUpper = function () { //qd crio a função estou a criar o método
    return this.nome.toUpperCase();
}
var objPessoa1ES5 = new PessoaES5('Carla', '2134234234');
var objPessoa2Es5 = new PessoaES5('Fernanda', '45435212');

console.log('objPessoa1ES5: ', objPessoa1ES5);
console.log('objPessoa1ES5.nomeUpper(): ', objPessoa1ES5.nomeUpper());
console.log('objPessoa2Es5: ', objPessoa2Es5);
console.log('objPessoa2ES5.nomeUpper(): ', objPessoa2Es5.nomeUpper());
console.log("");
//ES6 
class PessoaES6 {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    nomeUpper() {
        return this.nome.toUpperCase();
    }
}

var objPessoa1ES6 = new PessoaES6('Carla', '2134234234');
var objPessoa2ES6 = new PessoaES6('Fernanda', '45435212');

console.log('objPessoa1ES6: ', objPessoa1ES6);
console.log('objPessoa1ES6.nomeUpper(): ', objPessoa1ES6.nomeUpper());
console.log('objPessoa2ES6: ', objPessoa2ES6);
console.log('objPessoa2ES6.nomeUpper(): ', objPessoa2ES6.nomeUpper());