import type { SvelteComponent } from "svelte";
import { writable } from "svelte/store";
import Home from "./components/screens/Home.svelte";
import type { Command } from './types';
import { commands } from './commands';

const home = {
  command: 'home',
  component: Home as unknown as SvelteComponent,
  args: { start: true }
} as Command;

export const history = writable([ home ] as Command[]);
