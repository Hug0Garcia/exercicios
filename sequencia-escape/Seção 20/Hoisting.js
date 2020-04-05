//Hoisting a variável é criada após ter sido lida em algum lado do código eX:
var sobrenome = "Paula";
console.log(sobrenome); //automaticamente o JS vê se existe mas não lê o parametro


//Hoisting com => Com funções 
msgSaudacao();
function msgSaudacao() {
    console.log("Olá");
}

//Exemplo 2- um host não inicializa o valor de uma variável ## msg is not a function
msg();

var msg = function () {
    console.log("Oláaaaaaaaaaaaaa");
}