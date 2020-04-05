
//>>>>>>this em escopo de objeto:
let pessoaObjetoLiteral = {
    nome: 'João',
    exibirThis: function () {
        console.log(">>>>>this em escopo objeto literal - método:", this);
        console.log(">>>>>this == window", this == window);
        console.log(">>>>>this == pessoaObjetoLiteral", this == pessoaObjetoLiteral);
    }
}

pessoaObjetoLiteral.exibirThis(); // ao invocar this com a função fica ligado
console.log('-------------------------------------');

function Pessoa(namePar) {
    this.nameInterno = namePar;
    this.exibirThis = function () {

        console.log(">>>>>this em escopo objeto função construtora - método:", this);
        console.log(">>>>>this == window", this == window);
        console.log(">>>>>this == objPessoa", this == objPessoa);
        console.log('this.nameInterno', this.nameInterno);
    }
}

var objPessoa = new Pessoa('Maria');
objPessoa.exibirThis();

let exibirThisPessoa = objPessoa.exibirThis;
console.log('exibirThisPessoa: ', exibirThisPessoa);
exibirThisPessoa();
console.log('-------------------------------------');

exibirThisPessoa.bind(objPessoa)();  // => bind utiliza o this do argumento dentro bind
console.log('------------------exibirThisPessoa.bind(pessoaObjetoLiteral)();  ::::');
exibirThisPessoa.bind(pessoaObjetoLiteral)(); // criado com let e não função construtora
