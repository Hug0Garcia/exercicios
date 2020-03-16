var obj01 = new Object ();
var obj02 = new Array(1,2,3);
var obj03 = new Date();
var obj04 = new Error("Ocorreu um erro");

var objetoPessoa = {
    nome: "João Pedro da Silva",
    cpf: 1234124123,
    dataNascimento: new Date(1985, 5, 11),
    ativo: true,
    "teste prop": "teste",
    contatos: [123415415, 21321312312, 12312312],
    endereco: {rua: "Rua A", numero: 2534, cep: 748547453},
    saudacao: function(){
        return "Olá me chamo-me "+ this.nome + "!";
    }
}

console.log(objetoPessoa);

console.log("########");
console.log("nome: ", objetoPessoa.nome);
console.log("cpf: ", objetoPessoa.cpf);
console.log("Data de Nascimento: ", objetoPessoa.dataNascimento);
console.log("Ativo: ", objetoPessoa.ativo);
console.log("Teste Prop: ", objetoPessoa["test prop"]);
console.log("Contactos : ", objetoPessoa.contatos[0]);
//retiriar todos os dados dentro do array que o objeto contem
for(var contato of objetoPessoa.contatos){
    console.log("Contato: ", contato);
}
//For in para retirar todos os dados do objecto
for(var key in objetoPessoa.endereco){
    console.log(key, objetoPessoa.endereco[key]);
}
//chamar método
console.log(objetoPessoa.saudacao());