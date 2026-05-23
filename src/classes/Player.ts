import type { isPlayer } from '../interfaces/isPlayer'

export class Player implements isPlayer {
  constructor(
    public name: string,
    private age: number,
    readonly country: string,
  ) {}

  getProperty(): number {
    return this.age
  }

  play(): void {
    console.log(`${this.name} is playing.`)
  }
}
