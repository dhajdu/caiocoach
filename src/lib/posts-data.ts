import { Post, Block } from './types';
import { POSTS_DAY6_9, BLOCKS_DAY6_9 } from './posts-day6-9';
import { POSTS_STANDALONE_1, BLOCKS_STANDALONE_1 } from './posts-standalone-1';
import { POSTS_STANDALONE_2, BLOCKS_STANDALONE_2 } from './posts-standalone-2';
import { POSTS_STANDALONE_3, BLOCKS_STANDALONE_3 } from './posts-standalone-3';

const POSTS_DAY1_5: Post[] = [
  {
    slug: 'day-1-infinite-leverage-blueprint',
    title: 'Day 1: The Infinite Leverage Blueprint',
    subtitle: 'Five AI employees. Two offices. One weekend. The exact Day 1 process -- from blank doc to a fully running org chart.',
    excerpt: 'The traditional startup playbook says you start by doing the work. You and your co-founder build things until you can\'t keep up, then you hire. Organization comes later.',
    date: 'Apr 5, 2026',
    readTime: '5 min read',
    category: 'Infinite Leverage',
    tags: ['building a company with AI agents', 'AI org chart for startups', 'one-man company AI', 'AI scrum master startup', 'Toyota Kata AI strategy', 'agentic AI for founders'],
    image: '/blog/images/day-1-infinite-leverage-blueprint.webp',
    dayNumber: 1,
    series: 'infinite-leverage-blueprint',
    seriesTotal: 14,
  },
  {
    slug: 'day-2-infinite-leverage-blueprint',
    title: 'Day 2: The Infinite Leverage Blueprint',
    subtitle: 'Set up trauma. We thought we\'d ship five agents. We shipped 12 production-grade skills -- and spent most of the day on work that nobody sees.',
    excerpt: 'We thought we\'d ship five AI agents. We shipped two agent systems with 12 production-grade skills. Here\'s what actually happened -- and why foundation work is the real work.',
    date: 'Apr 6, 2026',
    readTime: '6 min read',
    category: 'Infinite Leverage',
    tags: ['building AI agents', 'production AI systems', 'information architecture', 'workflow design', 'agentic AI', 'AI officer certification', 'always be cataloguing', '5 Ds framework'],
    image: '/blog/images/day-2-infinite-leverage-blueprint.webp',
    dayNumber: 2,
    series: 'infinite-leverage-blueprint',
    seriesTotal: 14,
  },
  {
    slug: 'day-3-infinite-leverage-blueprint',
    title: 'Day 3: The Infinite Leverage Blueprint',
    subtitle: 'The system started running. I wasn\'t listening. Day 3 is where I learned that a 1-person agentic company is not 1 founder plus N agents, it is 1 founder plus N agents plus the comms layer that lets me see what they shipped.',
    excerpt: 'Day 3: the agentic system started moving without me, and I stopped being able to see what it shipped. Here is what a 1-person agentic company really needs: a comms layer.',
    date: 'Apr 7, 2026',
    readTime: '6 min read',
    category: 'Infinite Leverage',
    tags: ['1-person agentic company', 'agentic AI', 'AI comms layer', 'PM agent', 'merged is not reviewed', 'AI officer certification', 'notification routing', 'solo founder AI'],
    image: '/blog/images/day-3-infinite-leverage-blueprint.webp',
    dayNumber: 3,
    series: 'infinite-leverage-blueprint',
    seriesTotal: 14,
  },
  {
    slug: 'day-4-infinite-leverage-blueprint',
    title: 'Day 4: The Infinite Leverage Blueprint',
    subtitle: 'The day we embraced Claude Code. One foundational tooling call, a 5-day client who bought the seat while we were still building the program, and a stack of "teach the non-techie" work that turned out to be the curriculum we already owed them.',
    excerpt: 'Day 4 of the Infinite Leverage Blueprint. We killed Co-work and moved the whole operation to Claude Code. A client bought a 5-day engagement. And the curriculum wrote itself.',
    date: 'Apr 8, 2026',
    readTime: '6 min read',
    category: 'Infinite Leverage',
    tags: ['Claude Code', 'Co-work', 'Infinite Leverage Blueprint', '1-person agentic company', 'Supabase for non-technical founders', 'AI officer certification', 'solo founder AI', 'clean URLs'],
    image: '/blog/images/day-4-infinite-leverage-blueprint.webp',
    dayNumber: 4,
    series: 'infinite-leverage-blueprint',
    seriesTotal: 14,
  },
  {
    slug: 'day-5-infinite-leverage-blueprint',
    title: 'Day 5: Infinite Leverage SUPAbase',
    subtitle: 'I built a mini CRM before my 10 AM meeting. No developer. No Salesforce license. Just Claude and Supabase. Then I connected 10 forms to 3 databases across three websites in one afternoon.',
    excerpt: 'Day 5 of the Infinite Leverage Blueprint: how a non-technical founder built a mini CRM in two hours using Claude and Supabase, then connected 10 forms to 3 databases across three websites.',
    date: 'Apr 9, 2026',
    readTime: '6 min read',
    category: 'Infinite Leverage',
    tags: ['Supabase', 'AI for founders', 'no-code CRM', 'Claude Code', 'Infinite Leverage Blueprint', 'AI leadership', 'database for non-technical founders'],
    image: '/blog/images/day-5-infinite-leverage-blueprint.webp',
    dayNumber: 5,
    series: 'infinite-leverage-blueprint',
    seriesTotal: 14,
  },
];

