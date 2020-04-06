/* As arrow function trabalha com this é léxico, ou seja, o this é definido de acordo com
o contexto de execução superior */
/*
function Livro() {
    this.paginaAtual = 0;

    setInterval(function passarPagina() {
        this.paginaAtual++;
        console.log("Meu this é: ", this);
        console.log("A página atual é : ", this.paginaAtual);
        console.log(Date());
    }, 10000);
}
let Livro1 = new Livro();

// that - self
function Livros() {
    this.paginaAtual = 0;
    let that = this;

    setInterval(function passarPagina() {
        that.paginaAtual++;
        console.log("Meu this é: ", that);
        console.log("A página atual é : ", that.paginaAtual);
        console.log(Date());
    }, 4000);
}
let Livro2 = new Livros();*/

function LivroArrow() {
    this.paginaAtual = 0;

    setInterval(() => {  // arrow function //usando callback
        this.paginaAtual++;
        console.log("Meu this é: ", this);
        console.log("A página atual é : ", this.paginaAtual);
    }, 2000);
}
let livroArrow = new LivroArrow();