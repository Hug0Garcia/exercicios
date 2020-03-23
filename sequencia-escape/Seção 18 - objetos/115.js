//Verificar se uma propriedade ou méto existo no objeto em questão ou em sua cadeia de protótipos
var pedido = new Object();
pedido.total = 233.45;

// verificar se existe cliente em pedido
console.log("cliente in pedido: ", "cliente" in pedido);                // false
console.log("cliente in pedido: ", pedido.cliente);                     //undefine
console.log("total in pedido: ","total" in pedido);                     // true
// o 'in' verifica se a propriedade ou método existe no objeto e na cadeia de protótipo
console.log("###############################");
console.log("toString in pedido:" , "toString" in pedido);                                   //true
console.log("total in pedido com hasOwnProperty:" , pedido.hasOwnProperty("total"));         //true
console.log("toString in pedido com hasOwnProperty:" , pedido.hasOwnProperty("toString"));   //false
//como deletar propriedades do objeto (método tb)
pedido.totalItens = 23;
console.log("Removeu a prop. totalItens?", delete pedido.totalItens);
console.log("totalItens?", pedido.totalItens);
console.log(pedido);
console.log(pedido.total);