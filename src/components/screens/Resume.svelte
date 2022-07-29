<script type="ts">
import Command from "./Command.svelte";
import Education from "./resume/Education.svelte";
import Experience from './resume/Experience.svelte';
import Skill from "./resume/Skill.svelte";


</script>

<Command command='resume'/>
<p class="title">Resume</p>

<p>You can <strong>download</strong> a copy of Alicia's <a href="resume.pdf" target="_blank">resume</a>.</p>

<div class="page">
  <div class="md:w-3/5 md:mr-5">
    <p class="title">Experience</p>
    <Experience
      company='Dabble Writer, Inc.'
      start={2021}
      end={'Present'}
      title='Lead Senior Software Engineer'
    >
      <p>Implement, test and review features, fix bugs, manage software development team</p>
    </Experience>
    <Experience
      company={'Baber\'s, Inc.'}
      start={2011}
      end={2021}
      title='Web Developer'
    >
      <p>Design, implement, test internal and external web applications, maintained web server</p>
      <p><span class="highlight">Projects:</span> CRM, Credit Card Expense Report, Commissions, Inventory Ordering, Rewards Programs and various reports (many others)</p>
    </Experience>
    <Experience
      company='Freelancer Web Developer.'
      start={2004}
      end={2011}
      title='Freelancer'
    >
      <p>Design and implement PHP apps and/or WordPress themes/plugins</p>
      <p><span class="highlight">Projects:</span> Character Database, Various WordPress based sites</p>
    </Experience>
    <p class="title">Experience</p>
    <Experience
      company='Symbol Technologies'
      start={2000}
      end={2004}
      title='Electrical Engineer I'
    >
      <p>Design and test digital and analog circuits</p>
    </Experience>
    <p class="title">Education</p>
    <Education
      school="Sessions.edu"
      degree="Certificate in Graphic/Web Design"
    />
    <Education
      school="Polytechnic University"
      year={2000}
      degree="BS. Computer Engineering"
    />
    <Education
      school="State University of New York"
      year={1998}
      degree="BS. Mathematics"
    />
  </div>
  <div class="md:w-2/5">
    <p class="title">Languages</p>
    <Skill name="PHP" count={4} />
    <Skill name="Javascript" count={4} />
    <Skill name="HTML" count={4} />
    <Skill name="CSS" count={4} />
    <Skill name="mySQL" count={4} />
    <Skill name="Typescript" count={2} />
    <p class="title">Frameworks</p>
    <Skill name="Laravel" count={4} />
    <Skill name="Vue Js" count={2} />
    <Skill name="Svelte" count={2} />
    <Skill name="Bootstrap" count={4} />
    <Skill name="Tailwind CSS" count={3} />
    <p class="title">Skills</p>
    <Skill name="Git" count={3} />
    <Skill name="TDD" count={1} />
    <Skill name="LAMP Stack" count={2} />
    <Skill name="JAMStack" count={1} />
    <p class="title">Other Skills</p>
    <p>WordPress, Code Ignitor 2.0, SQLite, MSSQL, Python, Ruby, C#, Node JS, jQuery, Tailwind CSS, Foundation Sites, Photo Editing, Logo Design, Photoshop(Affinity Photo), Illustrator(Affinity  Design)
      </p>
    <p class="title">Portfolio</p>
    <p>
      <a href="https://github.com/matalina" target="_blank">github.com/matalina</a><br/>
      aliciawilkerson.com*<br/>
    </p>
    <p class="text-xs">* type <strong>projects</strong> to see more detailed list of projects.  Don't forget to press <code>enter</code>.</p>
  </div>
</div>

<p>You can <strong>download</strong> a copy of Alicia's <a href="resume.pdf" target="_blank">resume</a>.</p>

<style lang="postcss">
  .page {
    @apply md:flex
  }
  .page .title {
    @apply text-orange-400;
  }
</style>