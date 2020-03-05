//date NÃO tem literal
//Objetos Date são baseados no valor de tempo 
//que é o nº de milisegundos desde 1 de Jnaeiro de 1970
//new Date(valor;)  => valor inteiro em milisegundos com base em 01/01/1970
//new Date(dataStrin); => Data Time String Format -YYYY-MM-DDTHH:mm:ss.sssZ
// new Date(ano,mês,dia,hora,minuto,segundo,milisegundo)

var data = new Date();
/*console.log(typeof data);
console.log("#####");
console.log(data);*/

var dataString = new Date("2017-10-23");
console.log(dataString.getFullYear());
console.log(dataString.getMonth()+1);
console.log(dataString.getDay()+1);
console.log(dataString.getDate()+1);
console.log(data.getHours());
console.log(data.getMinutes());

//atenção: quando é Date(2017,10,24) não é preciso acrescentar +1

var dataParam = new Date(2020,05,11);
console.log(dataParam);