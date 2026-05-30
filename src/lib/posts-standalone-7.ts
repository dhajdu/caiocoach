import type { Post, Block } from './types';

/* ------------------------------------------------------------------ */
/*  Standalone batch 7                                                 */
/* ------------------------------------------------------------------ */

export const POSTS_STANDALONE_7: Post[] = [
  {
    slug: 'does-automation-create-more-work',
    title: 'The Other 50% Just Got Bigger',
    titleAccent: 'Just Got Bigger',
    subtitle:
      'Everyone is bracing for AI to take half their job. The most automated companies are hiring more expert humans, not fewer. Here is the five-step engine that turns cheap automation into more human work, and why the leader is the half that grows.',
    excerpt:
      'The most automated companies are hiring more expert humans, not fewer. The five-step engine that turns cheap automation into more human work, and why the leader who sets the goals is the half that grows.',
    date: 'May 30, 2026',
    readTime: '6 min read',
    category: 'AI Leadership',
    categories: ['AI Leadership'],
    tags: [
      'does automation create more work for humans',
      'will AI replace leaders',
      'leadership in the AI era',
      'AI won\'t replace human judgment',
      'future of leadership with AI',
      'human work in the age of AI',
      'agent vs agency AI',
      'CAIO Coach',
    ],
    featured: true,
    image: '/blog/images/the-other-50-got-bigger.webp',
    author: 'Dave Hajdu',
  },
];

