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
        if(this.firstname !== ""){
            this.firstname = firstname
        }else{
            this.firstname = ""
        }
    }

    setLastname(lastname:string){
        if(this.lastname !== ""){
            this.lastname = lastname
        }else{
            this.lastname = ""
        }
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
