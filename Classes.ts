class Player {
    name: string;
    age: number;
    country: string;

    constructor(n: string, a: number, c: string) {
        this.name = n;
        this.age = a;
        this.country = c;
    }

    play() {
        console.log(`${this.name} from ${this.country} is playing.`);
    }
    
}

const shakib = new Player("Shakib Al Hasan", 35, "Bangladesh");
const tamim = new Player("Tamim Iqbal", 34, "Bangladesh");
shakib.play();


const players: Player[] = [];
players.push(shakib);
players.push(tamim)
console.log(players)

