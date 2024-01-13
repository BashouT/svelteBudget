<script lang="ts">
	import { expenditures, groupedExpenditures, income } from '../stores';
	import Pie from './charts/Pie.svelte';

	$: totalExpenditure = $groupedExpenditures
		.map((e) => e.amountSpent)
		.reduce((accumulator, current) => {
			return accumulator + current;
		}, 0);

	$: netIncome = $income - totalExpenditure;
	$: percentageOfIncome = (totalExpenditure / $income) * 100;
</script>

<h1>Summary of expenditures</h1>
{#key $expenditures}
	<Pie data={$groupedExpenditures} />
	<div>
		<h2>{netIncome}</h2>
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
