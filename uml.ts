

// Padrões de Projeto - UML Básico ==========================================================================================

// https://i.imgur.com/wXkQyIQ.png

export class UmaClasse {
    constructor (
        // modificadores de acesso
        // "-" - private - acessível apenas dentro da classe
        // "+" - public - acessível de qualquer lugar
        // "#" - protected - acessível apenas dentro da classe e das classes filhas
        private nome:  string,
        public sobrenome: string,
        protected idade: number,

    ) {}
    
    // getters e setters
    
    public getNome(): string { 
        return this.nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setIdade(idade: number): void {
        this.idade = idade;
    }

}

// Relações entre classes ==========================================================================================

// https://i.imgur.com/lQP9Anx.png

export class Shape {
    // código
}

export class Circle extends Shape { // using extends
    // código
}

// Composição e Agregação ==========================================================================================

// https://i.imgur.com/SBRN62S.png

export class Carro {
    private motor: Motor;

    constructor(motor: Motor) {
        this.motor = motor
    }
}

export class Motor {
    // código
}

const motor = new Motor();
const carro = new Carro(motor);

// console.log(carro);

// Dependência ==========================================================================================

// https://i.imgur.com/mpYzUwR.png

export class Printer {
    print(document: Document): void {
        console.log(`Printing ${document}`);
    }

}

export class Document {
    // código
}

const printer = new Printer();
const document = new Document();

// printer.print(document);

// Realização ==========================================================================================

// https://i.imgur.com/6zsW7oN.png

export interface ControleRemoto {
    play(): void;
    pause(): void;
}

export interface ControleSom extends ControleRemoto {
    mudarRadio(): void;
}

export class Bluray implements ControleRemoto {
    pause(): void {}
    play(): void {}
}

export class Som implements ControleSom {
    mudarRadio(): void {}
    pause(): void {}
    play(): void {}
}

// Abstração ==========================================================================================

// https://i.imgur.com/oKWP23X.png

export abstract class Animal {
    protected abstract makeNoise(): void;

    makeSound(): void {
        console.log(this.makeNoise());
    }
}

export class Dog extends Animal {
    protected makeNoise(): string {
        return 'Au Au';
    }
}

// const dog = new Dog();
// dog.makeSound();

