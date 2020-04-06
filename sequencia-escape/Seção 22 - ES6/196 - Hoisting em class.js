// Classe não sofre hoisting, é preciso declarar classes antes de usar

class Veiculo {
    constructor(tipo) {
        this.tipo = tipo;
    }
    tipoUpper() {

        console.log(`Tipo: ${this.tipo.toUpperCase()}!`);

    }
}

let objVeiculo = new Veiculo('Carro');
objVeiculo.tipoUpper();

console.log("");
//Expressão para criar classe - class expression

const Carro = class {
    constructor(placa) {
        this.placa = placa;
    }
}
// ####################################
const CarroV2 = class extends Veiculo {
    constructor(tipo, placa) {
        super(tipo)
        this.placa = placa;

    }
    //strict mode
    getVeiculo() {
        console.log(`Tipo: ${this.tipo}  - Placa: ${this.placa}`);

    }
}


let objCarro = new CarroV2('carro', 'JPG2356');
objCarro.getVeiculo();


