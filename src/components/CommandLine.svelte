<script type="ts">
import { history, current, subcommand } from './../stores';
import { commands } from '../commands';
import { error } from '../commands/error';
import { success } from '../commands/success';
import { onMount } from 'svelte';

let command;

function nextScreen(e) {
  if (e.charCode === 13) {
    if(command === 'clear') {
      history.update((history) => []);
      current.update(() => 'clear');
    }
    else if(command === 'download') {
      success.args.command = command;
      success.args.message = 'File opened in new window';
      history.update((history) => [ ...history, success ]);
      window.open('/resume.pdf','_blank');
    }
    else if(commands[command]) {
      history.update((history) => [ ...history, commands[command] ]);
      current.update(() => command);
    }
    else if(commands[$current].subcommands && commands[$current].subcommands[command]) {
      history.update((history) => [commands[$current].subcommands[command]]);
      subcommand.update(() => command);
    }
    else {
      error.args.command = command;
      history.update((history) => [ ...history, error])
    }
    command = '';
  }
}

let domain = window.location.hostname;
let commandLine;

function setFocus() {
  commandLine.focus();
}

onMount(() => {
  setFocus();
});

</script>
  
<svelte:window on:click={setFocus} />

{#if !$subcommand}
<div class="command-line">
  <div class="domain">alicia@{domain}</div>
  <div class="prompt">$</div>
  <div class="flex-grow">
    <input type="text" bind:value={command} bind:this={commandLine} on:keypress={nextScreen}/>
  </div>
</div>
{/if}

<style lang="postcss">
 .command-line {
    @apply flex mb-3 w-full;
  }
  .command-line div {
    @apply mr-3;
  }
  .command-line .domain {
    @apply text-yellow-200;
  }
  .command-line .prompt {
    @apply text-green-300;
  }
  .command-line input {
    @apply m-0 p-0;
  }
</style>