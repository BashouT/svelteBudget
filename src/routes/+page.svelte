<script lang="ts">
	import Expenditures from '../components/Expenditures.svelte';
	import Intro from '../components/Intro.svelte';
	import Summary from '../components/Summary.svelte';
	import { expenditures } from '../stores';
</script>

<div class="container">
	<Intro />

	<Expenditures />

	{#if $expenditures.length > 0}
		<Summary />
	{/if}
</div>

<style>
	.container {
		width: 100%;
		max-width: 900px;
		margin: auto;
	}
</style>
