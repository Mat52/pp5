export class Customer{
    constructor(){}

    name: string = "";
    nip: string = "";
    city: string = "";
    street: string = "";
    houseNumber: string = "";
    zipCode: string = "";
    comments: string = "";
    industry: string = "";
    active: boolean = true

    getData():string{
        return `${this.name} (${this.nip})`;
    };

    getAddress():string{
        return `${this.city} ${this.zipCode} ${this.street} ${this.houseNumber}`;
    };
}
