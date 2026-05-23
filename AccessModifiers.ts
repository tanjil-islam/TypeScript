class Player {
  constructor(
    private name: string,
    public age: number,
    readonly country: string,
  ) {}

  play() {
    console.log(`${this.name} from ${this.country} is playing.`);
  }
}

const shakib = new Player("Shakib Al Hasan", 35, "Bangladesh");
const tamim = new Player("Tamim Iqbal", 34, "Bangladesh");
shakib.play();

const players: Player[] = [];
players.push(shakib);
players.push(tamim);
console.log(players);
