<script type="ts">
import { history } from './../stores';
import { commands } from '../commands';
import { error } from '../commands/error';
import { onMount } from 'svelte';

let command;

function nextScreen(e) {
  if (e.charCode === 13) {
    if(command === 'clear') {
      history.update((history) => []);
    }
    else if(commands[command]) {
      history.update((history) => [ ...history, commands[command] ]);
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

<div class="command-line">
  <div class="domain">alicia@{domain}</div>
  <div class="prompt">$</div>
  <div class="flex-grow">
    <input type="text" bind:value={command} bind:this={commandLine} on:keypress={nextScreen}/>
  </div>
</div>

<style lang="postcss">
 .command-line {
    @apply flex my-3 w-full;
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
    @apply border-0 p-0 m-0 w-full;
  }
  input:focus{
    outline-width: 0;
  }
</style>