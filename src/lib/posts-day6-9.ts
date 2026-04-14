import type { Post, Block } from './types';

/* ------------------------------------------------------------------ */
/*  Day 6 - 9  posts + blocks                                         */
/* ------------------------------------------------------------------ */

export const POSTS_DAY6_9: Post[] = [
  {
    slug: 'day-6-infinite-leverage-blueprint',
    title: 'Day 6: Notifications, Personas, and $24K in the Pipeline',
    subtitle: 'CRM across three properties, Telegram and Resend notifications before 8 AM, Harvard persona frameworks feeding the content machine, and eight retreat confirmations worth $24,000.',
    excerpt: 'CRM systems across three properties, Telegram and email notifications before 8 AM, Harvard persona frameworks feeding a writer agent, and $24K in retreat pipeline. One person. Day 6.',
    date: 'Apr 10, 2026',
    readTime: '7 min read',
    category: 'Leadership in the AI Era',
    tags: ['Telegram notifications', 'Resend email', 'Harvard persona frameworks', 'Empathy Map', 'Jobs to Be Done', 'content workflow', 'AI writer agent', 'Infinite Leverage Blueprint', 'AI leadership'],
    image: '/blog/images/day-6-infinite-leverage-blueprint.webp',
    dayNumber: 6,
    series: 'infinite-leverage-blueprint',
    seriesTotal: 14,
  },
  {
    slug: 'day-7-infinite-leverage-blueprint',
    title: 'Day 7: Building the Machine Behind the Curtain',
    subtitle: 'First $6,000 payment at 6 AM, certification calculator and retreat planner live, visual CRM dashboard built, full team sprint on agent infrastructure, and the marketing workflow locked in for launch.',
    excerpt: 'First payment hits at 6 AM. Retreat pricing calculator live. Full team sprint. Project manager agent. Marketing workflow locked. One person building systems that keep running after you walk away. Day 7.',
    date: 'Apr 11, 2026',
    readTime: '7 min read',
    category: 'Leadership in the AI Era',
    tags: ['first payment', 'retreat pricing', 'project manager agent', 'Telegram automation', 'marketing workflow', 'CLAUDE.md', 'content calendar', 'Infinite Leverage Blueprint', 'AI leadership'],
    image: '/blog/images/day-7-infinite-leverage-blueprint.jpeg',
    dayNumber: 7,
    series: 'infinite-leverage-blueprint',
    seriesTotal: 14,
  },
  {
    slug: 'day-8-the-content-studio',
    title: 'How I Built a Content Studio With Claude Code in One Conversation',
    subtitle: 'The three-layer framework that makes AI content actually sound like you. Data, logic, workflow. Three foundational skills. Three actual features in Claude Code.',
    excerpt: 'I built a multi-brand content production system using Claude Code in a single session. The three-layer framework of context, instructions, and workflow that makes AI content actually sound like you.',
    date: 'Apr 12, 2026',
    readTime: '5 min read',
    category: 'AI for Learning & Upskilling',
    tags: ['how to make AI write in your voice', 'AI content workflow', 'Claude Code for writing', 'AI content creation system', 'content studio', 'Claude Code skills'],
    image: '/blog/images/day-8-the-content-studio.webp',
    dayNumber: 8,
    series: 'infinite-leverage-blueprint',
    seriesTotal: 14,
  },
  {
    slug: 'day-9-designer-got-stuck',
    title: 'Day 9: The Day the Designer Got Stuck',
    subtitle: 'Engineering AI agents is about outcomes and guardrails, not perfection. I burned 70 API calls learning that the hard way.',
    excerpt: 'Overengineering produced identical images and wasted hours. Engineering AI agents is about outcomes and guardrails, not detailed instructions. Here is how stripping it back fixed everything.',
    date: 'Apr 14, 2026',
    readTime: '6 min read',
    category: 'AI Leadership',
    categories: ['AI Leadership', 'AI for Learning & Upskilling'],
    tags: ['engineering AI agents', 'AI agent workflow', 'over-engineering AI', 'AI content pipeline', 'one-man company AI', 'AI guardrails vs instructions'],
    image: '/blog/images/day-9-designer-got-stuck.webp',
    dayNumber: 9,
    series: 'infinite-leverage-blueprint',
    seriesTotal: 14,
  },
];

/* ------------------------------------------------------------------ */
/*  Blocks by slug                                                     */
/* ------------------------------------------------------------------ */

