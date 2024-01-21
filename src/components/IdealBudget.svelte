<script lang="ts">
	import { income } from '../stores';

	// calc 50, 30, 20 split
	$: needs = ($income / 100) * 50;
	$: wants = ($income / 100) * 30;
	$: save = ($income / 100) * 20;
</script>

<div>
    <h1>Our recommendation</h1>
    <p>Based on the income you provided and using the standard 50/30/20 split, we recommend you should be distributing your money as follows:</p>
	<div class="summary-module">
		<h2>Needs</h2>
		<h2>Wants</h2>
		<h2>To save</h2>
		<p>£{needs}</p>
		<p>£{wants}</p>
		<p>£{save}</p>
	</div>
</div>

<style>
	.summary-module {
		background-color: rgb(250, 250, 250);
		border-radius: 7px;
		text-align: center;
		margin: auto;
		width: 65%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 20px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	.summary-module > * {
		flex: 1 1 160px;
	}
</style>
