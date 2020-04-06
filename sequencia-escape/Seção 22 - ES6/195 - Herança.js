//Herança
/*
//ES5 
function PessoaES5(nome, cpf) {  //construtor
    //propriedades
    this.nome = nome;
    this.cpf = cpf;
}
//#2
PessoaES5.prototype.nomeUpper = function () { //qd crio a função estou a criar o método
    return this.nome.toUpperCase();
}
function Funcionario(nome, cpf, matricula) {
    PessoaES5.call(this, nome, cpf);
    this.matricula = matricula;
}
Funcionario.prototype = Object.create(PessoaES5.prototype); // para copiar #2 para o Funcionário
Funcionario.prototype.constructor = Funcionario;

var obj1Funcionario = new PessoaES5("Carla", '9213912391', '2324');
var obj2Funcionario = new PessoaES5("Carla", '9213912391', '2324');

console.log("obj1Funcionario.nome: ", obj1Funcionario.nome);
console.log("obj1Funcionario.cpf: ", obj1Funcionario.cpf);
console.log("obj1Funcionario.matricula: ", obj1Funcionario.matricula);
console.log("obj1Funcionario.nomeUpper(): ", obj1Funcionario.nomeUpper());
*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ES6
class PessoaES6 {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    nomeUpper() {
        return this.nome.toUpperCase();
    }
}
/* A palavra-chave super é usada para acessar o objeto pai de um objeto, 
em outros casos, é usada para acessar a classe pai de uma classe.*/

class FuncionarioES6 extends PessoaES6 {
    constructor(nome, cpf, matricula) {
        super(nome, cpf);  //ele chama a classe construtora pai PessoaES6 com (nome,cpf) dele
        this.matricula = matricula;
    }
    matriculaPessoa() {
        return `${this.matricula} - ${this.nome.toUpperCase()}`;
    }
}

var obj1FuncionarioES6 = new FuncionarioES6("João", '9213912391', '2324');
console.log("");
console.log("obj1Funcionario.nome: ", obj1FuncionarioES6.nome);
console.log("obj1Funcionario.cpf: ", obj1FuncionarioES6.cpf);
console.log("obj1Funcionario.matricula: ", obj1FuncionarioES6.matricula);
console.log("obj1Funcionario.nomeUpper(): ", obj1FuncionarioES6.nomeUpper());
console.log("obj1Funcionario.matriculaPessoa(): ", obj1FuncionarioES6.matriculaPessoa());