// Merge all posts, sorted newest first
export const POSTS: Post[] = [
  ...POSTS_DAY1_5,
  ...POSTS_DAY6_9,
  ...POSTS_STANDALONE_1,
  ...POSTS_STANDALONE_2,
  ...POSTS_STANDALONE_3,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const BLOCKS_DAY1_5: Record<string, Block[]> = {

  /* ────────────────────────────────────────────────────────
   *  DAY 1
   * ──────────────────────────────────────────────────────── */
  'day-1-infinite-leverage-blueprint': [
    // Intro
    { tag: 'p', text: 'The traditional startup playbook says you start by doing the work. You and your co-founder build things until you can\'t keep up, then you hire. Organization comes later, when you can afford it.' },
    { tag: 'p', text: 'That logic breaks when hiring has no cost.' },
    { tag: 'p', text: 'Here\'s exactly how Day 1 worked.' },

    // Step 1
    { tag: 'h2', text: 'Step 01: Map Where You\'re Going' },
    { tag: 'p', text: 'Before you hire anyone -- human or AI -- you need to know what you\'re building toward.' },
    { tag: 'p', text: 'I use the Toyota Kata framework for this. It forces you to answer three questions honestly: What does "awesome" look like when this is working? Where are you right now? What\'s your next milestone?' },
    { tag: 'p', text: 'Thirty minutes with Claude. We built a Definition of Awesome -- the north star for what this company looks like when it\'s fully operational. Then we assessed current condition honestly. No spin, no optimism. Just what\'s true right now. Then we set a target: what does success look like three months from today?' },
    { tag: 'p', text: 'This session replaced six months of vague strategic planning.' },
    { tag: 'pull-quote', text: 'If you start with a fuzzy direction, your AI agents will amplify it in every direction at once. Map first. Everything else depends on it.' },
    { tag: 'p', text: 'Most founders skip this step. They start building before they know what they\'re building toward. With AI about to execute on your behalf at machine speed, that clarity is not optional.' },

    // Step 2
    { tag: 'h2', text: 'Step 02: Decide Who You Need First' },
    { tag: 'p', text: 'Here\'s where the mindset shift happens.' },
    { tag: 'p', text: 'I had a co-founder joining me. We\'re both generalists. We\'re the real intelligence -- the founders, the ones with the vision, the taste, the judgment. The question was: what AI joins us first?' },
    { tag: 'p', text: 'The answer surprised me. Not a coder. Not a marketer.' },
    { tag: 'emphasis-box', text: '<strong>A Scrum Master.</strong> In a traditional startup, you would never hire a Scrum Master first. They\'re expensive, and when it\'s just two founders, you don\'t need one. But with AI, there\'s no cost. And organization is the key to execution.' },
    { tag: 'p', text: 'The AI Scrum Master\'s job is simple: keep the humans on track. Run the Agile processes. Facilitate daily stand-ups. Track what we\'re committing to. Hold context across sessions. Make sure things actually move forward between our touchpoints.' },
    { tag: 'p', text: 'We are the real intelligence. The first AI employee\'s job is to make the real intelligence more effective. <strong>When hiring has no cost, you lead with organization. That\'s never been true before.</strong>' },

    // Step 3
    { tag: 'h2', text: 'Step 03: Build the Innovation Office' },
    { tag: 'p', text: 'This is where things get built. Three AI employees. One team. One job: take ideas and turn them into products. (For a deeper look at how the Innovation Office fits into the bigger picture, see <a href="/blog/four-offices-of-the-future">The Four Offices of the Future</a>.)' },
    { tag: 'html', html: '<div class="agent-grid"><div class="agent-card"><div class="agent-icon" style="background:rgba(40,123,232,0.1);">&#x1F504;</div><div class="agent-body"><div class="agent-role">Agent 01</div><div class="agent-name">The Scrum Master</div><div class="agent-desc">Runs the Agile machine. Daily stand-ups for the humans. Continuous micro-sprints for the other agents. Tracks progress, holds context, surfaces blockers. Keeps everyone coordinated.</div></div></div><div class="agent-card"><div class="agent-icon" style="background:rgba(209,69,139,0.1);">&#x1F4CB;</div><div class="agent-body"><div class="agent-role">Agent 02</div><div class="agent-name">The Product Manager</div><div class="agent-desc">Turns concepts into buildable user stories. Clear acceptance criteria. No ambiguity. The translation layer between founder vision and developer execution.</div></div></div><div class="agent-card"><div class="agent-icon" style="background:rgba(26,158,116,0.1);">&#x2699;&#xFE0F;</div><div class="agent-body"><div class="agent-role">Agent 03</div><div class="agent-name">The Developer Agent</div><div class="agent-desc">Builds against specs. User story comes in, code goes out. The Scrum Master runs the review cycle immediately after -- no waiting for the next sprint. Build, review, ship or revise.</div></div></div></div>' },
    { tag: 'emphasis-box', text: 'Before Day 1 is over, all three have job descriptions, scheduled activities, and clear handoffs. They don\'t start without that. <strong>An AI agent without a clear job description is just an expensive chatbot.</strong>' },

    // Step 4
    { tag: 'h2', text: 'Step 04: Build the Revenue Office' },
    { tag: 'p', text: 'Innovation without revenue is a hobby. Two AI employees. One job: make sure we\'re building something people will actually pay for. The <a href="/blog/four-offices-of-the-future">Four Offices framework</a> lays out how the Revenue Office sits alongside Operations, Innovation, and Leadership at scale.' },
    { tag: 'html', html: '<div class="agent-grid"><div class="agent-card"><div class="agent-icon" style="background:rgba(40,123,232,0.1);">&#x1F4CC;</div><div class="agent-body"><div class="agent-role">Agent 04</div><div class="agent-name">The Project Manager</div><div class="agent-desc">Coordinates everything tied to making money. Every task, every milestone, every dependency that connects the Innovation Office output to a customer. Keeps the path to revenue visible at all times.</div></div></div><div class="agent-card"><div class="agent-icon" style="background:rgba(209,69,139,0.1);">&#x1F4E3;</div><div class="agent-body"><div class="agent-role">Agent 05</div><div class="agent-name">The Marketing Agent</div><div class="agent-desc">Thinks backwards from the customer. Writes the press release before you build -- Jeff Bezos style. Then positioning, messaging, and the content that brings customers in. Always asking: does anyone want this?</div></div></div></div>' },
    { tag: 'pull-quote', text: 'Build the Revenue Office before you build a single product. The Innovation Office builds things. The Revenue Office makes sure they\'re the right things.' },

    // Step 5
    { tag: 'h2', text: 'Step 05: Set the Two Timescales' },
    { tag: 'p', text: 'A colleague asked a good question early on: with AI running 24/7 and never sleeping, does Agile even matter anymore?' },
    { tag: 'p', text: 'The answer is: absolutely. Maybe more than ever. The discipline of the cycle is what keeps quality high. Grooming, planning, building, iterating, reviewing, retrospective. That structure prevents you from shipping garbage at the speed of light.' },
    { tag: 'p', text: 'What changes is the clock speed. Here\'s how it works in practice:' },
    { tag: 'html', html: '<div class="timescale-grid"><div class="timescale-card human"><div class="timescale-label">Human Layer</div><div class="timescale-title">Daily Rhythm</div><div class="timescale-desc">Stand-ups, check-ins, priority decisions, direction calls. Where the real intelligence does its work. You bring judgment, taste, and the questions that change the direction.</div></div><div class="timescale-card ai"><div class="timescale-label">AI Layer</div><div class="timescale-title">Continuous Micro-Sprints</div><div class="timescale-desc">Between human touchpoints, the Scrum Master runs the agents continuously. A story is picked up, built, reviewed, and shipped or revised -- in minutes, not weeks.</div></div></div>' },
    { tag: 'p', text: 'Grooming still takes human time -- thinking is where we add value. But once a story is groomed and planned, execution and review happen almost instantly. Same Agile discipline. Radically different clock speed.' },
    { tag: 'emphasis-box', text: 'Set this up explicitly. Write out the rhythms. What triggers a stand-up? What does a review cycle look like? What does "done" mean? <strong>Your Scrum Master needs these rules to operate. Define them, and the machine runs.</strong>' },

    // Scorecard
    { tag: 'stat-callout', stats: [
      { value: '5', label: 'AI Employees', color: 'blue' },
      { value: '2', label: 'Offices Built', color: 'mint' },
      { value: '48h', label: 'From Zero to Running', color: 'magenta' },
    ] },

    // Result / Conclusion section
    { tag: 'h2', text: 'The Machine Runs' },
    { tag: 'p', text: 'Five agents. Two offices. An entire operating rhythm. No office. No payroll. No hiring process. Just job descriptions, skills, and schedules.' },
    { tag: 'p', text: 'Here\'s the thing that took me a moment to sit with: this is not a productivity hack. This is a different model for how a company is built. The org chart is no longer something you add when you can afford it. It\'s the product. It\'s what you build first.' },
    { tag: 'p', text: 'We are the real intelligence. The first five employees are AI. And their first day is today.' },
    { tag: 'p', text: 'Start with the Kata. End with a machine that runs. And once the machine is running, the next challenge is knowing how to lead it -- which is exactly what <a href="/blog/your-team-needs-this-skill">Your Team Needs This Skill</a> covers.' },

    { tag: 'conclusion-box', title: 'Build Your AI Team', paragraphs: [
      'The AI Officer Institute teaches founders and executives exactly how to build and lead AI teams like the one described here -- from job descriptions to Agile rhythms to full operating systems. Learn more at <a href="https://www.caiocoach.com">caiocoach.com</a> or reach the team at <a href="https://www.ai-officer.com">ai-officer.com</a>.',
      'Read next: <a href="/blog/four-offices-of-the-future">The Four Offices of the Future</a> · <a href="/blog/using-ai-was-2025-leading-ai-is-2026">Using AI Was 2025. Leading AI Is 2026.</a>',
    ] },

    // FAQ
    { tag: 'faq', question: 'What AI agents should a startup hire first?', answer: 'Counterintuitively, hire an AI Scrum Master first. When hiring has no cost, organization is the key to execution. The Scrum Master keeps the human founders on track and runs Agile processes between sessions -- making the real intelligence (the founders) more effective before anything else is built.' },
    { tag: 'faq', question: 'How does Agile work with AI agents?', answer: 'The discipline stays the same -- grooming, planning, building, reviewing, retrospective -- but the clock speed changes dramatically. Humans operate on a daily rhythm, while the AI Scrum Master runs continuous micro-sprints between human touchpoints. Sprints that used to take two weeks now take minutes.' },
    { tag: 'faq', question: 'What is an Innovation Office in an AI company?', answer: 'The Innovation Office is a three-agent team -- Scrum Master, Product Manager, and Developer -- whose job is to take ideas and turn them into products. Each agent has a clear job description, scheduled activities, and defined handoffs to the next. No job description means no accountability -- just an expensive chatbot.' },
    { tag: 'faq', question: 'Can AI replace an org chart for a small company?', answer: 'AI doesn\'t replace the org chart -- it is the org chart. For a one-man company, the org chart is the first thing you build, not the last. Five AI agents across two offices can run a full operating rhythm with no payroll, no hiring process, and no equity conversations.' },
  ],

  /* ────────────────────────────────────────────────────────
   *  DAY 2
   * ──────────────────────────────────────────────────────── */
  'day-2-infinite-leverage-blueprint': [
    // Skills grid (custom HTML block for the two agent cards)
    { tag: 'html', html: '<div class="skills-grid"><div class="skills-card"><div class="skills-card-header"><div class="skills-icon" style="background:rgba(40,123,232,0.1);">&#x1F504;</div><div><div class="skills-agent-name">Scrum Master Agent</div><div class="skills-agent-meta">7 Skills</div></div></div><div class="skills-status passed">32/32 assertions passed</div><ul class="skills-list"><li>Daily Standup</li><li>Blocker Triage</li><li>RAID Log</li><li>Release Monitor</li><li>Retrospective</li><li>Scope Change</li><li>Status Report</li></ul></div><div class="skills-card"><div class="skills-card-header"><div class="skills-icon" style="background:rgba(209,69,139,0.1);">&#x1F4CB;</div><div><div class="skills-agent-name">Product Manager Agent</div><div class="skills-agent-meta">5 Skills</div></div></div><div class="skills-status ready">Workflows defined</div><ul class="skills-list"><li>Idea to Epic / User Story</li><li>Competitive Analysis</li><li>Build User Persona</li><li>Vision Report</li><li>Solution Options and Recommend</li></ul></div></div>' },

    { tag: 'p', text: 'That\'s 12 agent skills. Not features. Not mockups. Actual, testable agent behaviors -- each one built by combining industry best practice with our own operating flavor, with a visual workflow library showing how they connect and chain together.' },
    { tag: 'p', text: 'Here\'s what people don\'t understand about building production-grade AI systems: the agent skills are the visible output. But 80% of the work is invisible.' },

    // Problem 1
    { tag: 'h2', text: 'Problem 01: Scope Constraint' },
    { tag: 'p', text: 'We all have Macs. That\'s intentional.' },
    { tag: 'p', text: 'We could have spent time making this work across Mac, Windows, and Linux. We could have abstracted everything, documented cross-platform compatibility, solved for every edge case.' },
    { tag: 'p', text: 'We didn\'t. We decided: for this first founders retreat, we keep it simple. Mac only. If you want to come, bring a Mac -- or borrow one.' },
    { tag: 'emphasis-box', text: 'This is the unsexy part of execution that nobody talks about: <strong>knowing when to add scope and when to cut it.</strong> We chose to cut it here. That bought us three hours we could spend on something that actually mattered -- like the agent skills.' },
    { tag: 'callout', label: 'Why It Matters', text: 'One of the best ways to reduce friction is to reduce scope. Not by being lazy -- by being intentional about what problem you\'re solving for whom. Our first retreat is for founders we know. They have Macs. Done. We can add Windows support later if it actually matters.' },

    // Problem 2
    { tag: 'h2', text: 'Problem 02: Information Architecture' },
    { tag: 'p', text: 'We inherited the Mahjong Tarot website. Beautiful design. But 100+ images with zero organization. Mahjong Tarot is my dad\'s business. He\'s an astrologer. The site tells the story of his readings, the cards, the insight.' },
    { tag: 'p', text: 'All the images were mixed together. Readings. Photos of cards. Community moments. The book cover. All unnamed. All unsorted.' },
    { tag: 'p', text: 'Here\'s the thing: a website isn\'t just information. It\'s a story. And the story only works if the images match the content. You need to know which photo is "Dad doing a reading" versus "just a card" versus "community moment." Otherwise the website breaks -- and the narrative breaks with it.' },
    { tag: 'p', text: 'So we spent the afternoon cataloguing. <code>reading_bill</code> for his readings. <code>card_name</code> for cards. <code>community_photo_description</code> for community moments. <code>book_cover_mahjong_mirror</code> for the book. Documented. Organized. Style guide written.' },
    { tag: 'p', text: 'It sounds administrative. It was actually saving the business.' },
    { tag: 'callout', label: 'Why It Matters', text: 'We\'re using an AI Web Dev Agent to build this site. That agent can\'t operate if it doesn\'t know what the pictures are. It needs to understand: is this a reading? Is this a card? Is this my dad in action? Without clear naming and organization, the agent is blind. It can\'t make decisions about layout, flow, or narrative. <strong>Your agents can only be as smart as the data they have access to.</strong>' },
    { tag: 'pull-quote', text: 'This is what Always Be Cataloguing means in practice. Not abstract data architecture. Concrete naming that lets an agent tell a story correctly.' },
    { tag: 'p', text: 'You can see the site we\'re building here: <a href="https://mahjong-tarot.vercel.app/" target="_blank" rel="noopener">mahjong-tarot.vercel.app</a>. This is the ABC principle in action -- and it\'s the same skill we teach in the <a href="/certification">AI Officer certification</a>.' },

    // Problem 3
    { tag: 'h2', text: 'Problem 03: Workflow Design' },
    { tag: 'p', text: 'One thing people don\'t realize about multi-agent systems: agents don\'t work in isolation. They chain together.' },
    { tag: 'html', html: '<div class="workflow-chain"><div class="chain-node"><div class="chain-dot">&#x1F4CB;</div><div class="chain-label">Daily<br>Standup</div></div><div class="chain-arrow">&rarr;</div><div class="chain-node"><div class="chain-dot">&#x1F50D;</div><div class="chain-label">Blocker<br>Triage</div></div><div class="chain-arrow">&rarr;</div><div class="chain-node"><div class="chain-dot">&#x1F4C1;</div><div class="chain-label">RAID<br>Log</div></div><div class="chain-arrow">&rarr;</div><div class="chain-node"><div class="chain-dot">&#x1F4CA;</div><div class="chain-label">Status<br>Report</div></div><div class="chain-arrow">&rarr;</div><div class="chain-node"><div class="chain-dot">&#x1F504;</div><div class="chain-label">Retro-<br>spective</div></div></div>' },
    { tag: 'p', text: 'That\'s a workflow. And designing a workflow where multiple agents and humans can hand work off to each other -- without dropping it or duplicating effort -- is work.' },
    { tag: 'p', text: 'We had to design: what does a blocker look like when it comes out of Daily Standup? What format does Blocker Triage expect, and what does it output? How does RAID Log consume that output without duplicating what Retrospective owns?' },
    { tag: 'callout', label: 'Why It Matters', text: 'The PM agent\'s five skills don\'t work in a vacuum. Idea flows to Epic. Epic informs competitive analysis. Analysis informs personas. Personas inform the vision report. Vision informs solution options. We had to design that chain -- and that took a full afternoon.' },

    // The 5 Ds
    { tag: 'h2', text: 'The 5 Ds in Practice' },
    { tag: 'p', text: 'At the AI Officer Institute, we teach a framework called the 5 Ds. Every AI officer needs to work through them in order. Day 2 was almost entirely steps 2 and 3 -- and that\'s exactly where the invisible labor lives.' },
    { tag: 'html', html: '<div class="five-ds"><div class="five-ds-label">The 5 Ds Framework</div><div class="five-d-row"><div class="five-d-num">D1</div><div class="five-d-body"><div class="five-d-name">Define the problem</div><p class="five-d-desc">Get crystal clear on what you\'re building and why before a single agent is written.</p></div></div><div class="five-d-row active"><div class="five-d-num">D2</div><div class="five-d-body"><div class="five-d-name">Determine your information</div><p class="five-d-desc">Find where all your information lives, organize it, and catalogue it. Always be cataloguing.</p></div></div><div class="five-d-row active"><div class="five-d-num">D3</div><div class="five-d-body"><div class="five-d-name">Design the workflow</div><p class="five-d-desc">Map how work flows through a system where humans and agents hand off to each other.</p></div></div><div class="five-d-row"><div class="five-d-num">D4</div><div class="five-d-body"><div class="five-d-name">Develop the instructions</div><p class="five-d-desc">Write the agent skills, prompts, and behaviors that make the workflow run.</p></div></div><div class="five-d-row"><div class="five-d-num">D5</div><div class="five-d-body"><div class="five-d-name">Deploy to production</div><p class="five-d-desc">Ship it. Test it with real people. Learn from what breaks.</p></div></div></div>' },
    { tag: 'p', text: 'Day 2 was steps 2 and 3. Not because we planned it that way. Because that\'s where the real work was.' },

    // Scorecard
    { tag: 'stat-callout', stats: [
      { value: '12', label: 'Agent Skills Built', color: 'blue' },
      { value: '32/32', label: 'Assertions Passed', color: 'mint' },
      { value: '80%', label: 'Invisible Work', color: 'magenta' },
    ] },

    // The Actual Lesson
    { tag: 'h2', text: 'The Actual Lesson' },
    { tag: 'p', text: 'Building production-grade AI systems looks nothing like hacking with Claude in a notebook.' },
    { tag: 'p', text: 'The difference isn\'t the tools. It\'s the infrastructure.' },
    { tag: 'emphasis-box', text: 'You can have Claude. You can have good prompts. You can have a strong thesis. But if you don\'t have clean Git workflows, organized information, and designed agent handoffs -- you have a collection of isolated skills that don\'t form a system. <strong>The boring work is the load-bearing work.</strong>' },
    { tag: 'p', text: 'This is why foundation work is brutal on Day 2. Because you\'re not building features yet. You\'re building the scaffolding that features depend on. And as we cover in <a href="/blog/your-team-needs-this-skill">Your Team Needs This Skill</a>, this is exactly what separates AI users from AI leaders: the ability to organize, design, and instruct -- not just prompt.' },

    // What's Different Tomorrow
    { tag: 'h2', text: 'What\'s Different Tomorrow' },
    { tag: 'p', text: 'We have clean Git. We have organized information. We have designed workflows. We have 12 agent skills that are testable and chainable.' },
    { tag: 'p', text: 'Tomorrow -- just me and Yon, no engineers -- we don\'t build new skills. We run the ones we have. We see if the workflows actually hold up with two people instead of four.' },
    { tag: 'p', text: 'That\'s when we find out if the foundation work was worth it.' },

    // Conclusion
    { tag: 'conclusion-box', title: 'The Real Insight', paragraphs: [
      '50% of leadership is leading AI. That doesn\'t mean knowing how to prompt. It means: can you organize information so agents can use it? Can you design workflows so agents can chain together? Can you give clear instructions so agents know what to do?',
      'If yes, your agents scale. If no, you\'re the bottleneck -- no matter how smart your tools are.',
      'We built this firsthand on Day 2 of the Infinite Leverage Blueprint. The cataloguing, the workflow design, the Git infrastructure -- that\'s the work that determines whether your agents become force multipliers or just faster mistakes.',
      'Learn how to build and lead AI systems like this at <a href="https://www.caiocoach.com">caiocoach.com</a> or explore the full <a href="/certification">AI Officer certification program</a>.',
      'Read next: <a href="/blog/day-3-infinite-leverage-blueprint">Day 3: The System Started Running</a> · <a href="/blog/day-1-infinite-leverage-blueprint">Day 1: The Infinite Leverage Blueprint</a> · <a href="/blog/your-team-needs-this-skill">Your Team Needs This Skill</a>',
    ] },

    // FAQ
    { tag: 'faq', question: 'Why does building production AI systems take so long?', answer: 'The agent skills are the visible output, but 80% of the work is invisible. You need clean Git workflows so code doesn\'t collide, organized information so agents can find what they need, and designed handoffs so agents can chain together without dropping work. Without that foundation, you have a collection of isolated skills -- not a system.' },
    { tag: 'faq', question: 'What is the 5 Ds framework for AI deployment?', answer: 'Define the problem. Determine where your information is and organize it (always be cataloguing). Design the workflow. Develop the instructions. Deploy to production. Most teams skip straight to Develop and wonder why their agents don\'t work. The invisible labor lives in steps 2 and 3.' },
    { tag: 'faq', question: 'What does Always Be Cataloguing mean in practice?', answer: 'It means organizing your assets, information, and documentation so that AI agents can actually use them. An agent can only be as smart as the data it has access to. If your images are unnamed, your files are unsorted, or your process isn\'t documented, your agents are operating blind -- no matter how sophisticated the model.' },
    { tag: 'faq', question: 'How do multi-agent workflows chain together?', answer: 'Each agent\'s output becomes the next agent\'s input. The Daily Standup flags blockers. Blocker Triage investigates them. The RAID Log captures them. The Status Report surfaces them. The Retrospective learns from them. Designing that chain -- specifying the exact format each agent outputs and expects -- is the workflow design step, and it takes real time to get right.' },
  ],

  /* ────────────────────────────────────────────────────────
   *  DAY 3
   * ──────────────────────────────────────────────────────── */
  'day-3-infinite-leverage-blueprint': [
    // Problem 1 - Git literacy
    { tag: 'p', text: 'Yon is not a coder. He is a lawyer. He had used Git before, on his own, but he had never opened a pull request in his life. Today he hit the wall there. Before his daily check-in could go through, he had to push code on a branch and open a PR to merge it. He got stuck. Trac got him through it, and Yon shipped PR #12, "Add writer agent and standup 2026-04-07."' },
    { tag: 'p', text: 'Small moment, but it pointed at something I had not appreciated. The new bottleneck in an agentic company is not "can you write code." It is "can you push code so the rest of the system can see it." Collaboration inside a codebase is a distinct skill, and almost nobody has it on day one.' },
    { tag: 'callout', label: 'Why It Matters', text: 'For the curious generalists about to enter agentic companies (lawyers, operators, marketers), that is the gap worth knowing about. You do not need to become a senior engineer. You do need to learn the shape of a branch, a commit, and a PR, because that is the shared surface every agent and every human writes to. This is one of the core literacies we teach in the <a href="/certification">AI Officer certification</a>.' },

    // Problem 2 - Notification Routing
    { tag: 'h2', text: 'Problem 02: Notification Routing' },
    { tag: 'p', text: 'The Project Manager agent we shipped on <a href="/blog/day-2-infinite-leverage-blueprint">Day 2</a> ran its first real standup cycle today without me in the room. It pinged. It waited. It chased. It produced its report.' },
    { tag: 'html', html: '<div class="timeline-row"><div class="timeline-time">SENT</div><div class="timeline-body"><strong>Email reminder</strong> to Dave. Nobody around here checks email anymore.</div></div><div class="timeline-row"><div class="timeline-time">SEEN</div><div class="timeline-body"><strong>Claude scheduled-task popup</strong>, an in-app notification I had not realized I had come to rely on. That is what actually got my attention.</div></div><div class="timeline-row"><div class="timeline-time">FIX</div><div class="timeline-body"><strong>Day 4 move:</strong> route the PM agent off email and onto Lark, where I actually live during the day.</div></div>' },
    { tag: 'emphasis-box', text: 'Notification routing is not an afterthought. It is a design decision. <strong>The agent did its job. The channel was wrong.</strong> An agent that pings a channel nobody watches is the same, from the founder\'s point of view, as an agent that did nothing at all.' },

    // Problem 3 - Merged Is Not Reviewed
    { tag: 'h2', text: 'Problem 03: Merged Is Not Reviewed' },
    { tag: 'p', text: 'Late in the day, Yon told me he had finished the writer agent. He did not share results. He did not post examples. He did not walk me through it. The PR merged. The system told me it merged. The system did not tell me whether the thing inside the PR is any good.' },
    { tag: 'p', text: 'The writer is one of the five agents from the Day 0 org chart. Its job is simple: the writer writes. And on Day 3, the person helping me bootstrap it shipped a major piece, and I have no idea what is in it.' },
    { tag: 'pull-quote', text: 'Merged is not reviewed. Done is not demoed.' },
    { tag: 'p', text: 'This is the failure mode nobody warned me about. The old solo model: I do everything, so I know everything. The new solo model: the agents do the work, and the only thing I know is what I designed the system to surface. I have to design the read path on purpose, or I wake up on Day 30 running a company I have never actually seen.' },
    { tag: 'p', text: 'The PM agent is supposed to be the safety net. It told me Yon checked in. It did not tell me his work was un-reviewed and un-demoed. That is the next thing I have to teach it.' },

    // The Pattern Underneath: Comms layer
    { tag: 'h2', text: 'The Pattern Underneath: The Comms Layer' },
    { tag: 'p', text: 'Day 3 the foundation started moving on its own, and the cracks it exposed were not about capability. They were about communication.' },
    { tag: 'p', text: 'A 1-person agentic company is not 1 founder plus N agents. It is 1 founder, plus N agents, plus the comms layer that lets me see what they shipped. That layer has three parts.' },
    { tag: 'html', html: '<div class="comms-grid"><div class="comms-card"><div class="comms-card-num">Part 01</div><div class="comms-card-title">How the agents talk to me</div><p>Pick a channel I actually look at. Email is not it. Lark is. If the agent pings somewhere I never visit, the ping never happened.</p></div><div class="comms-card"><div class="comms-card-num">Part 02</div><div class="comms-card-title">How I see what got shipped without being in the room</div><p>Merged is not reviewed. Done is not demoed. I have to design the read path: a summary, a diff, a demo link, a before/after, something I can consume in 60 seconds that tells me whether the work was actually any good.</p></div><div class="comms-card"><div class="comms-card-num">Part 03</div><div class="comms-card-title">How I stay honest with myself when nobody is watching</div><p>The chat thread going quiet today was not a Yon problem. It was me going heads-down and trusting the system to catch anything I missed, before I had built it to do that. The founder is the last line of accountability, and the system has to nudge me when I go quiet.</p></div></div>' },
    { tag: 'p', text: 'I had not designed any of those three on purpose before today. The PM agent was a partial answer to the first one. The other two I noticed because they failed.' },

    // Recommended Watch
    { tag: 'h2', text: 'Recommended Watch' },
    { tag: 'p', text: 'Yon and I watched a video this morning about the person who ran growth marketing at Anthropic, solo, for around six months. One human, no team, building systems instead of doing tasks. Some of what we are doing as we build out the agents is shaped by what he talks about here.' },
    { tag: 'p', text: '<a href="https://www.youtube.com/watch?v=ILmwmgMcCnc" target="_blank" rel="noopener">How Anthropic does growth marketing on YouTube</a>.' },

    // Scorecard
    { tag: 'stat-callout', stats: [
      { value: '1', label: 'First PR for Yon', color: 'blue' },
      { value: '1', label: 'Wrong Channel', color: 'magenta' },
      { value: '3', label: 'Parts of the Comms Layer', color: 'mint' },
    ] },

    // What's Next
    { tag: 'h2', text: 'What\'s Next' },
    { tag: 'p', text: 'Day 4 is about finishing and shipping. Complete the writer agent. Complete the designer agent. Get the URL mapped. Get the website updated. The comms-layer work is real, but it is a parallel fix. The main thing Day 4 has to produce is visible output in the world.' },
    { tag: 'p', text: 'Day 1 was vision. Day 2 was foundation. Day 3 the machine started moving without me. Day 4 is when something the agents built shows up on the open web.' },

    // Conclusion
    { tag: 'conclusion-box', title: 'The Real Insight', paragraphs: [
      'Every founder I know who is trying to build a 1-person agentic company is focused on the agents. Which ones to hire. Which ones to wire up. Which ones to replace.',
      'Day 3 taught me that is only half the build. The other half is the comms layer: how the agents talk to you, how you see what they shipped, and how you stay honest when the chat thread goes quiet. Without it, you do not have a 1-person company. You have a pile of scripts running in a basement that you hope are doing the right thing.',
      'This is the work we are teaching inside the <a href="/certification">AI Officer certification program</a>, and it is exactly the leadership muscle a Chief AI Officer has to build.',
      'Read next: <a href="/blog/day-2-infinite-leverage-blueprint">Day 2: Set Up Trauma</a> · <a href="/blog/day-1-infinite-leverage-blueprint">Day 1: The Vision</a> · <a href="/blog/how-to-build-a-one-man-company-with-ai">How to Build a 1-Person Company With AI</a>',
    ] },

    // FAQ
    { tag: 'faq', question: 'What is a 1-person agentic company?', answer: 'A 1-person agentic company is one human plus a fleet of AI agents doing the work that used to require a team. But Day 3 proved it is not just 1 founder plus N agents. It is 1 founder, plus N agents, plus the comms layer that lets the founder actually see what the agents shipped.' },
    { tag: 'faq', question: 'Why does notification routing matter for agentic systems?', answer: 'An agent can do its job perfectly and still fail if its output goes to a channel nobody watches. Our Project Manager agent ran its first standup cycle correctly, but sent the reminder to email. Nobody reads email around here. The agent worked, the channel was wrong. Notification routing is a design decision, not an afterthought.' },
    { tag: 'faq', question: 'What does "merged is not reviewed" mean?', answer: 'Git will tell you a pull request merged. It will not tell you whether the thing inside the PR is any good. In a traditional team, you see the work happen. In a 1-person agentic company, the only thing you know is what you designed the system to surface. Merged is not reviewed, and done is not demoed. You have to build the read path on purpose, or you end up running a company you have never actually seen.' },
    { tag: 'faq', question: 'What are the three parts of the agentic comms layer?', answer: 'One: how the agents talk to you. Pick a channel you actually look at. Two: how you see what got shipped without being in the room. Merged is not reviewed, done is not demoed, design the read path. Three: how you stay honest with yourself when nobody else is watching. The founder is the last line of accountability, and the system has to nudge you when you go quiet.' },
  ],

  /* ────────────────────────────────────────────────────────
   *  DAY 4
   * ──────────────────────────────────────────────────────── */
  'day-4-infinite-leverage-blueprint': [
    // Point 1 - Killed Co-work
    { tag: 'p', text: 'We killed Co-work today as the primary harness and moved everything to Claude Code. Co-work was genuinely the right call a week ago. Today it is the wrong one, for two hard reasons.' },
    { tag: 'p', text: 'One, Claude Code now ships native schedule and dispatch. Those are the exact capabilities we were paying the Co-work coordination tax for. There is no reason to pay it twice. Two, Co-work runs in a sandbox, which means git push cannot happen automatically from inside a session. Every handoff was a manual copy and paste back into the real repo. Fine for experiments. Fatal for a daily shipping cadence where the PM agent, the writer agent, and a human are supposed to converge on a single branch.' },
    { tag: 'p', text: 'No migration pain. The repos were already on GitHub. Every MCP we needed was one install away. Everything below this line in today\'s log was shipped on Claude Code.' },
    { tag: 'pull-quote', text: 'Loyalty to outcomes, not tools. Sunk cost is the most expensive cost.' },
    { tag: 'callout', label: 'Why It Matters', text: 'The moment the platform catches up with the reason you adopted a tool, the math flips. If you are still defending last month\'s decision this month, you are paying rent on a room you are not using. This is the same muscle a Chief AI Officer has to build: audit the stack quarterly, not emotionally.' },

    // Point 2 - Somebody Bought the Seat
    { tag: 'h2', text: 'Point 02: Somebody Bought the Seat' },
    { tag: 'p', text: 'Mid-day, a client bought a 5-day Infinite Leverage Blueprint engagement. Five days on site with the team, building their own version of this system, walking out with their agents and their playbooks in their own repo. I want to sit with that for a second, because the timing was comedy and the implication was not.' },
    { tag: 'p', text: 'I am still building the program. Day 4 of 88. And someone picked up the phone and said, I am in. That changes the job for the remaining 84 days in one small but permanent way. We are no longer building this just for us. Every piece of infrastructure we wire up from here on has to be teachable, reproducible, and walkable with a non-technical founder sitting next to us. Code that only I understand is technical debt against a human who is flying here on their own dime.' },
    { tag: 'emphasis-box', text: 'The best forcing function in a startup is a paying customer who is on their way. <strong>Most of what we did today turned out to be exactly the curriculum we will need for that week.</strong> The teaching work and the building work collapsed into the same work, which is the only version of this that ever scales.' },

    // Inline image
    { tag: 'image', src: '/blog/images/wow-its-supabase-street-art.webp', alt: 'Wow, it\'s Supabase, the moment a non-technical founder ships a real database' },

    // Point 3 - Teaching the Non-Techie
    { tag: 'h2', text: 'Point 03: Teaching the Non-Techie Is the Product Now' },
    { tag: 'p', text: 'Most of Day 4 was not on the core project roadmap. Most of Day 4 was on leveling up the non-technical operator (that is me) on the plumbing that every modern web project needs. One hour with Supabase, one hour with contact forms, one hour with clean URLs, and a few smaller passes on copy, social share cards, and image polish.' },
    { tag: 'p', text: 'Halfway through the Supabase setup, Claude handed me instructions using the old names for Supabase keys. Supabase had quietly renamed them. The old name "anon" is now "publishable." The old name "service_role" is now "secret." Claude\'s training data had not caught up. I only noticed because I opened the Supabase dashboard with my own eyes and the words on the screen did not match the words in the chat. That is the whole lesson. AI is the best junior teammate you have ever had, and you still have to look at the work.' },
    { tag: 'p', text: 'Later, when I asked Claude to design the place my form data would live, it proposed three separate tables. One for general inquiries, one for keynote inquiries, one for consultation inquiries. Correct developer instinct. Wrong strategic call for my life. I told it no. One table called leads, with a column called inquiry_type. One query to count the week, one place to look, one bucket. Claude flipped the design without complaint. It was the right call, and it was a human call.' },
    { tag: 'callout', label: 'The Rule', text: 'Trust the speed. Verify the details. Stay the editor. An experienced human architect, even for one sentence of judgment, is the cheapest insurance in the building. This is the exact muscle we teach inside the <a href="/certification">AI Officer certification</a>, because it is the skill that separates "using AI" from "leading AI."' },

    // What We Actually Shipped
    { tag: 'h2', text: 'What We Actually Shipped' },
    { tag: 'p', text: 'For the people who want to see the receipts, here is the compact version. No hero lap, no drama, just the list.' },
    { tag: 'shipped-list', title: 'Day 4 -- Shipping Log', items: [
      '<strong>Moved the whole operation to Claude Code.</strong> Killed Co-work as the primary harness.',
      '<strong>Migrated a static site to clean URLs.</strong> Added vercel.json with cleanUrls true, stripped .html from 652 internal links across 41 files, and kept the old .html paths alive as 301 redirects so no backlinks break.',
      '<strong>Wired a contact-form backend to Supabase.</strong> Server-side client using the new secret key (not the old service_role name), rows confirmed landing in Postgres.',
      '<strong>Designed one leads table with an inquiry_type discriminator</strong> (general, keynote, consultation) instead of three tables. One query, one answer, one bucket.',
      '<strong>Built a unified /api/inquiries route.</strong> Field whitelist at the door, per-type validation, name and email always required.',
      '<strong>Shipped a reusable InquiryForm component.</strong> Schema-driven, so every future form on the site uses the same plumbing.',
      '<strong>Launched a book-keynote page and a schedule-consultation page</strong> with hero, pricing strip, social proof, Lark scheduler embed, and full inquiry form.',
      '<strong>Rewired navigation</strong> site-wide so hero buttons, navbar, and ContactCTA all point to the new pages.',
      '<strong>Published a new featured blog post</strong> on Supabase for non-technical founders, written in the letter voice, live and shareable.',
      '<strong>Fixed social share cards site-wide.</strong> metadataBase on the root layout, openGraph and twitter (summary_large_image) on every post.',
      '<strong>Closed the laptop at 4:00 PM</strong> to go teach my day-job class. Day job first, always.',
    ] },

    // Scorecard
    { tag: 'stat-callout', stats: [
      { value: '1', label: 'Foundational Call', color: 'blue' },
      { value: '5', label: 'Days Sold', color: 'magenta' },
      { value: '3', label: 'Contact Forms Shipped', color: 'mint' },
    ] },

    // What's Next
    { tag: 'h2', text: 'What\'s Next' },
    { tag: 'p', text: 'Day 5 is about finishing what Day 3 said Day 4 would finish. Complete the writer agent. Complete the designer agent. Get the URL mapped. Get the website updated. The comms-layer work from Day 3 is still open, and the Infinite Leverage Blueprint week is on the calendar now, which means the documentation tax is no longer optional. Every agent we ship from here has to come with a one-page explainer a non-technical founder can actually read.' },
    { tag: 'p', text: 'Day 1 was vision. Day 2 was foundation. Day 3 the machine started moving. Day 4 we picked the harness. Day 5 is when something the agents built has to show up on the open web with a name on it.' },

    // Conclusion
    { tag: 'conclusion-box', title: 'The Real Insight', paragraphs: [
      'The three lessons of Day 4 are one lesson in three outfits. Pick the tool that pays you back, not the tool you picked last month. Let a paying customer rewrite your roadmap for the better. And when you are teaching yourself, you are usually also writing the curriculum for somebody else.',
      'None of these are technical skills. They are the leadership muscles a Chief AI Officer has to build. The job is not prompting better. The job is deciding what to build, what to kill, and what to hand to a human walking in the door next week.',
      'Read next: <a href="/blog/day-3-infinite-leverage-blueprint">Day 3: The System Started Running</a> · <a href="/blog/day-2-infinite-leverage-blueprint">Day 2: Set Up Trauma</a> · <a href="/blog/how-to-build-a-one-man-company-with-ai">How to Build a 1-Person Company With AI</a>',
    ] },

    // FAQ
    { tag: 'faq', question: 'Why did you abandon Co-work for Claude Code?', answer: 'Two hard reasons. First, Claude Code now ships native schedule and dispatch, which is the exact capability we were paying the Co-work coordination tax for. Second, Co-work runs in a sandbox, so a git push cannot happen automatically from inside a session. Every handoff was a manual copy and paste. Fine for experiments, fatal for a daily shipping cadence. The moment Claude Code caught up, the math flipped.' },
    { tag: 'faq', question: 'What is the Infinite Leverage Blueprint engagement?', answer: 'The Infinite Leverage Blueprint is the 5-day, in-person program where a founder flies in to build their own version of the 1-person agentic company with our team. On Day 4 a client bought one. The implication is that every piece of infrastructure we wire up from here on has to be teachable, reproducible, and walkable with a non-technical founder sitting next to us.' },
    { tag: 'faq', question: 'How can a non-technical founder ship real web infrastructure in one day?', answer: 'You need the right pair and the right scope. On Day 4 I hooked up Supabase, shipped three contact forms feeding one leads table, and migrated a static site to clean URLs. None of it was individually hard. The hard part is doing any of it the first time without someone sitting next to you. Claude Code is that someone.' },
    { tag: 'faq', question: 'What is the trust-then-verify rule for AI pair programming?', answer: 'AI is the best junior teammate you have ever had, but you still have to look at the work. On Day 4, Claude gave me outdated Supabase key names because its training data lagged the rename. I caught it by looking at the dashboard with my own eyes. Trust the speed, verify the details, and stay the editor. The day you stop being the editor is the day the AI starts shipping mistakes in your name.' },
  ],

  /* ────────────────────────────────────────────────────────
   *  DAY 5
   * ──────────────────────────────────────────────────────── */
  'day-5-infinite-leverage-blueprint': [
    // Point 1 - Mini CRM
    { tag: 'p', text: 'I opened Claude Code, dropped in the feedback, pointed it at some photos, and told it to connect the signup form to the database. Five minutes. Done.' },
    { tag: 'p', text: 'Then I looked at the retreat participants page. It was not formatted well. I did not like it. So I told Claude to build a login function so people could go in and see who signed up. That took a few minutes. Still did not love it. So I made the list clickable. You tap a name, see all their details, and can update their status.' },
    { tag: 'p', text: 'I looked at the clock. 10 AM. I had just built a mini CRM. Login. Participant list. Click-to-view details. Status management. The kind of thing that would normally require a developer, a database admin, and a few weeks of back and forth.' },
    { tag: 'pull-quote', text: 'A website without a database is a digital brochure. It looks nice. It does not do anything.' },
    { tag: 'callout', label: 'Why It Matters', text: 'Most founders stop at the website. They build a beautiful homepage, maybe a contact form that sends an email, and they call it done. But the moment you connect a form to a database, everything changes. You go from publishing to operating. Now you are collecting information. Now you can track who signed up, what they are interested in, where they are in the process. Now you have a system.' },

    // Point 2 - Three Sites at Once
    { tag: 'h2', text: 'Point 02: Three Sites at Once' },
    { tag: 'p', text: 'This afternoon I worked on three websites simultaneously: <a href="https://www.ai-officer.com">ai-officer.com</a>, <a href="https://www.mahjongtarot.com">mahjongtarot.com</a>, and <a href="https://www.caiocoach.com">caiocoach.com</a>. The focus was Supabase. Across the three sites, I created about 10 forms and 3 databases. Every form connected to a real database. Every submission captured and stored.' },
    { tag: 'p', text: 'Here is what most people miss: working on three sites at the same time is not chaos. It is pattern recognition. Once you have connected one form to one database, you understand the pattern. Then you repeat it. Claude handles the repetition. You handle the decisions.' },
    { tag: 'emphasis-box', text: 'The only thing I did not get to was setting up the email triggers in Supabase. That is tomorrow\'s problem. <strong>The point is not perfection. The point is that 10 forms and 3 databases are now collecting real data from real users.</strong> None of them required a developer.' },

    // Point 3 - Focus
    { tag: 'h2', text: 'Point 03: Focus Is Harder Than Building' },
    { tag: 'p', text: 'Yon spent the day doing critical work cataloging our information and deploying a writer agent. We have not fully nailed the process yet for using it, but the pieces are coming together.' },
    { tag: 'p', text: 'We also worked with Jan to pull together past data and narrow our focus down to two core things we need to be cataloging: my dad\'s book and conversations with my dad. That is it. If we catalog those two things properly, the rest follows. We stick the writer into the working folder, point the designer at creating images, and we start auto-generating content. The book launch marketing starts to run itself.' },
    { tag: 'p', text: 'Getting the team focused on that objective was harder than any of the technical work today. It is very easy to go off on tangents when you have powerful tools. The discipline is not in building. It is in choosing what to build.' },
    { tag: 'callout', label: 'The Frustrations', text: 'Two things still aggravate me. First, setup. I was using two computers today and keeping them in sync properly is still friction. Second, GitHub configuration. It is getting better, but it is still not invisible. These are the kinds of problems that make non-technical founders quit before they get to the good part. The good part is what happened this morning. The bad part is the 30 minutes of setup friction that almost made me not start.' },

    // What We Actually Shipped
    { tag: 'h2', text: 'What We Actually Shipped' },
    { tag: 'p', text: 'The compact version. No hero lap, no drama, just the list.' },
    { tag: 'shipped-list', title: 'Day 5 -- Shipping Log', items: [
      '<strong>Built a mini CRM for the retreat site.</strong> Login, participant list, click-to-view details, status management. Two hours.',
      '<strong>Updated retreat website</strong> based on feedback. Connected signup form to Supabase database.',
      '<strong>Worked on three websites simultaneously.</strong> <a href="https://www.ai-officer.com">ai-officer.com</a>, <a href="https://www.mahjongtarot.com">mahjongtarot.com</a>, and <a href="https://www.caiocoach.com">caiocoach.com</a>. All three now have Supabase databases behind them.',
      '<strong>Created 10 forms across three sites.</strong> Every form connected to a real Supabase database.',
      '<strong>Set up 3 Supabase databases.</strong> All submissions captured and stored. Every site is now collecting real data from real users.',
      '<strong>Yon deployed the writer agent</strong> and spent the day cataloging information.',
      '<strong>Narrowed the catalog scope</strong> with Jan to two sources: the book and conversations with Dad.',
      '<strong>Did not get to email triggers in Supabase.</strong> Punted to tomorrow.',
    ] },

    // Scorecard
    { tag: 'stat-callout', stats: [
      { value: '10', label: 'Forms Created', color: 'blue' },
      { value: '3', label: 'Databases', color: 'magenta' },
      { value: '3', label: 'Websites Shipped', color: 'mint' },
    ] },

    // What's Next
    { tag: 'h2', text: 'What\'s Next' },
    { tag: 'p', text: 'Yon keeps refining the writer and designer agents. The goal is to start auto-generating content from the catalog. The book launch is the mission. Everything else is a tangent. Email triggers in Supabase are the first thing on tomorrow\'s list.' },

    // Conclusion
    { tag: 'conclusion-box', title: 'The Real Insight', paragraphs: [
      'The database is the leverage point. You can build websites all day. You can make them beautiful. But until you connect them to a database, you are just decorating.',
      'The moment you add Supabase, or any database layer, your website starts working for you. It collects. It tracks. It remembers. It becomes a system instead of a sign.',
      'Supabase makes this accessible. You do not need to understand SQL. You do not need to be a developer. You need to understand what a database does for you: it turns a static page into a living, working tool. That is the skill I keep coming back to when I think about what founders and executives need to learn. Not how to code. Just enough to know that connecting your frontend to a database is the difference between a brochure and a business.',
      'Read next: <a href="/blog/day-4-infinite-leverage-blueprint">Day 4: Embraced Claude Code</a> · <a href="/blog/day-3-infinite-leverage-blueprint">Day 3: The System Started Running</a> · <a href="/blog/how-to-build-a-one-man-company-with-ai">How to Build a 1-Person Company With AI</a>',
    ] },

    // FAQ
    { tag: 'faq', question: 'How did you build a CRM in two hours without a developer?', answer: 'I opened Claude Code, dropped in the feedback from a retreat website, pointed it at some photos, and told it to connect the signup form to a Supabase database. Then I added a login function, a participant list, click-to-view details, and status management. Two hours, one person, no code written by hand.' },
    { tag: 'faq', question: 'Why are databases the unlock for non-technical founders?', answer: 'A website without a database is a digital brochure. It looks nice but it does not do anything. The moment you connect a form to a database, you go from publishing to operating. You can track who signed up, what they are interested in, and where they are in the process. Supabase makes this accessible without needing to understand SQL.' },
    { tag: 'faq', question: 'How do you work on three websites at the same time?', answer: 'Pattern recognition. Once you have connected one form to one database, you understand the pattern. Then you repeat it across sites. Claude handles the repetition. You handle the decisions. Working on three sites simultaneously is not chaos, it is leverage.' },
    { tag: 'faq', question: 'What still frustrates you about this workflow?', answer: 'Two things. Setup friction from keeping two computers in sync, and GitHub configuration that is getting better but still not invisible. These are the problems that make non-technical founders quit before they get to the good part.' },
  ],
};

// Merge all blocks
export const BLOCKS_BY_SLUG: Record<string, Block[]> = {
  ...BLOCKS_DAY1_5,
  ...BLOCKS_DAY6_9,
  ...BLOCKS_STANDALONE_1,
  ...BLOCKS_STANDALONE_2,
  ...BLOCKS_STANDALONE_3,
};
