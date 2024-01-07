import type { SpendCategory } from "../enums/SpendCategory";

export class Expenditure {
    type: SpendCategory 
    amountSpent: number
    description: string

    constructor(Type: SpendCategory, AmountSpent: number, Description: string) {
        this.type = Type;
        this.amountSpent = AmountSpent;
        this.description = Description;
    }
}