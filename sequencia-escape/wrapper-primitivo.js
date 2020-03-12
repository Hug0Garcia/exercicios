//WRAPPER

//Os tipos Wrapper primitivos são tipos objeto referência criados automaticamente
//de forma oculata, sempre que um valor ou métodos de objetos String, Number e Boolen
//primitivos sejam acessados via literal.

var valorString = "Curso JS";
console.log(valorString.substr(0, 5)); 

//processo Wrapper - primitivo
var valorStringTemp = new String(valorString);
var substr = valorStringTemp.substr(0,5);
varlorStringTemp=null;
console.log(substr);
substr = null;