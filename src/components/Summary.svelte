<script lang="ts">
	import { expenditures, groupedExpenditures, income } from '../stores';
	import IdealBudget from './IdealBudget.svelte';
	import Pie from './charts/Pie.svelte';
	import { blur } from 'svelte/transition';

	let showRecommendedBudget: boolean = true;

	$: totalExpenditure = $groupedExpenditures
		.map((e) => e.amountSpent)
		.reduce((accumulator, current) => {
			return accumulator + current;
		}, 0);

	$: netIncome = $income - totalExpenditure;
	$: percentageOfIncome = ((totalExpenditure / $income) * 100).toFixed(2);

	function toggleRecommendedBudget() {
		showRecommendedBudget = !showRecommendedBudget;
	}
</script>

<div class="summary">
	{#if showRecommendedBudget}
	<div transition:blur={{ amount: 10 }}>
    	<h1 on:click={toggleRecommendedBudget}>Our recommendation</h1>
		<IdealBudget />
	</div>
	{/if}
	<h1>Summary of your expenditures</h1>
	{#key $expenditures}
		<Pie data={$groupedExpenditures} />
		<div class="summary-module">
			<h2>Income</h2>
			<h2>Net</h2>
			<h2>Expenditures as percentage</h2>
			<p>£{$income}</p>
			<p>£{netIncome}</p>
			<p>{percentageOfIncome}%</p>
		</div>
		<div class="summary-module">
			<table>
				<th><h2>Spend Category</h2> </th>
				<th><h2>Amount Spent</h2> </th>
				<th><h2>Description</h2> </th>
				<tbody>
					{#each $expenditures as expenditure}
						<tr>
							<td>
								{expenditure.type}
							</td>
							<td>
								{expenditure.amountSpent}
							</td>
							<td>
								{expenditure.description}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/key}
</div>

<style>
	.summary {
		text-align: center;
		justify-content: center;
		align-items: center;
	}

	.summary-module {
		background-color: rgb(250, 250, 250);
		border-radius: 7px;
		text-align: center;
		margin: auto;
		width: 65%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 20px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	.summary-module > * {
		flex: 1 1 160px;
	}
</style>
