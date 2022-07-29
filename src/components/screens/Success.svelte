<script>
	import Command from './Command.svelte';
  export let args;

</script>
<Command command={args.command} />
<p class="success">{args.message}</p>

<style lang="postcss">
  
</style>