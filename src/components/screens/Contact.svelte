<script type="ts">
import Command from "./Command.svelte";
import { subcommand } from '../../stores';
import SendEmail from "./contact/SendEmail.svelte";

$: send = $subcommand === 'send';

</script>

<Command command='contact'/>
<p class="title">Contact</p>
<p>You can send Alicia an email at alicia<span class="at"></span>akddev.net, or you can <strong>send</strong> a message through the terminal.</p>

{#if send}
<SendEmail />
{/if}

<style lang="postcss">
  .at:before {
    content: '@';
  }
</style>