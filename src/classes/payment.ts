import { HasFormatter } from "../interfaces/hasFormatter.js";

export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string | number,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} paid $${this.amount} for ${this.details}`;
  }
}
