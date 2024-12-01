class Client {
    constructor(
        public company: string,
        public nip: string,
        public city: string,
        public street: string,
        public comments: string,
        public industry: string,
        public active: boolean
    ) {}

    getData(): string {
        return `${this.company} (${this.nip})`;
    }

    getAddress(): string {
        return `${this.city}, ${this.street}`;
    }
}
