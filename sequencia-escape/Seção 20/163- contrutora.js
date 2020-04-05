/* Construtor é uma função que trabalha junto com o operador new com objetivo de servir
como um tipo de classe parar criar/instanciar objetos personalizados no Javascript com
propriedades e métodos específicos. Desta forma podemos ter um molde para criar objetos
personalizados de forma simples sem precisar repetir código*/
//Exemplos de construtores já existentes no JS: Object, Function, Array, Number...

//Exemplo 1

function Carro() {  //função construtora tem sempre a primeira letra grande
    //....
}

var objCarro1 = new Carro();
var objCarro2 = new Carro;
var objCarro3 = objCarro2;

console.log('objCarro1 :', objCarro1);
console.log('objCarro2:', objCarro2);
console.log('objCarro1 == objCarro2: ', objCarro1 == objCarro2);
console.log('objCarro3 == objCarro2: ', objCarro3 == objCarro2);

console.log('typeof objCarro1:  :', objCarro1);
console.log('objCarro1 instanceof Carro  :', objCarro1 instanceof Carro);
console.log('objCarro1.constructor  == Carro :', objCarro1.constructor == Carro);

console.log("");
console.log("Exemplo 2");
console.log("");
//Exemplo : Um construtor que retorne objetos (ex:pessoas)

function Pessoa() {
    this.nome;   // this refere-se a si mesmo
    this.cpf;
    this.getNomeCpf = function () {
        return "Nome: " + this.nome + " - CPF : " + this.cpf;
    }
}

var objPessoa = new Pessoa();
objPessoa.nome = 'Maria';
objPessoa.cpf = '123124123414';
console.log('objPessoa: ', objPessoa);
console.log(objPessoa.getNomeCpf());

console.log("");
console.log("Exemplo 3");
console.log("");
//exemplo 3

function Pessoa2(nome, cpf) {
    this.nome = nome;   // this refere-se a si mesmo
    this.cpf = cpf;
    this.getNomeCpf = function () {
        return "Nome: " + this.nome + " - CPF : " + this.cpf;
    }
}

var objPessoa2 = new Pessoa2('Pedro', '12312312');

console.log('objPessoa2: ', objPessoa2);
console.log(objPessoa2.getNomeCpf());