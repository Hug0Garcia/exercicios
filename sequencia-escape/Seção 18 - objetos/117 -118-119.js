// Tipos de propriedades de objeto e atributos
/*
Em objetos podemos criar dois tipos de propriedades
1. propriedades de Dados: Armazena o dado internamente em seu atributo value

2. Propriedades de Acesso: Prover meios para informar e recuperar dado de uma propriedades pelos atributos getter setter;

// TODO     Cada propriedade tem atributos diferentes

1. Propriedades de Dados:
 value: 'Marcelo' => valor : armazena o valor da propriedade
 writable: true => boolean que informar se pode setar dado
 enumerable: true => Determina se pode iterar pela propriedade (visivel nos laços, for in & for Of)
 configurable: true => Determina se propriedade pode ser alterada

 2. Propriedades de acesso tem os seguintes atributos internamente:
 get: [Function: get], - Função para retornar o dado;
 set: [Function: set], - Função para setar um dado em propriedade de dado;
 enumerable: false,
 configurable: false
*/
// criando propriedades de objeto de acesso e dado 
// atributos de propriedade 
// métodos acessores get & set
/*
var folhaPagamento ={
    _total: 0, // nomenclatura para informar que este atributo é privado e não deve ser acessado diretamente
    set total(valor){
        //novoValor = valor + 1;
        console.log("set");
        this._total = valor;
    },
    get total (){
        console.log("get");
        return this._total;
        }
} 
folhaPagamento.total = 67233.42;
console.log("Total folha de pagamento: R$", folhaPagamento.total);

console.log("Atributos das propriedades do objeto: ", Object.getOwnPropertyDescriptors(folhaPagamento));

// Verificar se uma propriedade é iterável/enumerável
var objTeste = {a:1, b:2, c:3 }
console.log("a in objTeste: ", "a" in objTeste);
console.log("objTeste.propertyIsEnumerable('a'): ",  objTeste.propertyIsEnumerable("a"));
console.log("objTeste.propertyIsEnumerable('toString'): ",  objTeste.propertyIsEnumerable("toString"));
console.log("objTeste.propertyIsEnumerable('length'): ",  objTeste.propertyIsEnumerable("length"));

console.log(objTeste);

for (var [k,v] of Object.entries(objTeste)){
    console.log(k,v);
}
// ! definir propriedades
// por padrão numeravel e configurable são true----------------------------------//
Object.defineProperty(objTeste, "a", {
    enumerable: false,
    configurable: false
});
console.log("");
for (var [k,v] of Object.entries(objTeste)){
    console.log(k,v);
};
console.log("delete objTeste.a ? : ", delete objTeste.a); // => não permite alterar porque está configurable: false
console.log("");
//tornar uma propriedade gravável em não gravável--------------------------//
objTeste.b = 10;
console.log("objTeste.b", objTeste.b);
Object.defineProperty(objTeste, "b", {
    writable: false
});
objTeste.b = 20;
console.log("objTeste.b", objTeste.b);

Object.defineProperty(objTeste, "b", {
    value: 30
});
console.log("objTeste.b", objTeste.b);
console.log("");
//Definindo propriedades e atributos --------------------------------//
var objAluno2 = {};
Object.defineProperties(objAluno2, {
    nome:{
        value: "Fernanda",
        enumerable: true,
        writable: true
    },
    turma:{
        value:"A",
        enumerable:true,  //falso, não vai aparecer no console.log
        configurable: false,
        writable: false
    }
});

console.log(objAluno2);
objAluno2.turma = "B";
delete objAluno2.turma;
console.log(objAluno2);

var objAluno3 ={};

Object.defineProperties(objAluno3, {
    _nome: {
        value: "Marcelo",
        enumerable:true,
        configurable:true,
        writable: true
    },
    nome: {                                            /// Encapsulamento
        get: function(){
            return this._nome + "turma : A"
        },
        set: function(valor){
            this._nome = valor;
        }
    }
});
objAluno3.nome = "João";
console.log("Nome aluno: ", objAluno3.nome);

//recuperar as informações de atributos de propriedades
var objCarro = { marca: 'fiat', cor: 'preta' };

console.log("Object.getOwnPropertyDescriptors(objCarro): ", Object.getOwnPropertyDescriptors(objCarro));
Object.defineProperty(objCarro, 'cor', { value: 'pretas', enumerable: false, configurable: false, writable: false });
console.log("Object.getOwnPropertyDescriptors(objCarro): ", Object.getOwnPropertyDescriptors(objCarro));
console.log("Object.getOwnPropertyDescriptor(objCarro, 'marca'): ", Object.getOwnPropertyDescriptor(objCarro, "marca"));
console.log("Object.getOwnPropertyDescriptor(objCarro, 'length'): ", Object.getOwnPropertyDescriptor(objCarro, "length"));

var retorno = Object.getOwnPropertyDescriptor(objCarro, "marca");
console.log(retorno);
console.log(Object.prototype.toString.call(retorno));
console.log("");
*/
//Definir objecto como não extensível

var objMoto = { marca: 'honda', cor: 'vermelha' };
console.log("Object.getOwnPropertyDescriptors(objMoto): ", Object.getOwnPropertyDescriptors(objMoto));
console.log("Object.isExtensible(objMoto): ", Object.isExtensible(objMoto));
// ! Bloquear a extensão de objectos = > Object.preventExtensions
console.log("Object.preventExtensions(objMoto): ", Object.preventExtensions(objMoto));
objMoto.placa = 'hdf1234';
objMoto.ligar = function () { return "moto ligada" };
objMoto.cor = 'preta'; // só é não extensivel para novos campos, podemos alterar os existentes
console.log("Object.getOwnPropertyDescriptors(objMoto): ", Object.getOwnPropertyDescriptors(objMoto));
console.log("Object.isExtensible(objMoto): ", Object.isExtensible(objMoto));
console.log("Placa in objMoto: ", 'placa' in objMoto);
console.log("Ligar in objMoto: ", 'ligar' in objMoto);

console.log("delete objMoto.cor: ", delete objMoto.cor);
console.log("Object.getOwnPropertyDescriptors(objMoto): ", Object.getOwnPropertyDescriptors(objMoto));
//Object.defineProperty(objMoto, 'cor', { value: 'Amarela' }); o objeto não é extensivel, dá erro