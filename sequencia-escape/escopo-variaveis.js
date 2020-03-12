//scopo global
var cliente ="Pedro";


//escopo local
function realizarVenda(){
    msgGlobal = "Variável global";
     var msg = "Venda realizada com sucesso!";
    console.log("Cliente:",cliente);
    console.log(msg);
}

realizarVenda();
console.log(msgGlobal); 
//console.log(msg);    // como foi pedido após a função ser executada não deixa extrair a informação de dentro da função porque tem escopo local
