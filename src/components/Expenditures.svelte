<script lang="ts">
	import { Expenditure } from '../classes/Expenditure';
	import { SpendCategory } from '../enums/SpendCategory';
	import { expenditures } from '../stores';

	let income: Number = 0;
	let amountSpent: Number = 0;
	let category: SpendCategory = SpendCategory.Activity;
	let description: String = '';

    // TODO: Extend enum to expose these?
	let selectListCategories: SpendCategory[] = [
		SpendCategory.Activity,
		SpendCategory.Bill,
		SpendCategory.Other,
		SpendCategory.Personal,
		SpendCategory.Work
	];

	const addExpenditure = () => {
		expenditures.update((contents) => [
			...contents,
			new Expenditure(category, amountSpent, description)
		]);
	};
</script>

<div>
	<label>
		What is your income?
		<input bind:value={income} name="income-input" type="number" />
	</label>

	<br />
	<br />

	<!-- TODO: Componentize so fields just for binding are extracted to specific components-->
	<select bind:value={category}>
		{#each selectListCategories as selectCategory}
			<option value={selectCategory}>{selectCategory}</option>
		{/each}
	</select>

	<label>
		Cost
		<input bind:value={amountSpent} name="expenditure-cost" type="number" min="0" step="10" />
	</label>

	<label>
		Description
		<input bind:value={description} type="text" name="income-input" />
	</label>
	<button on:click={addExpenditure}>Add Expenditure</button>
</div>
