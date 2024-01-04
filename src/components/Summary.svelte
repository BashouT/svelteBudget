<script lang="ts">
	import { Expenditure } from '../classes/Expenditures';
	import { SpendCategory } from '../enums/SpendCategory';
	import Pie from './charts/Pie.svelte';

	let expenditures: Expenditure[] = [
		new Expenditure(SpendCategory.Bill, 50),
		new Expenditure(SpendCategory.Personal, 100),
		new Expenditure(SpendCategory.Work, 700)
	];
</script>

<h1>Summary of expenditures</h1>
<Pie data={expenditures} />
<table>
	<th> Spend Category </th>
	<th> Amount Spent </th>
	<tbody>
		{#each expenditures as expenditure}
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