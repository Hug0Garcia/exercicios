function Livro() {
    this.pagina = 1;

    setTimeout(function () {
        console.log(">>>>>this em escopo função setTimeout:", this);
        console.log("Página atual:", this.pagina);
    }.bind(this), 1000);
    setInterval(function () {
        this.pagina++;
        console.log(">>>>>this em escopo função setInterval:", this);
        console.log("Passando página para:", this.pagina);
    }.bind(this), 2000);
    parar(function () {
        throw new Error("Stopping the function!");
    });
}

let objLivro = new Livro;  // this é window neste caso porque o escopo

var button = document.getElementById('cadastrar-boot');
button.addEventListener('click', function () {
    Livro.parar();
}, false);
