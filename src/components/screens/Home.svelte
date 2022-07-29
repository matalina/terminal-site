<script type="ts">
import Command from "./Command.svelte";

export let args;

</script>

{#if !args.start}
<Command command="home" />
{/if}
<p>Hey there!</p>
<p>Welcome to my terminal-like website. To navigate around you'll need to tell the terminal what to do.  At anytime on any screen you can type <strong>help</strong> for a list of commands. Be sure to press <code>enter</code> after every command.</p>
{#if args.start}
<p>Since this is your first time here why don't you click anywhere in the window and the cursor will start to blink.  Type <strong>help</strong> and press <code>enter</code> to get the list of pages available to you.</p>
{/if}

<style lang="postcss">
 
</style>