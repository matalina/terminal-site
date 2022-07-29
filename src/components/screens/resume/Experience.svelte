<script type="ts">
  export let company: string;
  export let start: number;
  export let end: number | string;
  export let title: string;
</script>

<div class="experience">
  <p class="header">
    <span class="company">{company}</span> ({start} - {end})<br/>
    <span class="jobtitle">{title}</span>
  </p>
  <slot></slot>
</div>

<style lang="postcss">
.company {
  @apply font-bold;
}
.jobtitle {
  @apply italic;
}
.header {
  @apply text-gray-100;
}
:global(.highlight) {
  @apply text-gray-200;
}
</style>