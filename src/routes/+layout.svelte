<script lang="ts">
    import Intro from '../components/Intro.svelte'
</script>


<div class="container">
	<Intro />
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