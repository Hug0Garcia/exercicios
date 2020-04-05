//ECMS5 - MAP
/* Map - este método itera por todos os elementos de uma array com valores atribuídos
e que não sejam undifined*/
/*
recebe uma função (callback) por parâmetro no qual é chamada para cada item/elemento do array
a função pode receber até três parâmteros:
1- valor - elemento array
2- índice do elemento
3- o próprio array                                                                  */
/* Em cada iteração a função callback irá retornar um valor que irá compor um novo array
retornado pelo map */
// NÃO MODIFICA O ARRAY ORIGINAL
/* Para que o map itere no array, ele faz uma espécie de cópia temporária, caso sejam adicionados
ou removidos item depois do laço do map iniciar tais elementos não serão visíveis pelo map */

var numeros = [2, 4, 8, 10, 12];

var dobro = numeros.map(function (Elemen, indiceDoArray, array) {
    return Elemen * 2;
});
console.log("Novo array, dobro : ", dobro);
