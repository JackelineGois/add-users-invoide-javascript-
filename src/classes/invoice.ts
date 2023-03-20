export class Invoice {
  constructor(
    readonly client: string,
    private details: string | number,
    public amount: number
  ) {}

  format() {
    return {
      message: `${this.client} owes $${this.amount} for ${this.details}`,
    };
  }
}
