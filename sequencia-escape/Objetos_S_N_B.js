var nome = "Corona";
console.log("########STRING#########");

for(var index in nome){
    console.log("index: ", index, nome[index]);
}
console.log("charAt():", nome.charAt(4));
console.log("charCodeAt():", nome.charCodeAt(4));
console.log("indexOf():", nome.indexOf("n"));
console.log("lastIndexOf():", nome.lastIndexOf("o"));