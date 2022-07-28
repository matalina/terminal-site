<script type="ts">
	import { history } from './../stores';
</script>

<div class="screen">
	{#each $history as screen}
	<svelte:component this={screen.component} args={screen.args}></svelte:component>
	{/each}
</div>

<style lang="postcss">
	.screen {
		
	}
</style>