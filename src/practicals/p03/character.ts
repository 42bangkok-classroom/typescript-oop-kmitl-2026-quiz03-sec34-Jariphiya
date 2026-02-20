export class Character {
    name:string = ""
    health:number = 100

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
