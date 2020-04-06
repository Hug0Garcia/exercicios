/* As arrow function */

//eventos
/*
let buttonHtml = document.getElementById('cadastrar-html');
buttonHtml.addEventListener('click', function () {
    console.log("Meu this é : ", this);
}, false);  // assim o objeto é o botão


let buttonHtml = document.getElementById('cadastrar-html');
buttonHtml.addEventListener('click', function () {
    console.log("Meu this é : ", this);
}.call(this), false);    //call é responsável por definir o this para a função = this é window

//call executa logo
*/
let buttonHtml = document.getElementById('cadastrar-html');
buttonHtml.addEventListener('click', function () {
    console.log("Meu this é : ", this);
}.bind(this), false);    //bind é responsável por definir o this para a função = this é window (não executa logo)

let buttonBoot = document.getElementById('cadastrar-boot');
buttonBoot.addEventListener('click', () => {
    console.log("Meu this é : ", this);
}, false);

function Pessoa() {
    this.nome;

    this.cadastrarEventoHtmlExFn = function () {
        let buttonHtml = document.getElementById('cadastrar-html-objeto');
        buttonHtml.addEventListener('click', function () {
            console.log("Meu this cadastrar-html-objeto é: ", this)
        }, false); // Objeto
    }

    this.cadastrarEventoBootArrow = function () {
        let buttonHtml = document.getElementById('cadastrar-boot-objeto');
        buttonHtml.addEventListener('click', () => console.log("Meu this cadastrar-boot-objeto é: ", this), false);
    }

}

var pessoa = new Pessoa(); // this lexico
pessoa.cadastrarEventoHtmlExFn();
pessoa.cadastrarEventoBootArrow();