export const BLOCKS_STANDALONE_7: Record<string, Block[]> = {
  'does-automation-create-more-work': [
    // Opening
    {
      tag: 'p',
      text: 'You started where I did. The assumption was in every room, said out loud or just sitting in the air: AI is coming for the work. Automate the task, remove the human, bank the savings. Notice what that assumption does to you when you really sit with it. Do you brace, or do you build? Most leaders I coach are quietly bracing, even the ones moving fast. They are waiting to find out which half of their job survives.',
    },
    {
      tag: 'p',
      text: 'I want to show you why I think the half everyone is worried about is the half that grows.',
    },

    // My own evidence
    { tag: 'h2', text: 'My own evidence kept contradicting the story' },
    {
      tag: 'p',
      text: 'Here is what I actually see, week to week. I spend most of my time now teaching people to build with AI. Retreats where <a href="/blog/ai-retreat-for-non-technical-founders">non-technical founders ship a working application in two days</a>. Sessions where leaders map their workflows to agents. A staffing business placing AI engineers into companies that are automating as fast as they can.',
    },
    {
      tag: 'p',
      text: 'By every assumption I started with, this work should be shrinking. The better the models get, the less anyone should need me. Instead the demand keeps climbing.',
    },
    {
      tag: 'p',
      text: 'I sat with that contradiction for two years without language for it. Then I read Dan Shipper\'s essay <a href="https://every.to/p/after-automation#why-automation-makes-more-work-for-humans" target="_blank" rel="noopener noreferrer">After Automation</a> this week and finally had the words. Shipper runs Every, a company that automates everything it can, alpha tests every frontier model, and lives in Claude Code and Codex all day. If anyone should be watching human work disappear, it is him. His conclusion surprised even him. There is more human work to do than ever.',
    },
    {
      tag: 'p',
      text: 'He did not give me the idea. The retreats gave me the idea. He gave me the mechanism, and the mechanism is worth understanding, because once you see it you stop bracing.',
    },

    // The engine
    { tag: 'h2', text: 'The engine that turns automation into more work' },
    {
      tag: 'p',
      text: 'Here is how cheap AI creates work instead of removing it. Five steps, and each one causes the next.',
    },
    {
      tag: 'p',
      text: '<strong>1. Models commoditize yesterday\'s competence.</strong> They are trained on the residue of finished human work, so once-rare skills become cheap and available to anyone.',
    },
    {
      tag: 'p',
      text: '<strong>2. Cheap competence gets adopted fast.</strong> When the cost drops, supply spikes. Shipper points at OpenClaw, an open source agent project that logged 44,469 pull requests, more than 12,000 of them in roughly six weeks. Kubernetes, one of the most popular open source projects on earth, took all of 2022 to reach 5,200.',
    },
    {
      tag: 'p',
      text: '<strong>3. Abundance creates sameness.</strong> Everyone draws from the same models trained on the same corpus, so the default output converges. Shipper calls this slop, and his definition is sharp: slop is visible sameness, repeated.',
    },
    {
      tag: 'p',
      text: '<strong>4. Sameness creates demand for difference.</strong> People learn to smell slop fast, so the rare and valuable thing becomes work that fits this exact person, company, and moment.',
    },
    {
      tag: 'p',
      text: '<strong>5. Difference can only come from a human.</strong> The model knows what has been done. Only a present human is alive to what needs doing right now.',
    },
    {
      tag: 'pull-quote',
      text: 'Models know what has been done. Humans know what needs doing right now. So expert demand rises rather than falls.<br /><span style="display:inline-block;margin-top:18px;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(255,255,255,0.5)">— Dan Shipper, After Automation</span>',
    },
    {
      tag: 'image',
      src: '/blog/images/the-other-50-engine.webp',
      alt: 'Five-step diagram of how cheap automation creates more human work, ending with only a human able to make the difference.',
      caption: 'The engine: each step causes the next, and only a human closes it.',
    },
    {
      tag: 'p',
      text: 'Read those three sentences again. They are his, and they are the whole argument compressed. Automating expert work does not replace experts. It multiplies the situations that need expert judgment. Every act of cheap production creates a new act of human review, direction, or differentiation downstream.',
    },
    {
      tag: 'p',
      text: 'That is the other 50%, in someone else\'s words. And it explains the thing I could not square: the companies furthest along on automation are hiring more expert humans, not fewer.',
    },

    // The detail that hit closest to home
    { tag: 'h2', text: 'The detail that hit closest to home' },
    {
      tag: 'p',
      text: 'Ask yourself: if agents really replaced people, what would the most automated company in the world do with its staff?',
    },
    {
      tag: 'p',
      text: 'Every tried to give each employee a personal agent. The agents went stale. People lost interest, stopped maintaining them, and the agents quietly degraded. So the company pulled back to agents that serve a team or the whole business, kept alive by a dedicated group of AI engineers they expect to need for the foreseeable future.',
    },
    {
      tag: 'p',
      text: 'Agents are not appliances. They need maintenance, framing, and someone who owns whether they work. Shipper describes one PowerPoint automation that runs 24 skills and 18 scripts and costs $62 in tokens to produce a single deck. Even automating something mundane becomes a standing project with its own upkeep.',
    },
    {
      tag: 'emphasis-box',
      text: 'This is the clearest outside validation I have seen of the AI Officer role. The reason I embed AI engineers in the build retreats is the same reason Every keeps a standing team. <strong>The agent does not run itself. Someone has to own it.</strong>',
    },

    // The human sandwich
    { tag: 'h2', text: 'You have to sit in the sandwich' },
    {
      tag: 'p',
      text: 'Shipper borrows a phrase from his colleague Kieran: we are the bread on either end of the AI\'s work. You set the frame at the start, what are we trying to do and what counts as good. The AI collapses the task in the middle, it drafts, searches, codes, compares. Then you judge and extend at the end, is this good, where does it belong, what happens next.',
    },
    {
      tag: 'image',
      src: '/blog/images/the-other-50-human-sandwich.webp',
      alt: 'The human sandwich diagram: a human sets the frame, AI collapses the task, a human judges and extends.',
      caption: 'The human is the bread on either end. The judgment is load bearing.',
    },
    {
      tag: 'p',
      text: 'This is exactly the shape of what we put people inside at <a href="/infinite-leverage">Infinite Leverage</a>. Most of the talk pictures AI as an employee you delegate to and walk away from. The more important mode is the shared workspace, where you and the agents work the same problem at the same time. You cannot learn that by reading about it. You have to sit in the sandwich and feel where your judgment is load bearing. That feeling is the skill.',
    },

    // There is always a framer
    { tag: 'h2', text: 'There is always a framer, and the framer is you' },
    {
      tag: 'p',
      text: 'Here is the part that holds even if you believe AGI is close.',
    },
    {
      tag: 'p',
      text: 'A benchmark only measures how well a model performs inside a frame that a human chose. Saturate the frame and a human redraws it. The cycle repeats. Even a strong AGI that can pick its own frames still optimizes toward a goal that a human set. There is always a framer. The framer is the leader.',
    },
    {
      tag: 'image',
      src: '/blog/images/the-other-50-agent-vs-agency.webp',
      alt: 'Comparison diagram defining an AI agent versus agency, showing today\'s AI has autonomy but no goals of its own.',
      caption: 'One word we get wrong. Today\'s AI has autonomy, never agency.',
    },
    {
      tag: 'p',
      text: 'We have been careless with one word, and the carelessness matters. Agency means the ability to act independently and for your own reasons. An agent means something that acts on behalf of someone else. Today\'s AI is purely the second. It has autonomy, it can run a task for hours without you, but it has no ends of its own.',
    },
    {
      tag: 'p',
      text: 'So the word I now want at the center of how leaders think about this is goals. Nothing changes until models become ends in themselves, pursuing their own goals and acting against your wishes when they choose to. Nothing on the current trajectory points there. The labs are pouring billions into making models better at executing the goals we give them, which is the opposite of agency.',
    },
    {
      tag: 'emphasis-box',
      text: 'Sit with what that means for your job. Someone has to set the goal, choose the frame, judge whether the output is any good, and decide what matters now. That someone is a person. <strong>The leader\'s job is not going away. It is getting heavier.</strong>',
    },

    // What this means for the work
    { tag: 'h2', text: 'What this means for the work in front of you' },
    {
      tag: 'p',
      text: 'My thesis has not changed in two years. AI fails in organizations because of untrained leadership, disorganized data, and undocumented workflows. What changed this week is my confidence in why the human half holds.',
    },
    {
      tag: 'p',
      text: 'It holds because the model is trained on the past and you live in the present. It holds because difference cannot be automated, only produced by someone alive to the moment. And it holds because there is always a framer, and the framer is a person with goals.',
    },
    {
      tag: 'p',
      text: 'So here is the question I would leave you with. You have probably been waiting to find out which half of your work survives the automation. What if you stopped waiting and asked a different question: am I becoming the person who sets the goals, builds the systems that govern the cheap work, and carries the judgment the models keep generating demand for?',
    },
    {
      tag: 'p',
      text: 'That is the role. That is the half of the equation that grows.',
    },
    {
      tag: 'pull-quote',
      text: 'Automation did not shrink the job of leading. It made it the rarest skill in the building.',
    },

    // Source / credit
    {
      tag: 'callout',
      label: 'Source',
      text: 'This piece builds on Dan Shipper\'s essay <a href="https://every.to/p/after-automation#why-automation-makes-more-work-for-humans" target="_blank" rel="noopener noreferrer">After Automation</a>, published at Every. The five-step mechanism, the slop definition, the human sandwich, and the agency versus agent distinction are his framing. The field evidence, the AI Officer read, and what it means for leaders are mine. His original is worth your time.',
    },

    // Soft close
    {
      tag: 'conclusion-box',
      title: 'The half worth betting on',
      paragraphs: [
        'If automation keeps making expert judgment more valuable, the move is not to brace. It is to become the person who sets the goals, builds the systems that govern the cheap work, and carries the judgment the models keep generating demand for.',
        'That is the work I do with founders and executives every week. If you want a thinking partner for it, <a href="/blog/everybody-needs-a-coach">everybody needs a coach</a> who has already crossed the gap. Or come build it with your own hands at a <a href="/retreat">private retreat</a>.',
      ],
    },

    // FAQ
    {
      tag: 'faq',
      question: 'Does automation create more work for humans?',
      answer:
        'Yes. The companies furthest along on automation are hiring more expert humans, not fewer. Cheap AI commoditizes old skills, which produces a flood of interchangeable output, which makes the rare and valuable thing the work that fits this exact person, company, and moment. Only a present human can do that. Every act of cheap production creates a new act of human review, direction, or differentiation downstream.',
    },
    {
      tag: 'faq',
      question: 'Will AI replace leaders?',
      answer:
        'No. The leader sets the goal, chooses the frame, judges whether the output is any good, and decides what matters now. As routine work gets cheaper and more abundant, that judgment gets rarer and more valuable, not less. The leader\'s job does not shrink, it gets heavier.',
    },
    {
      tag: 'faq',
      question: 'What is the difference between an AI agent and AI agency?',
      answer:
        'Agency means the ability to act independently and for your own reasons. An agent acts on behalf of someone else. Today\'s AI is purely the second: it has autonomy and can run a task for hours without you, but it has no goals of its own. The labs are optimizing models to execute the goals we give them, which is the opposite of agency.',
    },
    {
      tag: 'faq',
      question: 'What does "the other 50%" mean in AI leadership?',
      answer:
        'It is the human half of the work that grows as the automated half gets cheaper: setting goals, framing problems, judging output, and deciding what matters now. For every task AI collapses, a human is still needed to set the frame at the start and judge the result at the end.',
    },
    {
      tag: 'faq',
      question: 'If AI gets more capable, does the leader\'s job get easier or harder?',
      answer:
        'Harder. As cheap output becomes abundant and interchangeable, the rare and valuable work becomes human judgment that fits this exact person, company, and moment. The leader sets the goal, owns whether the agents work, and carries the judgment the models keep generating demand for.',
    },
  ],
};
