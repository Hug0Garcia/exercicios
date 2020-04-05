//Aninhamento de funções e encadeamento de escopos
//Pai não pode aceder aos valores da filha mas sim o inversa



var produto = 'Produto A';

function orcamento() {
    var formaPagamento = 'dinheiro';
    var qtde = 3;
    var preco = 20;
    var total = qtde * preco;

    pedido();
    function pedido() {
        var numeroPedido = 2345;
        var entrega = true;
        var taxaEntrega = 2;
        totalGeral = entrega == true ? total + 2 : total;

        notaFiscal();
        //console.loog("numeroNfe: ", numeroNfe); => Pai não pode aceder aos valores da filha mas sim o inversa
        function notaFiscal() {
            var numeroNfe = 92134923;

            console.log('>>>>Nota: ', numeroNfe);
            console.log('>>>>Produto: ', produto);
            console.log('>>>>Qtde: ', qtde);
            console.log('>>>>Preço: ', preco);
            console.log('>>>>TOtal: ', total);
            entrega == true ? console.log('>>>>Taxa de entrega R$: ', taxaEntrega) : "";
            console.log('>>>Total geral R$: ', totalGeral);

        }
    }
}
orcamento();