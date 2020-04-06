/* Weak Map é uma estrutura de mapa de dados organizada por um conjunto de pares de 
chave/valor, quase que idêntico ao Map;
- Só pode armazenar objeto e em suas chaves e os valores são arbitrários
- É uma coleção com fraca permanência dos elementos armazenados em memórias, pois o coletor
de lixo garbage collector apaga o original quando já não existir em memória
*/

//!Weak map só armazena objetos =>>>>>>>>>>> Só armazena objetos
const wm1 = new WeakMap(),
    wm2 = new WeakMap(),
    wm3 = new WeakMap();
const o1 = {},
    o2 = function () { },
    o3 = window;

console.log('------------set--------------------');
wm1.set(o1, 37);
wm1.set(o2, 'azerty');

wm2.set(o1, o2); // a value can be anything, including an object or a function
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // keys and values can be any objects. Even WeakMaps!

console.log('------------get--------------------');
wm1.get(o2); // "azerty"
wm2.get(o2); // undefined, because there is no key for o2 on wm2
wm2.get(o3); // undefined, because that is the set value

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (even if the value itself is 'undefined')

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false

console.log('------------WM2--------------------');
console.log(wm2);
console.log('------------WM3--------------------');
console.log(wm3);

