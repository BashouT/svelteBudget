<script>
	import { expenditures } from '../stores';
	import Expenditures from '../components/Expenditures.svelte';
	import Summary from '../components/Summary.svelte';
    let name = "Brian";
</script>

<h1>Welcome back {name}</h1>

<Expenditures />

{#if $expenditures.length > 0}
    <Summary />
{/if}
