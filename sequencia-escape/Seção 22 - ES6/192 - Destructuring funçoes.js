// Desestruturação como argumentos

let objProduto = { descricao: "Livro JavaScript", preco: 79.52, pags: 100 }
let objCliente = { nome: 'Pedro' }

function venda({ nome }, { descricao, preco, pags: paginas }, qtde = 1) {  //desestruturação como parametros
    console.log(`Cliente: ${nome}`);
    console.log(`Produto: ${descricao} - Páginas ${paginas}`);
    console.log(`Qtde: ${qtde} Preço: ${preco}`);
    console.log(`Total: ${qtde * preco}`);
    console.log(``);

}

venda(objCliente, objProduto, 2);