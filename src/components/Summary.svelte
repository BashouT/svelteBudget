<script lang="ts">
	import { expenditures } from '../stores';
	import Pie from './charts/Pie.svelte';
</script>

<h1>Summary of expenditures</h1>
{#key $expenditures}
	<Pie data={$expenditures} />
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