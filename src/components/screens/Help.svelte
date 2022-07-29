<script type="ts">
import Command from "./Command.svelte";

import { commands } from '../../commands';

let commandList = Object.keys(commands);
commandList.push('clear');

</script>

<Command command='help'/>
<p class="title">Commands</p>
<div class="command-list">
{#each commandList.sort() as command}
  <div class="command"><strong>{command}</strong></div>  
{/each}
</div>

<style lang="postcss">
  .command-list {
    @apply grid md:grid-cols-6 grid-cols-2 gap-x-4 mb-3;
  }
</style>
