<script lang="ts">
import TextScreen from './components/TextScreen.svelte';
import CommandLine from './components/CommandLine.svelte';
import { history } from './stores';
import { afterUpdate } from 'svelte';

let element;

async function scrollToBottom (node) {
  node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
}

afterUpdate(() => {
  if($history) scrollToBottom(element)
})

</script>
<header>
  <img src="/favicon-32x32.png" alt=""/><span><strong class="text-gray-900">Alicia Wilkerson</strong> - Full Stack Developer</span>
</header>
<main bind:this={element}>
  <TextScreen />
  <CommandLine />
</main>
<footer><div>v1.0.0</div> <div>Last updated: August 2, 2022</div></footer>

<style lang="postcss">
  header {
    @apply flex items-center;
    @apply md:w-4/6 w-full mx-auto;
    @apply bg-gray-200 text-gray-800;
    @apply rounded-t-md px-3 py-1;
  }
  header img {
    @apply mr-2;
  }
  footer {
    @apply md:w-4/6 w-full mx-auto;
    @apply bg-gray-200 text-gray-500;
    @apply rounded-b-md px-3 py-1;
    @apply text-xs text-right;
    @apply flex justify-between;
  }
  main {
    @apply flex flex-col overflow-y-scroll;
    @apply md:w-4/6 mx-auto md:h-2/3 w-full h-full;
    @apply bg-gray-800 text-gray-400 p-3 font-mono;
    @apply border border-gray-200 border-x-4;
  }
  :global(input) {
    @apply bg-gray-800 text-gray-400 p-3 font-mono;
  }
</style>