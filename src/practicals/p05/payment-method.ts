import {Payable} from "./payable"

export abstract class PaymentMethod implements Payable {
    protected accountName:string = ""

    constructor(accountName:string){
        this.accountName = accountName
    }

    getAccountName(){
        return this.accountName
    }

    abstract processPayment(amount: number): boolean;
    abstract getPaymentFee(amount: number): number;
}
