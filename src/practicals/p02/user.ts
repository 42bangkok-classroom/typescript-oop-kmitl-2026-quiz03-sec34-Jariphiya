export class User {
    firstname:string = ""
    lastname:string = ""
    private _age:number = 0
    static BIRTH_YEAR = 2000

    constructor(firstname:string,lastname:string){
        this.firstname = firstname
        this.lastname = lastname
    }

    setFirstname(firstname:string){
        this.firstname = firstname
    }

    setLastname(lastname:string){
        this.lastname = lastname
    }

    setAge(ages:number){
        this._age = ages
    }

    getAge(){
        return this._age
    }

    getFullName(){
        return `${this.firstname} ${this.lastname}`
    }
}
