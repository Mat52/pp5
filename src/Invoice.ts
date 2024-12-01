import { Tax } from "./models/Tax";
import { Unit } from "./models/Unit";

class Invoice {
    name: string;
    quantity: number;
    unit?: Unit;
    netto?: number;
    tax?: Tax;
    brutto?: number;
    active: boolean;

    constructor(
        name: string,
        quantity: number,
        unit: Unit,
        netto: number,
        tax: Tax,
        brutto: number,
        active: boolean
    ) {
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
        this.netto = netto;
        this.tax = tax;
        this.brutto = brutto;
        this.active = active;
    }
}

export { Invoice };
