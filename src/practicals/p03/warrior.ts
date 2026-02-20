import { Character } from "./character";

export class Warrior extends Character {
  weapon:string = ""

  constructor(name:string,weapon:string,health?:number){
    super(name,health)
    this.weapon = weapon
  }

  getWeapon(){
    return this.weapon
  }

  receiveDamage(damage:number):number{
    this.health = this.health - (damage * (90 / 100))
    return this.health
  }

}
