import type { SpendCategory } from "../enums/SpendCategory";

export class Expenditure {
    type: SpendCategory 
    amountSpent: Number
    description: String

    constructor(Type: SpendCategory, AmountSpent: Number, Description: String) {
        this.type = Type;
        this.amountSpent = AmountSpent;
        this.description = Description;
    }
}