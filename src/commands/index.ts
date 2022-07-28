import type { Command } from 'src/types';
import type { SvelteComponent } from 'svelte';
import Help from '../components/screens/Help.svelte';
import Home from '../components/screens/Home.svelte';

const help = {
  command: 'help',
  component: Help as unknown as SvelteComponent,
} as Command;

const home = {
  command: 'home',
  component: Home as unknown as SvelteComponent,
  args: { start: false }
} as Command;




export const commands = {
  help,
  home,
}