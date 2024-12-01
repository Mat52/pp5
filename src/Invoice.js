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
export { Invoice };
