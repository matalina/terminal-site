<script type="ts">
import { onMount, afterUpdate } from 'svelte';
import { history, current, subcommand } from '../../../stores';
import { commands } from '../../../commands';
import { success } from '../../../commands/success';

let step = 0;
let complete = false;
let inputNode;
let inputValue = '';

let steps = [ 'email','name', 'subject', 'message' ];

let prompts = {
  email: 'What is your email address?',
  name: 'What is your name?',
  subject: 'What is your message in regards to?',
  message: 'What is your message? (type <strong>stop</strong> on a single line in order to quit writing the message)',
}

function close() {
  history.update((history) => [ commands[$current] ]);
  subcommand.update(() => '');
}


let validation = {
  email: { 
    fn: () => {
      let re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      return re.test(data.email);
    },
    error: 'Invalid email address',
  },
  name: {fn: () => { return true; }},
  subject: {fn: () => { return true; }},
  message: {fn: () => { return true; }},
}

let data = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

$: display = [
  { 
    type: 'prompt',
    text: 'What is your email address?',
  }
];

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

async function sendEmail() {
  const response = await fetch('/', {
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': 'send-email',
      ...data,
    })
  });
  console.log(response);
  success.args.command = 'send';
  success.args.message = 'Your email was sent';
  history.update((history) => [ commands[$current], success ]);
  subcommand.update(() => '');
}

function storeInput(e) {
  if (e.charCode === 13) {
    if(inputValue === 'exit' || (inputValue === 'no' && complete)) {
      close();
      return;
    }
    if(inputValue === 'stop') {
      complete = true;
      inputValue = '';
      return;
    }
    if(inputValue === 'yes' && complete) {
      sendEmail();
      return;
    }

    if(steps[step] === 'message' && display[display.length - 1].type === 'answer') {
      data[steps[step]] += '\n';
      display.pop();
    }

    data[steps[step]] += inputValue;

    display = [...display, {
      type: 'answer',
      text: data[steps[step]],
    } ];

    if (validation[steps[step]].fn()) {
      if(steps[step] !== 'message') { 
        step++;
        display = [ ...display, {
          type: 'prompt',
          text: prompts[steps[step]],
        }];
      }
      inputValue = '';
    }
    else {
      data[steps[step]] = '';
      display = [ ...display, {
        type: 'error',
        text: validation[steps[step]].error,
      }, {
        type: 'prompt',
        text: 'Try again',
      }];
    }
  }
}

async function scrollToBottom (node) {
  node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
}

afterUpdate(() => {
  if(display) scrollToBottom(inputNode)
})

onMount(() => {
  inputNode.focus();
});
</script>

<svelte:window on:click={() => inputNode.focus()} />

<p class="title">Send Email</p>
<p>You can exit the program anytime by typing <strong>exit</strong> on a single line and pressing <code>enter</code>.</p>
{#each display as { type, text }}
  {#if type === 'answer'}
  <pre class={type}>{@html text}</pre>
  {:else}
  <div class={type}>{@html text}</div>
  {/if}
{/each}
{#if complete}
<p class="title">Your Message</p>
<div>
  <span class="label">Email:</span> <span class="answer">{data.email}</span><br/>
  <span class="label">Name:</span> <span class="answer">{data.name}</span><br/>
  <span class="label">Subject:</span> <span class="answer">{data.subject}</span><br/>
  <span class="label">Message:</span> <pre class="answer">{data.message}</pre><br/>
</div>
<p class="prompt">Is this the message you want to send? <i>[yes|no]</i></p>
{/if}
<input bind:value={inputValue} bind:this={inputNode} on:keypress={storeInput}/>


<style lang="postcss">
  .answer {
    @apply text-gray-500;
  }
  .prompt {
    @apply text-green-300;
  }
  .error {

  }
  input {
    @apply p-0 m-0;
  }
</style>