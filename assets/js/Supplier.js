"use strict";
class Supplier extends Client {
    constructor(company, nip, city, street, comments, industry, active, accountNumber) {
        // Call the parent class constructor
        super(company, nip, city, street, comments, industry, active);
        this.accountNumber = accountNumber;
        this.invoices = [];
    }
}
