class Supplier extends Client {
    public accountNumber: string;
    public invoices: string[]; // Assuming invoices is an array of strings; adjust as needed.

    constructor(
        company: string,
        nip: string,
        city: string,
        street: string,
        comments: string,
        industry: string,
        active: boolean,
        accountNumber: string
    ) {
        // Call the parent class constructor
        super(company, nip, city, street, comments, industry, active);
        this.accountNumber = accountNumber;
        this.invoices = [];
    }
}
