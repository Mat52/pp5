"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
class Invoice {
    constructor(name, quantity, unit, netto, tax, brutto, active) {
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
        this.netto = netto;
        this.tax = tax;
        this.brutto = brutto;
        this.active = active;
    }
}
exports.Invoice = Invoice;
