var button = document.getElementById('cadastrar-boot');
button.addEventListener('click', function () {
    console.log('Meu Click This é :', this);
}, false);

// call  recebe por string
//apply recebe por array
//....        }.apply(this), false);