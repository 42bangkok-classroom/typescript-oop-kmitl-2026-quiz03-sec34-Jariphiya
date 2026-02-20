import { Character } from "./character";

export class Warrior extends Character {
  weapon:string = ""

  constructor(name:string,health:number,weapon:string){
    super(name,health,weapon)
    this.weapon = weapon
  }

  getWeapon(){

  }
}
