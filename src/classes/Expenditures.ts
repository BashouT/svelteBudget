import type { SpendCategory } from "../enums/SpendCategory";

export class Expenditure {
    type: SpendCategory 
    amountSpent: Number

    constructor(Type: SpendCategory, AmountSpent: Number) {
        this.type = Type;
        this.amountSpent = AmountSpent;
    }
}
