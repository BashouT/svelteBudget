<script lang="ts">
	import { Budget } from '../../classes/Budget';
	import { Expenditure } from '../../classes/Expenditure';
	import { SpendCategory } from '../../enums/SpendCategory';

	let income: Number = 0;
	let expenditures: Expenditure[] = [] as Expenditure[];
	let category: SpendCategory;
	let cost: Number;
	let description: String;

	let selectListCategories: SpendCategory[] = [
		SpendCategory.Activity,
		SpendCategory.Bill,
		SpendCategory.Other,
		SpendCategory.Personal,
		SpendCategory.Work
	];

	function addExpenditure(): void {
		let expenditure = new Expenditure(category, cost, description);
		expenditures.push(expenditure);
		expenditures = expenditures;
		return;
	}
</script>

<div>
	<h2>Summary</h2>
	{income}
	{#each expenditures as expenditure}
		{expenditure.type}
		{expenditure.amountSpent}
        {expenditure.description}
	{/each}
</div>

<div>
	<label>
		What is your income?
		<input bind:value={income} name="income-input" type="number" />
	</label>

	<br />
	<br />
	<select bind:value={category}>
		{#each selectListCategories as selectCategory}
			<option value={selectCategory}>{selectCategory}</option>
		{/each}
	</select>
	<label>
		Cost
		<input bind:value={cost} name="expenditure-cost" type="number" min="0" step="10" />
	</label>
	<label>
		Description
		<input bind:value={description} type="text" name="income-input" />
	</label>
	<button on:click={() => addExpenditure()}>Add Expenditure</button>
</div>
