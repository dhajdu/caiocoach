import type { Post, Block } from './types';

export const POSTS_STANDALONE_3: Post[] = [
  {
    slug: 'how-to-build-a-one-man-company-with-ai',
    title: 'How to Build a One-Man Company with AI',
    subtitle: 'Five AI employees. Two offices. One weekend. The exact Day 1 process -- from blank doc to a fully running org chart.',
    excerpt: 'Five AI employees, two offices, one weekend. The exact process for building your AI org chart from day one: Toyota Kata, Agile, and the hire order that changes everything.',
    date: '2026-04-05',
    readTime: '5 min read',
    category: 'Infinite Leverage',
    tags: [
      'building a company with AI agents',
      'AI org chart for startups',
      'one-man company AI',
      'AI scrum master startup',
      'Toyota Kata AI strategy',
      'agentic AI for founders',
    ],
    image: '/blog/images/one-man-company-ai-blueprint.webp',
  },
];

export const BLOCKS_STANDALONE_3: Record<string, Block[]> = {
  'how-to-build-a-one-man-company-with-ai': [
    {
      tag: 'tl-dr',
      items: [
        'The org chart is not something you add when you can afford it. It\'s the first thing you build.',
        'Start with Toyota Kata -- map your Definition of Awesome before you hire anyone.',
        'Hire the AI Scrum Master first. When hiring has no cost, organization is the key to execution.',
        'Build two offices: Innovation (3 agents) and Revenue (2 agents). Each has clear job descriptions and handoffs.',
        'Run two timescales simultaneously: a daily human rhythm and continuous AI micro-sprints in between.',
      ],
    },
    {
      tag: 'pull-quote',
      text: 'I sat down on a Saturday morning with Claude and a blank doc. By Sunday night I had five AI employees, two offices, full job descriptions, and a scheduled operating rhythm. The company didn\'t exist 48 hours earlier. No payroll. No hiring process. No equity conversations.',
    },
    {
      tag: 'p',
      text: 'The traditional startup playbook says you start by doing the work. You and your co-founder build things until you can\'t keep up, then you hire. Organization comes later, when you can afford it.',
    },
    { tag: 'p', text: 'That logic breaks when hiring has no cost.' },
    { tag: 'p', text: 'Here\'s exactly how Day 1 worked.' },
    { tag: 'h2', text: 'Step 1: Map Where You\'re Going' },
    {
      tag: 'p',
      text: 'Before you hire anyone -- human or AI -- you need to know what you\'re building toward.',
    },
    {
      tag: 'p',
      text: 'I use the Toyota Kata framework for this. It forces you to answer three questions honestly: What does "awesome" look like when this is working? Where are you right now? What\'s your next milestone?',
    },
    {
      tag: 'p',
      text: 'Thirty minutes with Claude. We built a Definition of Awesome -- the north star for what this company looks like when it\'s fully operational. Then we assessed current condition honestly. No spin, no optimism. Just what\'s true right now. Then we set a target: what does success look like three months from today?',
    },
    {
      tag: 'p',
      text: 'This session replaced six months of vague strategic planning.',
    },
    {
      tag: 'pull-quote',
      text: 'If you start with a fuzzy direction, your AI agents will amplify it in every direction at once. Map first. Everything else depends on it.',
    },
    {
      tag: 'p',
      text: 'Most founders skip this step. They start building before they know what they\'re building toward. With AI about to execute on your behalf at machine speed, that clarity is not optional.',
    },
    { tag: 'h2', text: 'Step 2: Decide Who You Need First' },
    { tag: 'p', text: 'Here\'s where the mindset shift happens.' },
    {
      tag: 'p',
      text: 'I had a co-founder joining me. We\'re both generalists. We\'re the real intelligence -- the founders, the ones with the vision, the taste, the judgment. The question was: what AI joins us first?',
    },
    {
      tag: 'p',
      text: 'The answer surprised me. Not a coder. Not a marketer.',
    },
    {
      tag: 'emphasis-box',
      text: '<strong>A Scrum Master.</strong> In a traditional startup, you would never hire a Scrum Master first. They\'re expensive, and when it\'s just two founders, you don\'t need one. But with AI, there\'s no cost. And organization is the key to execution.',
    },
    {
      tag: 'p',
      text: 'The AI Scrum Master\'s job is simple: keep the humans on track. Run the Agile processes. Facilitate daily stand-ups. Track what we\'re committing to. Hold context across sessions. Make sure things actually move forward between our touchpoints.',
    },
    {
      tag: 'p',
      text: 'We are the real intelligence. The first AI employee\'s job is to make the real intelligence more effective. <strong>When hiring has no cost, you lead with organization. That\'s never been true before.</strong>',
    },
    { tag: 'h2', text: 'Step 3: Build the Innovation Office' },
    {
      tag: 'p',
      text: 'This is where things get built. Three AI employees. One team. One job: take ideas and turn them into products.',
    },
    {
      tag: 'p',
      text: '<strong>Agent 01: The Scrum Master</strong> -- Runs the Agile machine. Daily stand-ups for the humans. Continuous micro-sprints for the other agents. Tracks progress, holds context, surfaces blockers. Keeps everyone coordinated.',
    },
    {
      tag: 'p',
      text: '<strong>Agent 02: The Product Manager</strong> -- Turns concepts into buildable user stories. Clear acceptance criteria. No ambiguity. The translation layer between founder vision and developer execution.',
    },
    {
      tag: 'p',
      text: '<strong>Agent 03: The Developer Agent</strong> -- Builds against specs. User story comes in, code goes out. The Scrum Master runs the review cycle immediately after -- no waiting for the next sprint. Build, review, ship or revise.',
    },
    {
      tag: 'emphasis-box',
      text: 'Before Day 1 is over, all three have job descriptions, scheduled activities, and clear handoffs. They don\'t start without that. <strong>An AI agent without a clear job description is just an expensive chatbot.</strong>',
    },
    { tag: 'h2', text: 'Step 4: Build the Revenue Office' },
    {
      tag: 'p',
      text: 'Innovation without revenue is a hobby. Two AI employees. One job: make sure we\'re building something people will actually pay for.',
    },
    {
      tag: 'p',
      text: '<strong>Agent 04: The Project Manager</strong> -- Coordinates everything tied to making money. Every task, every milestone, every dependency that connects the Innovation Office output to a customer. Keeps the path to revenue visible at all times.',
    },
    {
      tag: 'p',
      text: '<strong>Agent 05: The Marketing Agent</strong> -- Thinks backwards from the customer. Writes the press release before you build -- Jeff Bezos style. Then positioning, messaging, and the content that brings customers in. Always asking: does anyone want this?',
    },
    {
      tag: 'pull-quote',
      text: 'Build the Revenue Office before you build a single product. The Innovation Office builds things. The Revenue Office makes sure they\'re the right things.',
    },
    { tag: 'h2', text: 'Step 5: Set the Two Timescales' },
    {
      tag: 'p',
      text: 'A colleague asked a good question early on: with AI running 24/7 and never sleeping, does Agile even matter anymore?',
    },
    {
      tag: 'p',
      text: 'The answer is: absolutely. Maybe more than ever. The discipline of the cycle is what keeps quality high. Grooming, planning, building, iterating, reviewing, retrospective. That structure prevents you from shipping garbage at the speed of light.',
    },
    {
      tag: 'p',
      text: 'What changes is the clock speed. Here\'s how it works in practice:',
    },
    {
      tag: 'p',
      text: '<strong>Human Layer: Daily Rhythm</strong> -- Stand-ups, check-ins, priority decisions, direction calls. Where the real intelligence does its work. You bring judgment, taste, and the questions that change the direction.',
    },
    {
      tag: 'p',
      text: '<strong>AI Layer: Continuous Micro-Sprints</strong> -- Between human touchpoints, the Scrum Master runs the agents continuously. A story is picked up, built, reviewed, and shipped or revised -- in minutes, not weeks.',
    },
    {
      tag: 'p',
      text: 'Grooming still takes human time -- thinking is where we add value. But once a story is groomed and planned, execution and review happen almost instantly. Same Agile discipline. Radically different clock speed.',
    },
    {
      tag: 'emphasis-box',
      text: 'Set this up explicitly. Write out the rhythms. What triggers a stand-up? What does a review cycle look like? What does "done" mean? <strong>Your Scrum Master needs these rules to operate. Define them, and the machine runs.</strong>',
    },
    {
      tag: 'stat-callout',
      stats: [
        { value: '5', label: 'AI Employees', color: 'blue' },
        { value: '2', label: 'Offices Built', color: 'mint' },
        { value: '48h', label: 'From Zero to Running', color: 'magenta' },
      ],
    },
    { tag: 'h2', text: 'By Monday Morning: The Machine Runs' },
    {
      tag: 'p',
      text: 'Five agents. Two offices. An entire operating rhythm. No office. No payroll. No hiring process. Just job descriptions, skills, and schedules.',
    },
    {
      tag: 'p',
      text: 'Here\'s the thing that took me a moment to sit with: this is not a productivity hack. This is a different model for how a company is built. The org chart is no longer something you add when you can afford it. It\'s the product. It\'s what you build first.',
    },
    {
      tag: 'p',
      text: 'We are the real intelligence. The first five employees are AI. And their first day is today.',
    },
    {
      tag: 'p',
      text: 'Start with the Kata. End with a machine that runs.',
    },
    {
      tag: 'conclusion-box',
      title: 'Build Your AI Team',
      paragraphs: [
        'The AI Officer Institute teaches founders and executives exactly how to build and lead AI teams like the one described here -- from job descriptions to Agile rhythms to full operating systems. Earn your <a href="/certification">AI Officer Certification</a> to go deeper on the frameworks, or bring your specific build to a weekly <a href="/coaching">AI Coaching</a> session with Dave.',
        'Join the <a href="/community">Leadership in the AI Era</a> community to connect with founders across 30+ countries who are building AI-native operating systems just like this one.',
      ],
    },
    {
      tag: 'faq',
      question: 'What AI agents should a startup hire first?',
      answer: 'Counterintuitively, hire an AI Scrum Master first. When hiring has no cost, organization is the key to execution. The Scrum Master keeps the human founders on track and runs Agile processes between sessions -- making the real intelligence (the founders) more effective before anything else is built.',
    },
    {
      tag: 'faq',
      question: 'How does Agile work with AI agents?',
      answer: 'The discipline stays the same -- grooming, planning, building, reviewing, retrospective -- but the clock speed changes dramatically. Humans operate on a daily rhythm, while the AI Scrum Master runs continuous micro-sprints between human touchpoints. Sprints that used to take two weeks now take minutes.',
    },
    {
      tag: 'faq',
      question: 'What is an Innovation Office in an AI company?',
      answer: 'The Innovation Office is a three-agent team -- Scrum Master, Product Manager, and Developer -- whose job is to take ideas and turn them into products. Each agent has a clear job description, scheduled activities, and defined handoffs to the next. No job description means no accountability -- just an expensive chatbot.',
    },
    {
      tag: 'faq',
      question: 'Can AI replace an org chart for a small company?',
      answer: 'AI doesn\'t replace the org chart -- it is the org chart. For a one-man company, the org chart is the first thing you build, not the last. Five AI agents across two offices can run a full operating rhythm with no payroll, no hiring process, and no equity conversations.',
    },
  ],
};
