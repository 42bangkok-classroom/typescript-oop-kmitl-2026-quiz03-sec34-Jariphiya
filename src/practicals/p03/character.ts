export class Character {
    name:string = ""
    health:number = 100

    constructor(name:string,health?:number){
        this.name = name
        this.health = health ?? 100
    }

    getName(){
        return this.name
    }

    getHealth(){
        return this.health
    }

    receiveDamage(damage:number){
        return this.health = this.health-damage
    }

}
