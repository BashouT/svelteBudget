<script lang="ts">
	import { navigating } from '$app/stores';
	import Intro from '../components/Intro.svelte';
</script>

<div class="container">
	<Intro />
	<nav>
		<a href="/">Return home</a>
		<a href="/monthly">Monthly Budgeting</a>
	</nav>

	{#if $navigating}
		navigating to {$navigating.to?.url.pathname}
	{/if}
	<slot />
</div>

<style>
	.container {
		width: 100%;
		max-width: 900px;
		margin: auto;
	}

	:global(*) {
		font-family: Arial, Helvetica, sans-serif;
	}
</style>
