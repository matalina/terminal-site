<script type="ts">
  export let school: string;
  export let year: number | null = null;
  export let degree: string;
</script>

<div class="education">
  <p class="header">
    <span class="company">{school}</span> 
    {#if year}
    ({year})
    {/if}
    <br/>
    <span class="jobtitle">{degree}</span>
  </p>
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