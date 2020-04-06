/* Para chamadas de função:       minhaFuncao(...objIteravel);
   Para array literais:           [...objIteravel, 4, 5, 6]
   Desestruturação:               [a, b, ...objIteravel] = [1, 2, 3, 4, 5]; */


//No ES2015 com spread:
var arr10 = [0, 1, 2];
var arr20 = [3, 4, 5];
arr10.push(...arr20);
console.log(arr10);

console.log("");
function mostrarNumeros(a, b, c, d) {
    console.log("Números: ", a, b, c, d);
}

const arrayNumeros = [1, 2, 3, 4, 5, 6];

mostrarNumeros(...arrayNumeros);

console.log(mostrarNumeros);
console.log("");
var partes = ['ombros', 'joelhos'];
var letra = ['cabeca', ...partes, 'e', 'dedos'];

console.log(letra);
console.log(""); console.log(""); console.log("");
let arraySpread = [...arr10, ...arr20, ...arrayNumeros, ...partes, ...letra];

console.log(arraySpread);

console.log(""); console.log(""); console.log("");