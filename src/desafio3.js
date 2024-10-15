class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }

        return `O ${this.tipo} atacou usando ${ataque}.`;
    }
}

// Exemplo de uso:
const heroi1 = new Heroi('Gandalf', 300, 'mago');
const heroi2 = new Heroi('Aragorn', 87, 'guerreiro');
const heroi3 = new Heroi('Liang', 50, 'monge');
const heroi4 = new Heroi('Kenshin', 30, 'ninja');

console.log(heroi1.atacar()); // O mago atacou usando magia.
console.log(heroi2.atacar()); // O guerreiro atacou usando espada.
console.log(heroi3.atacar()); // O monge atacou usando artes marciais.
console.log(heroi4.atacar()); // O ninja atacou usando shuriken.

