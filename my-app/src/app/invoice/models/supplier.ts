import { Customer } from "./customer";
import { Invoice } from "./invoice";
export class Supplier extends Customer{
    constructor(accountNumber: any){
        super();
        this.accountNumber = accountNumber;
    }
    accountNumber:string  = "";
    invoices:Invoice[] = [];
}