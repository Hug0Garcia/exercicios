/* Shorthand Methos - método abreviado */

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ES5
objCalcES5 = {
    msg: function msg() {
        console.log("Olá");
    },
    somar: function somar(a, b) {
        console.log('Resultado: ', a + b);
    }
}
objCalcES5.msg();
objCalcES5.somar(10, 20);

console.log("");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  ES6
objCalcES6 = {
    msg() {
        console.log("Olá");
    },
    somar(a, b) {
        console.log('Resultado: ', a + b);
    },
    *funcaoGerado(i) {
        yield i + 1;
    }
}
objCalcES6.msg();
objCalcES6.somar(100, 30);
console.log(objCalcES6.funcaoGerado(1).next().value);