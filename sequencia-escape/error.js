//throw para informar um exceção 
//erros e exceções são tratados por um bloco try/catch/finally
//com erro, javascript pára tudo
//throw new Error("Ocorreu um erro na aplicação");
try {
    console.log(soma(10,new Array(10)));
}catch (error){
    //console.log(error);
    console.log(error.name);     //tipo de erro
    console.log(error.message);  //só erro normal
    console.log(error.stack);  //detalhes do erro
} finally {
    console.log("Sempre será executado");
}

function soma(a,b){
    //return a/b;
    return a.exec();
}