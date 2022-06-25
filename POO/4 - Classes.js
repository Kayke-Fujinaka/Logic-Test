/* 
Uma classe é uma forma de definir um tipo de dado em uma linguagem orientada a objeto. Ela é formada por dados e comportamentos.
Para definir os dados são utilizados os atributos, e para definir o comportamento são utilizados métodos.

Exemplo:
    - Temos uma classe chamada carro com algumas propriedades que definem a cor;
    - A propriedade vai depender do que selecionar;
    - O carro tem a propriedade cor, mas não necessariamente todos os carros vão seguir com a mesma cor;
*/

class Veiculo {
    
    cor;
    placa;
    modelo;
    posicao;

    constructor({cor, placa, modelo}) {
        this.cor = cor
        this.placa = placa
        this.modelo = modelo
        this.posicao = 0
    }
}

class Carro extends Veiculo {
    
    constructor(cor, placa, modelo) {
        super({cor, placa, modelo})
    }

    acelerar(){
        // acelerar o carro
        this.posicao++
    }

    frear(){
        this.posicao--
    }
}

const carro = new Carro({cor:'Vermelho', placa: 'HDUHSUDH', modelo: 'Voyage'})
console.log(carro.posicao)

carro.acelerar()

console.log(carro.posicao)
