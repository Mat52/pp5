import { Tax } from "../enums/tax";
import { Unit } from "../enums/unit";

export class Invoice{
    constructor(name: String){
        this.name = "name";
        this.quantity = 0
    }

    name: string;
    quantity: number;
    unit?: Unit;
    netto?: number;
    tax?: Tax;
    brutto?: number;
}