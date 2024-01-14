<script lang="ts">
	import { Expenditure } from '../classes/Expenditure';
	import { SpendCategory } from '../enums/SpendCategory';
	import { expenditures, income } from '../stores';

	let amountSpent: number = 0;
	let category: SpendCategory = SpendCategory.Bill;
	let description: string = '';
	let selectListCategories: SpendCategory[] = Object.values(SpendCategory);

	const addExpenditure = () => {
		expenditures.update((contents) => [
			...contents,
			new Expenditure(category, amountSpent, description)
		]);
	};
</script>

<div class="expenditures">
	<label>
		What is your income?
		<input bind:value={$income} name="income-input" type="number" />
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

<style>
	input[type='number']::-webkit-outer-spin-button,
	input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type='number'] {
		-moz-appearance: textfield;
	}

	.expenditures input {
		border-radius: 7px;
		opacity: 0.75;
		border: solid 0.025rem;
		border-color: black;
		background-color: lightgray;
		padding-left: 5px;
	}

	.expenditures select {
		background-color: lightgray;
		opacity: .75;
		border: solid 0.025rem;
		border-color: black;
		border-radius: 7px;
		padding-left: 5px;
	}
</style>
