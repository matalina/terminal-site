import type { SvelteComponent } from "svelte";
import { writable } from "svelte/store";
import Home from "./components/screens/Home.svelte";
import type { Command } from './types';

const home = {
  command: 'home',
  component: Home as unknown as SvelteComponent,
  args: { start: true }
} as Command;

export const history = writable([ home ]);
export const current = writable('home');
export const subcommand = writable('');