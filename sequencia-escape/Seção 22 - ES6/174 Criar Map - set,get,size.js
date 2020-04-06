/* ES5 = apenas array e objeto
/* No ES6 = incluídas 4 novas: Map,Set, WeakSet e WeakMap*/

/* Map é uma esturtura de mapa de dados organizada por um conkunto de paraes de chjaves/valor
- Permite adicionar dados informando uma chaves personalizada e seu prespectivo valor
- Qualquer tipo de dado pode ser usado como chave ou valor, ex: string, number, object,funtion
- Um objeto Map é facilmente iterável
- Podemos recuperar um elemento do mapa pela chave;
- É possível deletar um elemento ou limpar todo o mapa;
- Existe um recurso para verificar se existe uma chave;

Propriedades e métodos:
Map.prototype.set() - ADICIONAR
Map.prototype.size - QUANTOS ELEMENTOS NO MAP
Map.prototype.get()  - PELA CHAVE
Map.prototype.delelte()  - DELETAR UM ELEMENTO PELA CHAVE
Map.prototype.has()   -VER SE EXISTE CHAVE
Map.prototype.clear()   - PARA LIMPAR O MAP
Map.prototype.forEach()
Map.prototype.entries()  - RETORNAR CHAVE E VALOR
Map.prototype.keys()      - RETORNAR CHAVE
Map.prototype.values() - RETORNAR APENAS VALOR    */

var nomeString = 'Pedro',
    numero = 25.3,
    booleano = true,
    arrayAlfabeto = ['a', 'b', 'c'],
    funcao = function () { console.log('minha fn') },
    objeto = { produto: 'teste' },
    regExp = /teste/gi;

const map = new Map();

map.set('chave', 'valor');
map.set(nomeString, numero);
map.set(booleano, arrayAlfabeto);
map.set(funcao, funcao);
map.set(objeto, objeto);

let retornoMap = map.set(regExp, regExp);
/*
console.log('retornoMap:', 'tipos: ' + Object.prototype.toString.call(retornoMap), retornoMap);

retornoMap.set('123', 'teste');
console.log('map == retornoMap:', map == retornoMap);

console.log(map);
console.log('------------------Map.prototype.size() -------------------');
console.log('size', map.size);

console.log('----------------Map.prototype.get() ---------------------');
let elemento1 = map.get('chave');
let elemento2 = map.get(booleano);
let elemento3 = map.get(funcao);
let elemento4 = map.get(objeto);
let elemento5 = map.get(regExp);
map.forEach(map);

console.log('Elemento 1: ', typeof elemento1, elemento1);
console.log('Elemento 2: ', typeof elemento2, elemento2);
console.log('Elemento 3: ', typeof elemento3, elemento3);
console.log('Elemento 4: ', typeof elemento4, elemento4);
console.log('Elemento 5: ', typeof elemento5, elemento5);
*/
function registrarElementosDoMapa(chave, valor, mapa) {

    console.log(`m[${chave}] = ${valor}`);

}

new Map([
    ['foo', 3],
    ['bar', {}],
    ['baz', undefined]
]).forEach(registrarElementosDoMapa);


console.log('----------------Map.prototype.keys() ---------------------');
var myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set(2, "baz");

var mapIter = myMap.keys();

console.log(mapIter.next().value); // "0"
console.log(mapIter.next().value); // 1

console.log('----------------Map.prototype.set() ---------------------');

var myMap2 = new Map();

// adiciona novos elementos ao map
myMap2.set('bar', 'foo');
myMap2.set(1, 'foobar');

// Atualiza um elemento no map
myMap2.set('bar', 'baz'); // altera o elemento com chave 'bar'
console.log(myMap2);
console.log('----------------Map.delete() ---------------------');

myMap2.delete('bar');

console.log(myMap2);

console.log('----------------Map.has() ---------------------');

const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.has('bar')); // verificar se há 'bar' como chave e retorna boolean

console.log(map1.has('baz'));
