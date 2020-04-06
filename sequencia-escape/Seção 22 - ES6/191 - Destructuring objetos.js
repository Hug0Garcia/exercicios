/* Destructuring (Destruturação de dados) é uma forma de extração de dados */
// Desestruturação de objetos

let objPessoa = {
    nome: 'Fernanda Silva',
    idade: 42,
    email: 'fernanda@gmail.com',
    sexo: 'feminino',
    telefone: ' 34234234',
    endereco: { rua: 'Rua', numero: 698, cidade: 'Fortaleza', estado: 'CE' },
    site: undefined
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ES5

var telefone = objPessoa.telefone;
var email = objPessoa.email;

console.log(`>>>>Email ${email} - telefone : ${email}`);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ES6

let { nome, idade } = objPessoa;  //lê a extração de dados da variável objPessoa

console.log(`>>>>Nome ${nome} - Idade : ${idade}`);

//ROTULAR ::: para extrair valores com nomes de variáveis diferentes para não ter de usar as variáveis
let { nome: nomeCompleto, telefone: celular } = objPessoa;

console.log(`>>>>Nome Completo:  ${nomeCompleto} - Celular : ${celular}`);

console.log("");
//
let { rua, numero, cidade, estado } = objPessoa.endereco;
// ou
//let {endereco : {rua, numero, cidade, estado}} = objPessoa; 
console.log(rua, numero, cidade, estado);
console.log("");
//valor padrao
let { escola, pais, site } = objPessoa;
console.log(escola, pais = 'Brasil', site = 'www.meusite.com');
console.log("");
