//Operador <<= Left Shift
console.log("operador <<= Left Shift###################");
var num1 = 1;
console.log("1 - num1 em base10:" , num1);
console.log("2 - num1 em base2:" , num1.toString(2));


num1 <<= 1;
console.log("3 - num 1 em Base2: ", num1.toString(2));
console.log("4 - num 1 em Base10: ", num1);

//operador >>= Right Shift´
console.log("operador >>= Right Shift###################");
var num2 = 3;
console.log("1 - num2 em Base10: ", num2);
console.log("1 - num2 em Base2: ", num2.toString(2));
num2 >>=1;
console.log("3 - num 1 em Base2: ", num2.toString(2));
console.log("4 - num 1 em Base10: ", num2);