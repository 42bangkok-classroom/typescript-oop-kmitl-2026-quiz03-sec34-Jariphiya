import {PaymentMethod} from "./payment-method"
import {Payable} from "./payable"

export class CreditCard extends PaymentMethod {
    private _cardNumber:string = ""
    
    constructor(accountName:string,cardNumber:string){
        super(accountName)
        this._cardNumber = cardNumber
    }


    processPayment(amount: number): boolean {
        return true
    }

    getPaymentFee(amount: number): number {
        return amount * 0.02
    }
}
