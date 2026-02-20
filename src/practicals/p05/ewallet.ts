import {PaymentMethod} from "./payment-method"
import {Payable} from "./payable"

export class EWallet extends PaymentMethod{
    private _walletId:string

    constructor(accountName:string,walletId:string){
        super(accountName)
        this._walletId = walletId
    }

    processPayment(amount: number): boolean {
        return true
    }

    getPaymentFee(amount: number): number {
        return amount * 0.01
    }
}
