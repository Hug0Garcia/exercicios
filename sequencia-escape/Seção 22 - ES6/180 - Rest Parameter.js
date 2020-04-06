/*  ...theArgs
Há diferenças principais entre rest parameters e os arguments objects:
- o objeto arguments não é um array, enquanto  rest parameters são instâncias Array,  
isso significa que métodos como:
 sort,
 map, 
 forEach, 
 pop,
 podem ser aplicados diretamente

- o objeto arguments possui a funcionalidade adicional de especificar ele mesmo (como a propriedade callee). 

Como  theArgs é um array, você pode pegar número de elementos usando a propriedade length:
*/

function fun1(...theArgs) {
    console.log(theArgs.length);
    console.log("Dentro da funcao");
}

console.log(fun1());  // 0
console.log(fun1(5)); // 1
console.log(fun1(5, 6, 7, 7, 345, 345, 345, 342, 234, 324, 234, 123)); // 3
console.log("");
console.log("");
console.log("");
/*////////////////////*/

function multiply(multiplier, ...theArgs) {
    return theArgs.map(function (element) {
        return multiplier * element;
    });
}

var arr = multiply(10, 1, 2, 3, 1, 5, 9, 7, 10);
console.log(arr); // [2, 4, 6]
console.log("");
console.log("");
console.log("");


function sortRestArgs(...theArgs) {
    var sortedArgs = theArgs.sort();
    return sortedArgs;
}

console.log(sortRestArgs(5, 3, 7, 1));  // [1, 3, 5, 7]