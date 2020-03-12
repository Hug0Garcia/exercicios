///Vamos manipular o Nome <input type=text" id="nomeBoot" name="nomeBoot">
//(nome e id) = devem ter sempre o meu nome
//
//HTMLElement do tipo input
//HTMLElement do tipo button,radio,checkbox(há muitos elementos HTML)

var nomeBootInputText = window.document.getElementById("nomeBoot");
var estadoSelect = document.getElementById("estadoSelectBoot");

function selecionarCampos() {
    console.log("Typeof: " + typeof nomeBootInputText);
    console.log("Object call: " + Object.prototype.toString.call(nomeBootInputText));//chama para a toString o objecto nomeBootInputText
    console.log("Recuperar valor com value: " + nomeBootInputText.value);
    
    //nomeBootInputText.disabled = true;   => para não permitir que o visitante insira o nome
    console.log("disable: nomeBootInputText.disabled = true");
    nomeBootInputText.readOnly = true;
    console.log("read only nomeBootInputText.readOnly = true");
    console.log("tagname: " + nomeBootInputText.tagName);
    console.log("tagname type: " + nomeBootInputText.type);
    //value = GET E SET   Porque podemos ler e alterar
}
// SELECT 
function selecionarCampoSelect() {
    // [HTMLSelectElement]
    // HTMLOPTIONSCOLLECTION
    console.log("object call: " + Object.prototype.toString.call(estadoSelect));
    console.log("estadoSelect.value :" + estadoSelect.value);
    console.log("estadoSelect.selectedIndex :" + estadoSelect.selectedIndex);
    console.log("tagName : " + estadoSelect.tagName);
    console.log("tagName type: " + estadoSelect.type);
    console.log(estadoSelect.selectedOptions);   
    console.log(estadoSelect.selectedOptions.item(0)); 
    console.log(estadoSelect.selectedOptions[1]); 
    console.log(estadoSelect.length); 
    console.log(estadoSelect.disabled = true); 
}

// CHECKBOX
//variável que vai recever o elemento emailpromocionalCheck
var emailPromocionalCheck = document.querySelector("#emailPromocionalCheckBoot");

function selecionarCampoEmailCheck(){
    console.log("Object call tipo: "+ Object.prototype.toString.call(emailPromocionalCheck));
    console.log("tagName : " + emailPromocionalCheck.tagName);
    console.log("tagName type: " + emailPromocionalCheck.type);
    console.log("valor value: " + emailPromocionalCheck.value);
    console.log("Checked?: " + emailPromocionalCheck.checked);

}

var formaContatoRadio = document.querySelector("[name=formaContatoRadioBoot]");

function selecionarCampoRadio(){
    console.log("object call: " + Object.prototype.toString.call(formaContatoRadio));
    console.log("estadoSelect.value :" + formaContatoRadio.tagName);
    console.log("estadoSelect.selectedIndex :" + formaContatoRadio.type);
    console.log("tagName : " + formaContatoRadio.value);
    console.log("tagName type: " + formaContatoRadio.checked);
}
//getElements
var radios = document.getElementsByName("formaContatoRadioBoot");

function selecionarCamposRadios(){
    console.log("Object call: " + Object.prototype.toString.call(radios));
    getElementB
}

var selects = document.getElementsByTagName("select");

var elementos = document.querySelectorAll("input[type=text]");

var formulario = document.querySelector("#formBoot");//seleciona o primeiro id com nome formBoot

//console.log("form tipo: " + Object.prototype.toString.call(formBoot));

function exibirDados(elemento){
    console.log(elemento);
    formBoot.nomeBoot.value ="Jaquim";
}

//createElement, appendChild, removeChild
var novo_elemento = document.createElement("p"); //cria <p></p>
var texto = document.createTextNode("Acabei de criar um Node com .createTextNod"); // cria var texto com o que está escrito dentro do Node
novo_elemento.appendChild(texto); //dá um filho ao novo_elemento (texto)

document.body.appendChild(novo_elemento); // o novo HTML elemento, vai para a raiz da árvore 
var formFilhoNome = document.getElementById("nomeBoot");
var formPai = formFilhoNome.parentNode;
console.log(formPai);
formPai.insertBefore(novo_elemento, formFilhoNome);
formPai.replaceChild(formFilhoNome, novo_elemento);
formPai.replaceChild(novo_elemento, formFilhoNome);
formPai.removeChild(novo_elemento);
// adicionar um <p>
var p2 = document.createElement("p");
p2.innerText = "teste";
document.body.appendChild(p2);