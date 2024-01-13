import { derived, writable, type Readable } from "svelte/store";
import { Expenditure } from "./classes/Expenditure";
import { SpendCategory } from "./enums/SpendCategory";

export const expenditures = writable([] as Expenditure[]);

export const groupedExpenditures: Readable<Expenditure[]> = derived(expenditures, (expenditures) => {
    let groups = groupBy(expenditures, (i) => i.type)
    return sumGrouped(groups);
})

export const income = writable(0 as number);

function groupBy<T>(arr: T[], fn: (item: T) => any) {
    return arr.reduce<Record<string, T[]>>((prev, curr) => {
        const groupKey = fn(curr);
        const group = prev[groupKey] || [];
        group.push(curr);
        return { ...prev, [groupKey]: group };
    }, {});
}

function sumGrouped(expenditures: Record<string, Expenditure[]>) {
    let group = [] as Expenditure[];
    for (const key of Object.keys(SpendCategory)) {
        if (expenditures[key] !== undefined) {
            let sum = expenditures[key].map(spend => spend.amountSpent).reduce((prev, next) => prev + next);
            group.push(new Expenditure(key as SpendCategory, sum, ''));
        }
    }

    return group;
}