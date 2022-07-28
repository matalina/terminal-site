import type { Command } from 'src/types';
import type { SvelteComponent } from 'svelte';
import Error from '../components/screens/Error.svelte';

export const error = {
  command: '',
  shortcut: '',
  component: Error as unknown as SvelteComponent,
  args: { command: '' }
} as Command;