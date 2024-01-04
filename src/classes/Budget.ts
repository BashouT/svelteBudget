import type { Expenditure } from "./Expenditures";

export class Budget {
    income: Number
    outgoings: Expenditure[]

    constructor(Income: Number, Outgoings: Expenditure[]) {
        this.income = Income;
        this.outgoings = [] as Expenditure[];
    }
}