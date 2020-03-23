//o objeto por referencia
var obj1 = {matricula: 17};
console.log("obj1 matricula: ", obj1.matricula);
//as 2 apontam para a mesma referencia de memoria
var obj2 = obj1;
console.log("obj2 matricula:", obj2.matricula);
obj2.matricula = 28;

console.log("obj2 matricula: ", obj2.matricula);
console.log("obj1 matricula: ", obj1.matricula);

obj2 = null; //limpar memoria

console.log("tipo de objeto: typeof: ", typeof obj1);
console.log("tipo de objeto: typeof: ", obj1 instanceof Object);  // true, foi criado Object()
console.log("tipo de objeto: typeof: ", obj2 instanceof Object);  // false
