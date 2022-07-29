import About from '../components/screens/About.svelte';
import Resume from '../components/screens/Resume.svelte';
import type { Command } from 'src/types';
import type { SvelteComponent } from 'svelte';
import Help from '../components/screens/Help.svelte';
import Home from '../components/screens/Home.svelte';
import Projects from '../components/screens/Projects.svelte';
import Contact from '../components/screens/Contact.svelte';
import SendEmail from '../components/screens/contact/SendEmail.svelte';
import { history, current, subcommand } from '../stores';
import { current_component } from 'svelte/internal';


const help = {
  command: 'help',
  component: Help as unknown as SvelteComponent,
} as Command;

const home = {
  command: 'home',
  component: Home as unknown as SvelteComponent,
  args: { start: false }
} as Command;

const about = {
  command: 'about',
  component: About as unknown as SvelteComponent,
} as Command;


const projects = {
  command: 'projects',
  component: Projects as unknown as SvelteComponent,
} as Command;

const resume = {
  command: 'resume',
  component: Resume as unknown as SvelteComponent,
} as Command;

const contact = {
  command: 'contact',
  component: Contact as unknown as SvelteComponent,
  subcommands: {
    send: {
      command: 'send',
      component: SendEmail as unknown as SvelteComponent,
    }
  }
} as Command;


export const commands = {
  help,
  home,
  about,
  projects,
  resume,
  contact,
}