export const BLOCKS_DAY6_9: Record<string, Block[]> = {

  /* ================================================================ */
  /*  DAY 6                                                            */
  /* ================================================================ */
  'day-6-infinite-leverage-blueprint': [
    { tag: 'p', text: 'The first thing I tackled was getting three properties onto identical CRM systems. AI Officer, CAIO Coach, and a third site. The idea was simple. Build the CRM plan once, copy the markdown file to the others, and have a consistent structure across all three.' },
    { tag: 'p', text: 'It mostly worked. CAIO Coach came online smoothly. But AI Officer has two properties and when I tried to consolidate them into one database, the AI Officer side broke. CAIO Coach works fine. AI Officer does not. I still do not know why.' },
    { tag: 'p', text: 'That is the reality of building fast. Sometimes things just do not cooperate, and you do not have time to debug because you are walking into a conference in 90 minutes.' },
    { tag: 'pull-quote', text: 'Setting up Telegram for team communications was absurdly easy. Then I got email notifications working with Resend. Both done before 8 AM.' },
    { tag: 'callout', label: 'Why It Matters', text: 'In roughly an hour, I set up a CRM system (mostly), team messaging via Telegram, and automated email notifications. One person. No developer. Telegram is the best platform if you want to automate messaging. Today I proved it. These are the communication rails that let a one-person company feel like a team.' },

    { tag: 'h2', text: 'The Content Machine Takes Shape' },
    { tag: 'p', text: 'Jan is leading the content production work, and tomorrow is the big push. We are going to completely finish our marketing team and get it live with fresh content starting Monday.' },
    { tag: 'p', text: 'Here is the plan we locked in. We chose five blog styles to rotate through. Things like listicles, how-tos, and a few others from our catalogue. Then we defined two core data sources for topics.' },
    { tag: 'p', text: 'First, the book. Bill Hajdu\'s content. The Fire Pig, the astrologer. A deep well of material. Second, weekly interviews with Bill. One conversation per week, recorded and converted into content.' },
    { tag: 'emphasis-box', text: 'From those two sources, we will produce two main blog posts per week. Then five days of social media content gets generated from that same data. <strong>Two inputs, seven outputs. That is the ratio we are building toward.</strong>' },

    { tag: 'h2', text: 'Getting the Data Right' },
    { tag: 'p', text: 'I went deep into Harvard\'s persona frameworks today and landed on a blend of two approaches: the Empathy Map and Jobs to Be Done.' },
    { tag: 'p', text: 'The AI actually recommended the mix, and it makes sense. Jobs to Be Done tells you what your customer is trying to accomplish. The Empathy Map tells you what they are feeling while they try. Together, you get a customer profile that is specific enough for a writer, human or AI, to actually write <em>to</em> someone, not just <em>about</em> something.' },
    { tag: 'p', text: 'This is the piece most people skip. They jump straight to writing without building the data layer underneath. But good data means the writing is almost perfect. The richer your customer profile, the less editing you do on the other side.' },
    { tag: 'pull-quote', text: 'An AI writer with bad data produces generic content. An AI writer with a Harvard-backed persona framework produces content that sounds like it was written by someone who knows exactly who they are talking to.' },
    { tag: 'callout', label: 'The Stack So Far', text: 'We now have a targeted customer profile feeding into the writer agent, sitting on top of two defined content sources, outputting across five blog styles. The data sets keep getting richer, and that is the whole game.' },

    { tag: 'h2', text: 'The Pipeline Grows' },
    { tag: 'p', text: 'I picked up three people at my event today who said they want to come to the retreat. That puts us at eight confirmed. Eight times three thousand is $24,000 in the pipeline.' },
    { tag: 'p', text: 'Not bad for a one-man company on Day 6.' },
    { tag: 'emphasis-box', text: 'The conference was a full day. But the morning infrastructure work meant the systems kept running while I was shaking hands. <strong>Telegram notifications. Email confirmations. CRM capturing leads. The leverage compounds.</strong>' },

    { tag: 'h2', text: 'What We Actually Shipped' },
    { tag: 'p', text: 'The compact version. No hero lap, no drama, just the list.' },
    { tag: 'shipped-list', title: 'Day 6 Shipping Log', items: [
      '<strong>CRM systems across three properties.</strong> AI Officer, CAIO Coach, and a third site. CAIO Coach works. AI Officer has a consolidation bug. Tomorrow\'s problem.',
      '<strong>Telegram team messaging.</strong> Set up and running. Absurdly easy to automate.',
      '<strong>Email notifications via Resend.</strong> Automated and live.',
      '<strong>Content strategy locked in.</strong> Five blog styles, two data sources, two posts per week, five days of social content. Two inputs, seven outputs.',
      '<strong>Harvard persona frameworks applied.</strong> Empathy Map + Jobs to Be Done feeding the writer agent.',
      '<strong>Writer agent nearly complete.</strong> Persona data, content sources, and blog styles all connected.',
      '<strong>Three new retreat confirmations.</strong> Eight total. $24K in the pipeline.',
      '<strong>Nano Bananas looking good.</strong>',
    ] },

    { tag: 'stat-callout', stats: [
      { value: '$24K', label: 'Pipeline', color: 'blue' },
      { value: '8', label: 'Retreat Confirmed', color: 'magenta' },
      { value: '2:7', label: 'Input:Output Ratio', color: 'mint' },
    ] },

    { tag: 'h2', text: 'What\'s Next' },
    { tag: 'p', text: 'Full work day tomorrow. Finish the marketing team. Get fresh content queued for Monday. Debug that AI Officer CRM issue. The sprint continues.' },

    { tag: 'conclusion-box', title: 'The Real Insight', paragraphs: [
      'The lesson is about data layers. Everyone wants to talk about AI writing content. Nobody wants to talk about the boring part. Building the persona, cataloging the source material, choosing the frameworks, defining the styles.',
      'But that boring part is where the leverage actually lives. An AI writer with bad data produces generic content. An AI writer with a Harvard-backed persona framework, a defined content source, and five proven blog styles produces content that sounds like it was written by someone who knows exactly who they are talking to.',
      'Because it does.',
    ] },

    { tag: 'faq', question: 'How did you set up CRM, Telegram, and email notifications in one morning?', answer: 'I built the CRM plan once in markdown and copied it across three properties. Then I set up Telegram for team communications and Resend for automated email notifications. Telegram is designed for automation, so integrating it took minutes. All three systems were running before 8 AM.' },
    { tag: 'faq', question: 'What persona frameworks work best for AI-generated content?', answer: 'A blend of the Empathy Map and Jobs to Be Done frameworks from Harvard. Jobs to Be Done tells you what your customer is trying to accomplish. The Empathy Map tells you what they are feeling while they try. Together they produce a customer profile specific enough for a writer, human or AI, to write to someone rather than about something.' },
    { tag: 'faq', question: 'What is the content ratio you are building toward?', answer: 'Two inputs, seven outputs. Two core data sources produce two main blog posts per week. Then five days of social media content gets generated from that same data. The richer the persona data feeding the writer, the less editing required on the other side.' },
    { tag: 'faq', question: 'How did you get $24K in the pipeline at a conference?', answer: 'Three people at the event said they want to come to the retreat. That puts us at eight confirmed at three thousand dollars each. Twenty-four thousand in the pipeline on Day 6 of a one-person company.' },
  ],

  /* ================================================================ */
  /*  DAY 7                                                            */
  /* ================================================================ */
  'day-7-infinite-leverage-blueprint': [
    { tag: 'h2', text: 'Quick Summary' },
    { tag: 'li', text: 'First payment hit at 6 AM. $6,000. Real money from real people who believe in what we are building.' },
    { tag: 'li', text: 'Built and launched three tools before 8 AM: a certification program calculator at ai-officer.com, a retreat planning calculator, and a visual CRM dashboard.' },
    { tag: 'li', text: 'Full team sprint from 10 AM to 6 PM. Global CLAUDE.md setup, advanced Claude workflows, and agent infrastructure.' },
    { tag: 'li', text: 'Project manager agent wired to Telegram. Daily summary to the whole team by 9 AM. Humans first, then agents, then alignment.' },
    { tag: 'li', text: 'Marketing team workflow locked in. Writer agent Tuesday, 48-hour human review, designer agent Thursday, live the following week.' },

    { tag: 'pull-quote', text: 'It happened at 6:00 AM. Two computers running, coffee in hand, the world still quiet. The first payment came in. $6,000. Not a test transaction. Not a placeholder. Real money from real people who believe in what we are building. I sat with that for a second. Then I got back to work.' },

    { tag: 'h2', text: 'The Context' },
    { tag: 'p', text: 'Day 7 of the Infinite Leverage Blueprint. The team was coming at 10 AM, so I had a few hours alone to knock out things that needed focus. After the team arrived, we had an eight-hour sprint building agent infrastructure that will keep running long after anyone walks away from their desk.' },
    { tag: 'p', text: 'This was the day it stopped feeling like an experiment and started feeling like a company.' },

    { tag: 'h2', text: 'The Solo Morning Build' },
    { tag: 'p', text: 'Three tools shipped before the team arrived. First, a certification program calculator live at ai-officer.com where businesses can price out the cost of certifying their team members. Tiered pricing that updates in real time based on group size. It gives people agency. It answers the question before they even think to ask it.' },
    { tag: 'p', text: 'Second, a retreat planning calculator. Different tool, different purpose. This one helps potential retreat attendees see what the experience looks like at different group sizes and configurations.' },
    { tag: 'p', text: 'Third, a visual CRM dashboard. Not a spreadsheet pretending to be a CRM. An actual visual interface for tracking leads, conversations, and pipeline across properties.' },
    { tag: 'p', text: 'I also worked on the homepage, applying the design system so everything feels consistent, and updating the team section to include photos of Dave Brooks and David Nielsen. Small things. But the kind of details that signal: this is real, these are real people, we care about how this looks.' },
    { tag: 'pull-quote', text: 'By 8 AM it was done. I walked the dog. Did a workout. And somewhere in between, made a decision: I was not going to wait on my designer to redo the Edge 8 website. I would just do it myself.' },
    { tag: 'p', text: 'Want to see what these tools actually look like? Reach out and I will send you screenshots of the certification calculator, retreat planner, and CRM dashboard. All built by one person before breakfast.' },
    { tag: 'callout', label: 'Why It Matters', text: 'Three interactive tools live before 8 AM. A certification calculator, a retreat planner, and a CRM dashboard. Each one is a sales conversation happening 24 hours a day without you in the room. When someone can see the math themselves, the friction between interest and commitment drops to nearly zero.' },

    { tag: 'h2', text: 'Infrastructure Day' },
    { tag: 'p', text: 'When the team arrived, we had a list. We started by watching a video together on advanced Claude usage: best practices, how to get the most out of it when you are building real systems, not just asking questions.' },
    { tag: 'p', text: 'From there, we built a global CLAUDE.md setup. A templatized project configuration file that sets variables for GitHub, Supabase, and the shell environment in one pass. Our engineer TRAC had built a setup style that lets you run it once and have everything wired. That alone saved hours of repetitive setup work.' },
    { tag: 'emphasis-box', text: 'The global CLAUDE.md is not just a config file. It is the difference between spinning up a new project in 30 minutes and spending half a day copying variables, checking permissions, and fixing broken connections. <strong>Build the template once. Use it everywhere. That is the pattern.</strong>' },

    { tag: 'h2', text: 'Getting the Project Manager Right' },
    { tag: 'p', text: 'We realized we had not been doing a good job of coordinating the agent layer with the human layer, and in some cases had not really set it up at all. We needed a daily process that worked in the right order.' },
    { tag: 'p', text: 'First: check what humans want to accomplish. Then check agent daily jobs. Add anything extra, align, send a summary. We hooked it into Telegram so by 9 AM every morning, everyone on the team gets a summary of what is happening.' },
    { tag: 'pull-quote', text: 'No more wondering if we are aligned. We just are. Humans set the direction. Agents handle the consistency. Telegram delivers the proof.' },
    { tag: 'callout', label: 'Why It Matters', text: 'Most teams that try to use AI agents fail because they let the agents run without human checkpoints. The order matters. Humans first, then agents, then alignment. Get that wrong and you end up with a system nobody trusts.' },

    { tag: 'h2', text: 'The Marketing Workflow' },
    { tag: 'p', text: 'Building the marketing team took longer than expected, mostly because we had to get the folder structure right before anything else would work. Agents are virtual. They spin up fresh each time. So if you want them to actually function, every folder needs to have the right context and the right skills packed in, without burning a ton of tokens on every run.' },
    { tag: 'p', text: 'Once we got that organized, we figured out the full content workflow. Tuesday the writer agent runs. Wednesday and Thursday is a 48-hour human review window. Thursday the designer agent runs. The following week everything goes live on schedule.' },
    { tag: 'p', text: 'The campaign manager role stays human for now. We want to feel this out for a couple of months before we hand that off. But the sourcing is organized: four content categories, all the source material indexed and ready to go.' },
    { tag: 'emphasis-box', text: 'Next up for marketing: amplification across our networks, PR outreach to journalists and podcasters, and eventually reactivating our email list. <strong>It has been cold for a while but it is bigger than most people realize.</strong>' },

    { tag: 'h2', text: 'What We Actually Shipped' },
    { tag: 'p', text: 'The compact version. No hero lap, no drama, just the list.' },
    { tag: 'shipped-list', title: 'Day 7 Shipping Log', items: [
      '<strong>First payment received.</strong> $6,000. Two retreat confirmations paid in full.',
      '<strong>Certification program calculator.</strong> Live at ai-officer.com. Businesses can price out certifying their team members.',
      '<strong>Retreat planning calculator.</strong> Interactive tool for retreat attendees to explore configurations.',
      '<strong>Visual CRM dashboard.</strong> Real interface for tracking leads, conversations, and pipeline across properties.',
      '<strong>Homepage design system applied.</strong> Consistent look. Team section updated with photos.',
      '<strong>Global CLAUDE.md setup.</strong> Templatized config for GitHub, Supabase, and shell environment. Run once, everything wired.',
      '<strong>Project manager agent.</strong> Daily process: humans first, agents second, alignment third. Summary to Telegram by 9 AM.',
      '<strong>Marketing team workflow.</strong> Writer Tuesday, review Wed-Thu, designer Thursday, live the following week.',
      '<strong>Folder structure for agents.</strong> Context and skills packed per folder. No wasted tokens on spin-up.',
      '<strong>Four content categories sourced and indexed.</strong> Ready for the writer agent to run Monday.',
    ] },

    { tag: 'stat-callout', stats: [
      { value: '$6K', label: 'First Payment', color: 'blue' },
      { value: '8hr', label: 'Team Sprint', color: 'magenta' },
      { value: '9 AM', label: 'Daily Summary', color: 'mint' },
    ] },

    { tag: 'h2', text: 'What\'s Next' },
    { tag: 'p', text: 'Edge 8 website rebuild. Fresh content queued for Monday. The writer agent gets its first real run. Day 8 is going to be interesting.' },

    { tag: 'conclusion-box', title: 'The Real Insight', paragraphs: [
      'Day 7 felt like building something that will keep running after I walk away from my desk. Not automating for the sake of it. Not replacing people. But creating a system where humans do what humans do best, making decisions, building relationships, staying accountable to each other, and the agents handle the repetitive, consistent work in between.',
      'The $6,000 that came in this morning was not just revenue. It was validation that the thing we are building is real enough to pay for.',
      'That is the machine behind the curtain. Not flashy. Not magic. Just systems, built in the right order, running without you in the room.',
    ] },

    { tag: 'faq', question: 'How does the retreat pricing calculator work?', answer: 'The pricing calculator is fully editable and live. It lets potential members see what they would pay based on group size rather than staring at a static number. Up to 25 members is $99 per person, 26 to 50 is $75, and over 50 is $25. The discount from the base $99 rate updates in real time as you adjust group size.' },
    { tag: 'faq', question: 'What is the project manager agent and how does it work?', answer: 'The project manager agent runs a daily process: first it checks what humans want to accomplish, then checks agent daily jobs, adds anything extra, aligns priorities, and sends a summary to Telegram by 9 AM every morning. Everyone on the team gets a summary of what is happening. No more wondering if we are aligned.' },
    { tag: 'faq', question: 'What does the marketing team content workflow look like?', answer: 'Tuesday the writer agent runs. Wednesday and Thursday is a 48-hour human review window. Thursday the designer agent runs. The following week everything goes live on schedule. The campaign manager role stays human for now. Four content categories with all source material indexed and ready to go.' },
    { tag: 'faq', question: 'What is the global CLAUDE.md setup?', answer: 'A templatized project configuration file that sets variables for GitHub, Supabase, and the shell environment in one pass. Our engineer built a setup style that lets you run it once and have everything wired. It saves hours of repetitive setup work when spinning up new projects or agent environments.' },
  ],

  /* ================================================================ */
  /*  DAY 8                                                            */
  /* ================================================================ */
  'day-8-the-content-studio': [
    { tag: 'p', text: 'You\'ve done it. You\'ve opened Claude, typed "write me a LinkedIn post about AI leadership," and gotten back something that sounds like everyone else. Polished. Correct. Completely generic.' },
    { tag: 'p', text: 'So you try again. You add more detail to the prompt. You say "make it sound like me." It gets a little better. But it still doesn\'t land. It doesn\'t sound like you. It doesn\'t know your audience. It doesn\'t understand the difference between what you\'d post on LinkedIn versus what you\'d put on your blog.' },
    { tag: 'pull-quote', text: 'The prompt is only half the equation.' },
    { tag: 'p', text: 'Sunday I took a day off from the team project. Instead, I spent the day learning <a href="https://claude.ai/claude-code" target="_blank" rel="noopener noreferrer">Claude Code</a> and studying how Every.to runs their company. And I built something for myself: a content studio that spans all the projects I\'m working on. CAIO Coach, AI Officer Institute, Edge8, my personal blog. One system, multiple brands, all from the command line.' },
    { tag: 'p', text: 'Here\'s how it works.' },

    { tag: 'h2', text: 'The Three Layers of a Content Studio' },
    { tag: 'p', text: 'Most people focus entirely on what they ask AI to do. The prompt, the task, the output they want. But the quality of what AI produces is determined just as much by what it knows before you ask. It\'s what we call "the other 50%" and it is the stuff you set up once that makes everything after it better.' },
    { tag: 'p', text: 'Building a content studio means building that onboarding. It breaks down into three layers:' },

    { tag: 'h3', text: '1. Context: The Data and Information Layer' },
    { tag: 'p', text: 'This is everything AI needs to know about you before it writes a single word. Your voice. Your audience. Your credentials. Your channels and the specific rules for each one.' },
    { tag: 'p', text: 'When I write for CAIO Coach, the context is different than when I write for <a href="https://www.ai-officer.com" target="_blank" rel="noopener noreferrer">AI Officer Institute</a> or Edge8. The audiences are different. The angle is different. On CAIO Coach, I\'m a coach helping you find your own answers. On Edge8, I\'m talking to CTOs about staffing decisions. Same author, completely different energy.' },
    { tag: 'p', text: 'That context lives in a structured document that AI reads before it starts working. It includes my author voice, audience personas, active channels, and the formatting rules for each one. Every channel has its own style. Every audience has its own pain points. If you haven\'t given AI this information, you\'re asking it to guess. And it will guess wrong every time.' },

    { tag: 'h3', text: '2. Instructions: The Rules of Engagement' },
    { tag: 'p', text: 'Context tells AI who you are. Instructions tell it how to work.' },
    { tag: 'p', text: 'Without instructions, AI will skip steps. It\'ll jump straight to a draft without understanding the idea. It\'ll produce a blog post but forget the social posts. It\'ll write something that sounds fine but doesn\'t follow the process that makes content actually good: the back and forth, the pushback, the "is this section really earning its place?"' },
    { tag: 'p', text: 'Instructions are the playbook. What to do, what not to do, when to ask questions versus just write, and where the approval gates are. They\'re not complicated. But they\'re the difference between AI that follows a process and AI that wings it.' },

    { tag: 'h3', text: '3. Workflow: The Production Process' },
    { tag: 'p', text: 'This is the part almost nobody builds. Most people treat AI as a one-shot tool: ask a question, get an answer, move on. But content production isn\'t a single prompt. It\'s a process.' },
    { tag: 'p', text: 'My blog workflow has phases: develop the idea with clarifying questions, pick a style, build an outline, run an editorial critique, draft, iterate, get approval, then produce everything. Social posts for every channel, SEO and AI search optimization, even image generation prompts. Each step builds on the last. The AI pushes back, suggests angles, asks if something is missing. It\'s a thought partner, not a vending machine.' },
    { tag: 'p', text: 'Without workflow, you get one-off outputs. With workflow, you get a production system.' },

    { tag: 'h2', text: 'The Framework Maps Directly to Claude Code' },
    { tag: 'p', text: 'Here\'s what clicked for me on Sunday. The three layers we teach: data, instructions, workflow. They aren\'t just concepts. They map directly to actual features in Claude Code:' },

    { tag: 'html', html: '<table class="framework-table"><tr><th>What We Teach</th><th>What It Is in Claude Code</th></tr><tr><td>Data</td><td><strong>Context files</strong> -- structured documents Claude reads before it writes. Your voice, audience, channels, credentials.</td></tr><tr><td>Logic</td><td><strong>Instructions</strong> -- the CLAUDE.md file that tells Claude how to work, what rules to follow, where the gates are.</td></tr><tr><td>Workflow</td><td><strong>Skills</strong> -- slash commands that chain the whole process together into a repeatable production system.</td></tr></table>' },

    { tag: 'p', text: 'This is what makes it real. Not theory. Actual files, actual commands, actual system.' },

    { tag: 'emphasis-box', text: 'None of this is advanced. Data, logic, workflow: these are foundational skills. The same ones we teach in our <a href="../../certification">certification programs</a>. <strong>The people who learn the foundations first are the ones who can build things like this in an afternoon.</strong> The people who skip straight to "write me a blog post" are the ones still getting generic output six months from now.' },

    { tag: 'h2', text: 'What I Actually Built' },
    { tag: 'p', text: 'I built this entire content studio using Claude Code.' },
    { tag: 'p', text: 'Yes, Claude Code. The tool most people think of as a developer\'s command line. Not a writing tool. Not a content platform. A coding tool.' },
    { tag: 'p', text: 'But here\'s what makes it incredibly fast for content production: I type <code>/studio</code>, and I\'m immediately in my content production system. Claude reads the right context files (data), follows the instructions (logic), and runs the skill (workflow). No copy-pasting prompts. No re-explaining my voice every session.' },
    { tag: 'p', text: 'In a single conversation, I set up four brands, each with its own context: voice, audience, and channel rules. I built a second skill, <code>/onboard</code>, that can interview a new client and build their entire content studio from scratch. The system has editorial lenses baked in: one that critiques the structure of every piece at the outline stage, another that reviews SEO implementation for search and AI discoverability. It even generates image prompts and can hit the Nanobanana API to produce the social card. All without leaving the terminal.' },
    { tag: 'p', text: 'The result: I go from a raw idea to a full blog post, social posts for every active channel, SEO optimization, and a generated image. All in one session. One person. Multiple brands.' },
    { tag: 'p', text: 'That\'s not AI replacing a content team. That\'s one person doing more, and doing it better, than they could before.' },

    { tag: 'h2', text: 'What This Means For You' },
    { tag: 'p', text: 'Here\'s the coaching question: how much context have you actually given your AI tools?' },
    { tag: 'pull-quote', text: 'You\'re hiring someone new every single time you open a chat window. No memory. No onboarding. No process.' },
    { tag: 'p', text: 'If the answer is "I just type a prompt and see what happens," you\'re working with 50% of what\'s possible.' },
    { tag: 'p', text: 'The other 50% isn\'t technical. You don\'t need to be a developer. You don\'t need to write code. You need to think honestly about three things:' },
    { tag: 'p', text: 'When was the last time you wrote down what makes your voice <em>yours</em>? Not "professional and approachable," but the actual way you think, argue, and close?' },
    { tag: 'p', text: 'Do you know who you\'re really talking to on each channel? Not "business leaders." What they\'re afraid of, what they\'re ignoring, and what would make them stop scrolling?' },
    { tag: 'p', text: 'And do you have a process, or do you just open a blank chat and hope for the best?' },
    { tag: 'p', text: 'Write that down. Structure it. Give it to your AI tools.' },

    { tag: 'conclusion-box', title: 'The Real Insight', paragraphs: [
      'Once you do, you stop asking AI to write for you. You start working with AI to produce content that actually sounds like it came from a human who gives a damn.',
      'And that\'s the whole point.',
    ] },
  ],

  /* ================================================================ */
  /*  DAY 9                                                            */
  /* ================================================================ */
  'day-9-designer-got-stuck': [
    { tag: 'pull-quote', text: 'This is part of a daily series where I\'m building toward a one-man company in 14 days using the <a href="day-1-infinite-leverage-blueprint">Infinite Leverage Blueprint</a>. I\'ve got friends and engineers who jump in when I need help, but the goal is to keep solving problems that mean I need them less.' },

    { tag: 'h2', text: 'The Morning Standup' },
    { tag: 'shipped-list', title: 'What shipped today', items: [
      '<strong>Spam fix.</strong> Woke up to spam flooding the contact forms. Fixed it.',
      '<strong>Writer agent live.</strong> It now writes 18 posts per week.',
      '<strong>Code review with Track.</strong> Updated the writer. Clean.',
      '<strong>Blueprints page.</strong> Built it for CAIO Coach so plans, workflows, and diagrams auto-publish there now.',
      '<strong>Telegram to Lark.</strong> Chat threads were fighting me. Switched. Done.',
      '<strong>New web developer skills.</strong> Page builder and form builder.',
    ] },
    { tag: 'p', text: 'All of this before the day really started. Feeling sharp. And then...' },

    { tag: 'h2', text: 'The Pipeline That Makes This Possible' },
    { tag: 'p', text: 'Let me back up and explain why 18 posts a week from one person isn\'t crazy.' },
    { tag: 'p', text: 'The Mahjong Tarot project is a labor of love. My dad wrote a book that blends mahjong with tarot-style readings. The goal is simple: bring it back to life. That means content. Lots of it. Consistently.' },
    { tag: 'p', text: 'Here\'s the system:' },
    { tag: 'li', text: '<strong>Monday:</strong> A "shock and awe" post that hooks new readers, something bold, like the Year of the Fire Horse. Plus social posts for Monday and Tuesday.' },
    { tag: 'li', text: '<strong>Wednesday:</strong> Pull wisdom directly from the book. Practical advice on making better decisions. Plus social for Wednesday and Thursday.' },
    { tag: 'li', text: '<strong>Friday:</strong> Feel Good Friday, an affirmation or weekend intention. Plus social for Friday and Saturday.' },

    { tag: 'stat-callout', stats: [
      { value: '18', label: 'Posts per week', color: 'blue' },
      { value: '3', label: 'Blog posts', color: 'magenta' },
      { value: '1', label: 'Person', color: 'mint' },
    ] },

    { tag: 'p', text: 'But here\'s the part most people miss.' },
    { tag: 'p', text: 'The posts aren\'t random. They\'re connected by strategy. Monday draws you in. Wednesday teaches you something. Friday makes you feel something. You can actually measure what\'s working and adjust.' },

    { tag: 'callout', label: 'Why It Matters', text: 'Someone recently told me they\'re using <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">Claude\'s</a> marketing team skills to write their content. That\'s great. But a skill is a task. It writes one post. What it doesn\'t do is tie your Monday post to your Wednesday post to your Friday post. It doesn\'t build a content strategy you can test and iterate on. Getting a set of AI skills is like getting a prompt library. Useful? Sure. Foundational? No. The workflow is the foundation.' },

    { tag: 'p', text: 'And the workflow has its own rhythm:' },
    { tag: 'li', text: '<strong>Monday 8am:</strong> A 30-minute call with my dad. We talk about the week\'s themes, he shares stories, new ideas, reactions to what\'s been published. His thoughts go straight into the source files alongside his old writing and his new book. This is the part that matters most: the ideas. AI doesn\'t have ideas. People do. AI just executes.' },
    { tag: 'li', text: '<strong>Tuesday:</strong> The writer agent fires and produces everything for the week, pulling from those source files.' },
    { tag: 'li', text: '<strong>Wednesday morning:</strong> The human wakes up to a full content calendar. 48 hours to review and edit.' },
    { tag: 'li', text: '<strong>Thursday:</strong> The designer agent runs and creates all the images.' },
    { tag: 'li', text: '<strong>Weekend:</strong> Human reviews the visuals. Makes swaps if needed.' },
    { tag: 'li', text: '<strong>Monday morning:</strong> The web developer agent starts publishing. And the cycle starts again with another call.' },

    { tag: 'pull-quote', text: 'One person. One week of content. Fully orchestrated. But it starts with a conversation, not a prompt.' },

    { tag: 'p', text: 'Until the designer breaks.' },

    { tag: 'h2', text: 'Then the Designer Broke' },
    { tag: 'p', text: 'Here\'s the thing about engineering AI agents: the instinct is to be thorough. A friend of mine who\'s learning this stuff, along with an engineer I work with, built the designer agent. They did what engineers do. They over-engineered it.' },
    { tag: 'p', text: 'Detailed step-by-step instructions. Multiple skills files. Tons of examples showing exactly what the output should look like. He wanted to remove all ambiguity. Make it foolproof.' },
    { tag: 'p', text: 'The result? Every single image looked the same.' },
    { tag: 'emphasis-box', text: 'One style. No bold text. No variety. It kept generating candles and mahjong tiles over and over. <strong>(It\'s mahjong cards, not tiles. The agent didn\'t even get that right.)</strong>' },
    { tag: 'p', text: 'I burned my entire night on this. Hit the 70-image API limit trying to generate my way out of it. Didn\'t stop until 11pm. Forgot to do my end-of-day review. The whole routine fell apart because one agent couldn\'t do its job.' },

    { tag: 'h2', text: 'The Lesson I Already Teach But Had to Learn Again' },
    { tag: 'p', text: 'The hardest part of engineering AI agents is resisting the urge to control every detail. Here\'s what happened: the agent was given so many instructions that it collapsed into the safest possible average of everything it was told. When you over-specify, AI doesn\'t get more creative. It gets less creative. It finds the one output that satisfies every constraint and repeats it.' },
    { tag: 'p', text: 'Engineers do this instinctively. They try to engineer away variability. But with creative work, variability is the entire point.' },

    { tag: 'image', src: '/blog/images/day-9-guardrails.webp', alt: 'Two charts comparing instructions vs guardrails: more instructions decrease creativity, but guardrails and creativity rise together. Your agent isn\'t broken. You\'re micromanaging it.' },

    { tag: 'p', text: 'AI doesn\'t need perfection. It needs outcomes and guardrails.' },
    { tag: 'p', text: 'Defining your workflow (the steps, the sequence, the handoffs) is good. That\'s structure. But dictating exactly what each step should produce? That\'s where it breaks.' },

    { tag: 'h2', text: 'How I Fixed It' },
    { tag: 'p', text: 'I deleted the agent. All of it. Started from zero.' },
    { tag: 'p', text: 'Instead of detailed generation instructions, I gave it three simple decisions to rotate through:' },
    { tag: 'ol-item', text: '<strong>What\'s the key theme for this image?</strong> Pull it from the content.' },
    { tag: 'ol-item', text: '<strong>Pick an image style.</strong> Rotate through about ten options: editorial illustration, photorealistic, typography, pop art, cinematic. No repeats back to back.' },
    { tag: 'ol-item', text: '<strong>What type of image?</strong> A human, a scene, or text. If text, write the words in English.' },

    { tag: 'p', text: 'Then the real fix: I stopped generating images entirely. Instead, I had the agent write the prompts.' },
    { tag: 'emphasis-box', text: 'That\'s the foundation I teach, and I had to relearn it the hard way: <strong>have AI write the prompt. Read the prompt. Check that it understands what you want. Then, and only then, generate.</strong>' },
    { tag: 'p', text: 'You catch problems at the thinking stage, not after you\'ve burned 70 API calls and your whole evening.' },

    { tag: 'conclusion-box', title: 'Day 9 of 14', paragraphs: [
      'Some days you ship ten things before lunch. Some days one broken agent eats your entire night.',
      'That\'s the build. That\'s what it actually looks like when you\'re heading toward a one-man company with AI. Not a highlight reel. Not a polished case study. Just the real thing, wins and failures, with five days left to pull this together.',
      'Here\'s what I\'ve learned nine days in: you can build an incredible amount with AI, but you can\'t do it entirely alone. I run two companies full-time, <a href="https://www.edge8.ai" target="_blank" rel="noopener noreferrer">Edge8 AI</a> and <a href="https://www.ai-officer.com" target="_blank" rel="noopener noreferrer">AI Officer Institute</a>. I\'m the sole operator of both. This 14-day build? It\'s a side project. And I still need an engineer to call when the designer agent won\'t cooperate.',
      'That\'s not a failure. That\'s the model. Engineering AI agents is a skill every business needs, and I believe every successful business is going to have an AI engineer working alongside them. Not a full dev team. Not an agency. One person who understands how to build and fix the systems that run your company.',
      'The question isn\'t whether you need one. It\'s whether you\'ve found yours yet.',
    ] },

    { tag: 'faq', question: 'What is the biggest mistake when engineering AI agents?', answer: 'When you give an AI agent too many detailed instructions, it collapses into the safest average of everything you told it. Instead of more instructions, give it clear outcomes and simple guardrails. Let it rotate through options rather than follow a rigid template.' },
    { tag: 'faq', question: 'What is the difference between an AI skill and an AI workflow?', answer: 'An AI skill handles a single task, like writing one social media post. An AI workflow connects multiple skills into a system where outputs build on each other strategically. Skills are tools. Workflows are how you use them together to produce consistent, measurable results.' },
    { tag: 'faq', question: 'How do you manage 18 pieces of content per week with AI?', answer: 'By building a weekly production pipeline: a Monday source interview for ideas, a writer agent that produces all content on Tuesday, human review on Wednesday, a designer agent for images on Thursday, weekend visual review, and automated publishing on Monday. The key is that posts are connected by weekly themes, not produced in isolation.' },
    { tag: 'faq', question: 'Should I generate AI images directly or write prompts first?', answer: 'Write prompts first. Have the AI describe what it plans to create, review the prompt to confirm it understands your intent, then generate. This catches misunderstandings before you waste API calls and time on images that miss the mark.' },
    { tag: 'faq', question: 'Does a one-man company really mean working alone?', answer: 'No. It means building systems that reduce your dependency on others. Even with AI handling execution, having an AI engineer who can build and fix your systems is essential. The goal is a small, leveraged team, not total isolation.' },
  ],
};
