<script>
	import Command from './Command.svelte';
  export let args;

</script>
<Command command={args.command} />
<p class="error">Unknown command</p>

<style lang="postcss">
  
</style>