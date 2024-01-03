<script lang="ts">
	import Intro from "../components/Intro.svelte";
	import Summary from "../components/Summary.svelte";

	let summaryRevealed: Boolean = false;

	function toggleSummary(): void {
		summaryRevealed = !summaryRevealed;
	}

</script>

<Intro></Intro>

<button on:click="{toggleSummary}">
	Show summary
</button>

{#if summaryRevealed}
	<Summary></Summary>
{/if}