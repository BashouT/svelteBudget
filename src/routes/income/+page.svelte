<script lang="ts">
	import { Budget } from '../../classes/Budget';
	import type { Expenditure } from '../../classes/Expenditures';
	import { SpendCategory } from '../../enums/SpendCategory';

	let income: Number;
	let expenditures: Expenditure[];

	let selectListCategories: SpendCategory[] = [
		SpendCategory.Activity,
		SpendCategory.Bill,
		SpendCategory.Other,
		SpendCategory.Personal,
		SpendCategory.Work
	];
</script>

<div>
	<label>
		What is your income?
		<input bind:value={income} name="income-input" type="number" />
	</label>

<br/>
<br/>

	<label>
		Cost
		<input name="income-input" type="number" min="0" step="10" />
	</label>
	<label>
		<select>
			{#each selectListCategories as category}
				<option value={category}>{category}</option>
			{/each}
		</select>
	</label>
</div>
