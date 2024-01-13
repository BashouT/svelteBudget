<script lang="ts">
	import { expenditures, groupedExpenditures, income } from '../stores';
	import Pie from './charts/Pie.svelte';

	$: totalExpenditure = $groupedExpenditures
		.map((e) => e.amountSpent)
		.reduce((accumulator, current) => {
			return accumulator + current;
		}, 0);

	$: netIncome = $income - totalExpenditure;
	$: percentageOfIncome = ((totalExpenditure / $income) * 100).toFixed(2);
</script>

<div class="summary">
	<h1>Summary of expenditures</h1>
	{#key $expenditures}
		<Pie data={$groupedExpenditures} />
		<div class="net-income">
			<h2>Income</h2>
			<h2>Net</h2>
			<h2>Expenditures as percentage</h2>
			<h2>£{$income}</h2>
			<h2>£{netIncome}</h2>
			<h2>{percentageOfIncome}%</h2>
		</div>
		<table>
			<th> Spend Category </th>
			<th> Amount Spent </th>
			<tbody>
				{#each $expenditures as expenditure}
					<tr>
						<td>
							{expenditure.type}
						</td>
						<td>
							{expenditure.amountSpent}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/key}
</div>

<style>
	.summary {
		text-align: center;
		justify-content: center;
		align-items: center;
	}

	.net-income {
		background-color: rgb(250, 250, 250);
		border-radius: 25px;
		text-align: center;
		margin: auto;
		width: 65%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	.net-income > * {
		flex: 1 1 160px;
	}
</style>
