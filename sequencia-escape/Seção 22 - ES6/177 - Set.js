/* O objeto Set permite que você armazene valores únicos de qualquer tipo, 
desde valores primitivos a referências a objetos.
Sintaxe: var meuSet = new Set([iterable]);

Não se pode adicionar 2 vez o mesmo número;

Set.add()
Set.clear()
Set.delete()
Set.entries()
Set.forEach()
Set.has()
Set.values()  */

console.log('Utilizando o objeto Set');
var meuSet = new Set();

meuSet.add(1); // meuSet [1]
meuSet.add(5); // meuSet [1, 5]
meuSet.add(5); // 5 já foi adicionando, portanto, meuSet [1, 5]
meuSet.add("texto");
var o = { a: 1, b: 2 };
meuSet.add(o);

meuSet.add({ a: 1, b: 2 }); //  o está referenciando outro objeto

meuSet.has(1); // true
meuSet.has(3); // false, 3 não foi adicionado ao set (Conjunto)
meuSet.has(5);              // true
meuSet.has(Math.sqrt(25));  // true
meuSet.has("Texto".toLowerCase()); // true
meuSet.has(o); // true

meuSet.size; // 5

meuSet.delete(5); // remove 5 do set
meuSet.has(5);    // false, 5 já foi removido

meuSet.size; // 4, nós simplesmente removemos um valor

console.log(meuSet) // Set { 1, 'texto', { a: 1, b: 2 }, { a: 1, b: 2 } }
console.log('');
console.log('##################Iterando objetos Set#################################');
for (let item of meuSet) console.log(item);  // loga os itens na ordem: 1, "texto" 
for (let item of meuSet.keys()) console.log(item);  //loga os itens na ordem: 1, "texto" 
for (let item of meuSet.values()) console.log(item); // loga os itens na ordem: 1, "texto" 
for (let [key, value] of meuSet.entries()) console.log(key);



// a conversão entre Set e Array
var mySet2 = new Set([1, 2, 3, 4]);
var set1 = new Set([1000, 3000, 2500, 1240]);
var set2 = new Set([1000, 3, 2500, 124]);
var mySet3 = [10, 20, 30, 40];
console.log('mySet2.size', mySet2.size); // 4
console.log([...mySet2]); // [1,2,3,4]
console.log([...mySet3]);

var intersection = new Set([...set1].filter(x => set2.has(x)));
console.log('intersection : ', intersection);


// Iterar entradas set com forEach
meuSet.add(document.body);
meuSet.has(document.querySelector("body"));

meuSet.forEach(function (value) {
    console.log(value);
});

console.log('');
console.log('');
console.log('###########Implementando operações básicas entre conjuntos');

function isSuperset(set, subset) {   //setA 1, 2, 3, 4       setB = 2, 3   =>     True

    for (var elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}

function uniao(setA, setB) { //setA 1, 2, 3, 4     setC =3, 4, 5, 6   =>     1,2,3,4,5,6
    var _uniao = new Set(setA);
    for (var elem of setB) {
        _uniao.add(elem);
    }
    return _uniao;
}

function interseccao(setA, setB) {
    var _interseccao = new Set();
    for (var elem of setB) {
        if (setA.has(elem)) {
            _interseccao.add(elem);
        }
    }
    return _interseccao;
}

function diferencaSimetrica(setA, setB) {
    var _diferenca = new Set(setA);
    for (var elem of setB) {
        if (_diferenca.has(elem)) {
            _diferenca.delete(elem);
        } else {
            _diferenca.add(elem);
        }
    }
    return _diferenca;
}

function diferenca(setA, setB) {
    var _diferenca = new Set(setA);
    for (var elem of setB) {
        _diferenca.delete(elem);
    }
    return _diferenca;
}

//Exemplos
var setA = new Set([1, 2, 3, 4]),
    setB = new Set([2, 3]),
    setC = new Set([3, 4, 5, 6]);

console.log('isSuperset :', isSuperset(setA, setB)); // => true
console.log('uniao :', uniao(setA, setC)); // => Set [1, 2, 3, 4, 5, 6]
console.log('interseccao :', interseccao(setA, setC)); // => Set [3, 4]
console.log('diferencaSimetrica :', diferencaSimetrica(setA, setC)); // => Set [1, 2, 5, 6]
console.log('diferenca :', diferenca(setA, setC)); // => Set [1, 2]


console.log('');
console.log('');
console.log('');
console.log('');
console.log('###########Removendo elementos duplicados de um Array');
const numeros = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5]

console.log([...new Set(numeros)])

console.log('');
console.log('');
console.log('###########Relação com objetos String');
var texto = 'India';

var meuSet = new Set(texto);  // Set ['I', 'n', 'd', 'i', 'a']
meuSet.size;  // 5
console.log(meuSet);