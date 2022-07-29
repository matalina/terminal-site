<script type="ts">
import { set_attributes, start_hydrating } from "svelte/internal";

  export let name: string;
  export let count: number;

  let stars =  [];
  for(let i = 0; i < count; i++) {
    stars.push(true);
  }
  for(let i = 0; i < 5 - count; i++) {
    stars.push(false);
  }
</script>

<div class="skill">
  {#each stars as star}
  {#if star}
    <span class="full">■</span>
  {:else}
    <span class="empty">□</span>
  {/if}
  {/each}
  {name}
</div>

<style lang="postcss">
  .full {
    @apply text-lg mr-1;
  }
  .empty {
    @apply text-lg mr-1;
  }
</style>
