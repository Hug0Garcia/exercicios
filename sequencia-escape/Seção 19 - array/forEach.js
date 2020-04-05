console.log("");
//forEach Método adicionado no ECMAScript 5 no Array.prototype
var totalVenda = 0;
var vendaItens = [
    { codigo: 0, preco: 2.2, qtde: 2 },  // => item
    { codigo: 1, preco: 7.99, qtde: 5 },
    { codigo: 2, preco: 12, qtde: 3 }
];
//forEach = função callback (função anónima)
vendaItens.forEach(function (item, index, array) {
    var Subtotal = item.qtde * item.preco;
    totalVenda += Subtotal;
    item.Subtotal = Subtotal + ' €';
})


console.log('TOTAL: R$', totalVenda);
console.log("");
console.log('ItensSubtotal: ', '\n', vendaItens);
//ARRAY MULTIDIMENSIONAL
console.log("");
console.log("");
var array = [[1, 2, 3], ['a', 'b', 'c']];
console.log(array[0]);
console.log(array[1]);
console.log("");
console.log(array[0][0]);
console.log(array[1][0]);
console.log("");
var produtos = [
    [{ codigo: 28, nome: 'camisa 1' }, ['amarelo', 'azul', 'vermelho']], //0
    [{ codigo: 52, nome: 'camisa 2' }, ['amarelo', 'preto', 'vermelho']] //1
];
console.log(produtos[0]);
console.log(produtos[0][0]['nome'], + " Cores: " + produtos[0][1].toString());