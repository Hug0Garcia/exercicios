//congelar a length de um array
var array = [0, 1, 2, 3, 4, 5];
Object.defineProperty(array, 'length', { writable: false });

//array.pop();
console.log(array);
console.log(Object.getOwnPropertyDescriptors(array));
console.log("");

//definindo a diferença entre propriedade e indices
var ax = [];
ax[0] = 0;
ax[1] = 1;
ax['2'] = 2;
ax[-3] = 3;
ax['quatro'] = 4; //estou a definir propriedades no array;
console.log(ax);
console.log(ax.length);
console.log("");

for (var index in ax) {
    console.log("index: " + index + "=" + ax[index]);
}

Object.defineProperty(ax, 'quatro', { enumerable: false });   //excluimos da iteração

console.log("");
console.log("Indexados sem propriedades");
for (var index in ax) {
    console.log("index: " + index + " = " + ax[index]);
}
// o for tradicional só itera em index do array e não em propriedades
for (var i = 0; i < 100; i++) {
    if (i === null || i === undefined) continue;
}

// TODO           convertido para null, undefined, false, 0, '', NaN  = FALSE
if (!meuArray[index]) {

}