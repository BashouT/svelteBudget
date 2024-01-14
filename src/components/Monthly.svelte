<script lang="ts">
    import { expenditures } from '../stores';
	import Expenditures from './Expenditures.svelte';
	import Summary from './Summary.svelte';
</script>

<Expenditures />

{#if $expenditures.length > 0}
    <Summary />
{/if}