//array-like
// todos os elementos array herdam o prototype
//Array.prototype
/* 
//HTML Collection

var inputs = document.getElementsByTagName('input');

console.log('call inputs', Object.prototype.toString.call(inputs));

for (let index = 0; index < inputs.length; index++) {
    const element = inputs[index];
}

//para usar em Array-like  como HTMLCollection
Array.prototype.forEach.call(inputs, function (valor, elemento) {
    console.log(valor);
});
*/
//arguments = array-like
console.log("Objecto arguments-------------------");
var hi = "Hello";
/*
function somarValores(a, b) {
    return a + b;
}

console.log('somarValores(10,10): ', somarValores(10, 10));
*/
//! reduce precisa de call back
function somarValoresv2(a, b) {
    var total = Array.prototype.reduce.call(arguments, function (acumulador, valor, indice) {
        console.log('Arguments: ', arguments);

        return acumulador + valor;
    })
    return total;
};

console.log('somarValoresv2(10, 20, 30, 40): ', somarValoresv2(10, 20, 30, 40));
console.log(`${hi}`);
