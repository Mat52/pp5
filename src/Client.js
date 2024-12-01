"use strict";
class Client {
    constructor(company, nip, city, street, comments, industry, active) {
        this.company = company;
        this.nip = nip;
        this.city = city;
        this.street = street;
        this.comments = comments;
        this.industry = industry;
        this.active = active;
    }
    getData() {
        return `${this.company} (${this.nip})`;
    }
    getAddress() {
        return `${this.city}, ${this.street}`;
    }
}
