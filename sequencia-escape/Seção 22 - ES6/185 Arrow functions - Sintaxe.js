/* Arrow Functions ou função de seta é uma nova forma de criar expressão de função no JS
é bem compacto e expressivo trabalhar com arrow function ao inves de function expression;

Arrow Function tem algumas caracteristicas:
- É uma expressão de função;
- É função anónima;
- Trabalha com this léxico, ou seja, não realiza thisbind tradicional no qual se liga diretamente
ao objeto que invoca a função, sendo ligada ao contexto de execução pai onde é definida,
resolvendo o problema de repassasse do this para uma função via prática da variável that ou self = this);
*/

//definição de função
function somar(a, b) {
    return a + b;
}
console.log("resultado: ", somar(4, 12));

//expressão de função

let somarExFn = function (a, b) {
    return a + b;
};
console.log('somarExFn: ', somarExFn);
console.log('somarExFn: ', somarExFn(3, 12));


const somarArrowV1 = (a, b) => { return a + b; }
console.log('somarArrowV1: ', somarArrowV1(10, 30));

const somarArrowV2 = (a, b) => a + b;
console.log('somarArrowV2: ', somarArrowV2(100, 3000));

const arrow = nome => nome.toUpperCase();
console.log('arrow: ', arrow("pedro"));

const arrowV2 = () => "Olá";
console.log('Msg: ', arrowV2());
