import { writable } from "svelte/store";
import type { Expenditure } from "./classes/Expenditure";

export const expenditures = writable([] as Expenditure[]);