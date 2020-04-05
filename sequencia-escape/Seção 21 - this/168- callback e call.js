

function passos() {
    console.log("################Estou no início de passos");
    console.log(">>>>>this em escopo função passos com callback:", this);
    console.log(">>>>>this == window", this == window);
    console.log("###############Estou no fim de pasoss");
    console.log("this.nomePessoa: ", this.nomePessoa);
}

let pessoa = {
    nomePessoa: 'Alexandra',
    andar: function (fnCallback) {
        console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\Estou no início do andar");
        console.log(">>>>>this em escopo objeto método:", this);
        console.log(">>>>>this == window", this == window);
        fnCallback.call(this);
        console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\Estou no fim do andar");

    }

}

pessoa.andar(passos);
/* 1 - Entra em pessoa 
   2 - Entra com escopo local
   3 - this é objeto
   4 - executa o callback => fnCallback(); ou seja passos(); 
   5 - entra na função passos()
   6 - imprime this que é window GLOBAL
   7 - Imprime a confirmar que this é global
   8 - depois de executar toda a linha vai para o fim da função anterior andar(fnCallback)
   9 - Fim
   */

console.log('-------------funcao anonima-------------');

pessoa.andar(function () {
    console.log('valor do this?:', this);  // este this é global
})