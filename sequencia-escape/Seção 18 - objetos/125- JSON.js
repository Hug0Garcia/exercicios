//JSON é u object
// suporta string, number,object,array,true,false,null 

var pessoa = {
    nome: "João Silva",
    cpf: 1231,
    dataNascimento: new Date(1974, 3, 16),
    ativo: true,
    "testeString": 'teste string',
    contactos: [123123, 123123],
    endereco: {
        rua: "Rua B",
        numero: 367,
        pontoRef: {
            ponto1: "Ponto ref 1",
            ponto2: "Ponto ref 2"
        }
    },
    expressaoReg: /teste/g,
    error: new Error("Gerou um erro"),            //JSON NAO PROCESSA = null
    funcao: function () {
        return "Teste";
    },
    valorNull: null,
    valorUndefined: undefined,
    valorNaN: NaN,                                //JSON NAO PROCESSA = null
    varlorInfinity: Infinity,                     //JSON NAO PROCESSA = null
    varlorInfinityNeg: -Infinity,                 //JSON NAO PROCESSA = null
    stringVazia: "",
}
//console.log(pessoa);
var retornoObjJson = JSON.stringify(pessoa);   // STRING
console.log(retornoObjJson);
console.log("retornJsonParaObjeto tipo?", typeof retornoObjJson);
var formatoJson = '{"nome":"João Silva","cpf":1231,"dataNascimento":"1974-04-15T23:00:00.000Z","ativo":true,"testeString":"teste string","contactos":[123123,123123],"endereco":{"rua":"Rua B","numero":367,"pontoRef":{"ponto1":"Ponto ref 1","ponto2":"Ponto ref 2"}},"expressaoReg":{},"error":{},"valorNull":null,"valorNaN":null,"varlorInfinity":null,"varlorInfinityNeg":null,"stringVazia":""}';
console.log("");

var retornJsonParaObjeto = JSON.parse(formatoJson);   // parsar string para objeto
console.log("retornJsonParaObjeto tipo?", typeof retornJsonParaObjeto);
console.log(retornJsonParaObjeto);