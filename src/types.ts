import type { SvelteComponent } from 'svelte';

export interface Command {
  command: string;
  component: SvelteComponent;
  args?: { [key: string]: any };
}