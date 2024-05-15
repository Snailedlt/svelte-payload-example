<script lang="ts">
	export let data;
</script>

<main>
	<div>
		<h1>Svelte + Payload Example</h1>
		<p>This is a simple example of how to use Payload 3's localAPI with SvelteKit</p>
		<p>
			<b>Created by:</b>
			<i>Jørgen Kalsnes Hagen <a href="https://github.com/snailedlt">Snailedlt</a></i>
		</p>
	</div>

	<div>
		<h2>If you're logged in to Payload you should be able to see a welcome message here:</h2>
		<p>{data.msg} {data.user.email}</p>
	</div>
</main>

<style>
	/* center the main using flexbox */
	main {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	div {
		margin: 1rem;
		text-align: center;
	}

	:global(body) {
		color: #fafbfc;
		background-color: #24292e;
	}
</style>
