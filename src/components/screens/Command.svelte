<script type="ts">
let domain = window.location.hostname;
export let command;
</script>

<div class="command-line">
  <div class="domain">alicia@{domain}</div>
  <div class="prompt">$</div>
  <div class="command">{command}</div>
</div>

<style lang="postcss">
  .command-line {
    @apply flex mb-3;
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
  .command-line .command {
    @apply text-gray-500;
  }
</style>