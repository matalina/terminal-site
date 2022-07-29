import type { Command } from 'src/types';
import type { SvelteComponent } from 'svelte';
import Success from '../components/screens/Success.svelte';

export const success = {
  command: '',
  shortcut: '',
  component: Success as unknown as SvelteComponent,
  args: { command: '', message: '' }
} as Command;