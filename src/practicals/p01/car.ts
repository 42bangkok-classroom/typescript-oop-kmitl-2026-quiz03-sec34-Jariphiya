export class Car {
    brand:string = ""
    model:string = ""

    start(){
        console.log(`${this.brand} ${this.model} is starting...`)
    }

    accelerate(){
        console.log(`${this.brand} ${this.model} is accelerating...`)
    }

    brake(){
        console.log(`${this.brand} ${this.model} is breaking...`)
    }

    stop(){
        console.log(`${this.brand} ${this.model} is stopping...`)
    }
}
