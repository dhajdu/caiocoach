import type { Post, Block } from './types';

/* ------------------------------------------------------------------ */
/*  Standalone batch 10                                                */
/* ------------------------------------------------------------------ */

export const POSTS_STANDALONE_10: Post[] = [
  {
    slug: 'leadership-skills-for-the-ai-era',
    title: "The Other Half of Leadership You Haven't Built Yet",
    titleAccent: "You Haven't Built Yet",
    subtitle:
      "An honest coach's take on the half of leadership most of us teach but never build: workflow design, information architecture, and writing for AI. Plus the number I am not proud of.",
    excerpt:
      "The half of leadership most of us teach but never build: workflow design, information architecture, writing for AI. An honest coach's take, plus the number I am not proud of.",
    date: 'Jun 29, 2026',
    readTime: '5 min read',
    category: 'AI Leadership',
    categories: ['AI Leadership'],
    tags: [
      'leadership skills for the AI era',
      'what skills do leaders need for AI',
      "AI leadership skills you can't fake",
      'teaching AI but not doing it',
      'workflow design for AI',
      'the other 50%',
      'CAIO Coach',
    ],
    featured: true,
    image: '/blog/images/leadership-skills-for-the-ai-era.webp',
    author: 'Dave Hajdu',
  },
];

export const BLOCKS_STANDALONE_10: Record<string, Block[]> = {
  'leadership-skills-for-the-ai-era': [
    // Opening
    {
      tag: 'p',
      text: `You teach this. Or you nod along in meetings when AI comes up, say the right things, maybe even repeat them to your team. But somewhere quieter, you know you haven't actually built the thing yourself.`,
    },
    {
      tag: 'p',
      text: `I want to name that feeling first, because it is more common than anyone admits, and there is no judgement in it. The gap between knowing about something and having done it is not a character flaw. The question is whether you are willing to look at it.`,
    },

    // I caught myself
    { tag: 'h2', text: 'I caught myself becoming what I always hated' },
    { tag: 'p', text: `Let me go first.` },
    {
      tag: 'p',
      text: `For a while there I was teaching ideas I had not practiced. Telling leaders how AI changes the work, while my own work stayed the way it had always been. I caught myself becoming the thing I have always quietly disliked: someone who teaches but cannot do.`,
    },
    {
      tag: 'p',
      text: `That was a worse sentence to sit with than it is to write. So I did the only thing that fixes it. I went and did the work myself.`,
    },

    // What I had to practice
    { tag: 'h2', text: 'What I actually had to practice' },
    { tag: 'p', text: `Here is what I had been pointing at without holding.` },
    {
      tag: 'p',
      text: `The half everyone already knows stays exactly where it is. Hire well, build culture, hold people accountable. But the AI era asks for a second half, resting on three skills I had been describing more than using.`,
    },
    {
      tag: 'p',
      text: `Workflow design: mapping who does what, in what order, who owns the result, and where AI sits on the team alongside people. Information architecture: organizing what you know so it can be found and used, because if your AI cannot find it, it does not exist. Writing instructions for AI and for code: turning your vision into something a machine can run, since prompts and scripts are just instructions you direct and AI writes.`,
    },
    {
      tag: 'p',
      text: `Then there is the shape of the company itself. I reorganized around four offices: Revenue, Operations, Talent, Innovation, with one central database underneath all of them. And I changed how I measure value. Not vague effort anymore. Real things shipped, measured against goals. That is what infinite leverage means: one person's effort, multiplied, showing up as concrete output.`,
    },
    {
      tag: 'image',
      src: '/blog/images/leadership-skills-for-the-ai-era-four-offices.webp',
      alt: 'The four offices of the AI era, Revenue, Operations, Talent, and Innovation, sitting on one central database.',
      caption: 'Four offices, one central database underneath. The database is the floor everything stands on.',
    },
    {
      tag: 'p',
      text: `I am keeping this light on purpose. But I had to live inside all of it before I could say it honestly. I have also watched this second half keep growing rather than shrinking, which I wrote about in <a href="/blog/does-automation-create-more-work">when the other 50% got bigger</a>.`,
    },

    // The number
    { tag: 'h2', text: 'The number I am not proud of' },
    { tag: 'p', text: `Here is the part I owe you straight.` },
    {
      tag: 'p',
      text: `Edge8 is about twenty percent smaller in 2026 than it was. Most of that was attrition, people choosing to leave, not a downsizing. I only actually let two people go. The rest walked on their own, and I am not proud of the losses. I think about them.`,
    },
    { tag: 'p', text: `And revenue is up sixty percent since January.` },
    {
      tag: 'image',
      src: '/blog/images/leadership-skills-for-the-ai-era-proof-stat.webp',
      alt: 'A two-bar chart: people down twenty percent, revenue up sixty percent, carried with humility.',
      caption: 'A fifth fewer people, sixty percent more revenue. The gain is the proof; the loss is carried with humility.',
    },
    {
      tag: 'p',
      text: `Sit with that gap, because I have had to. A fifth fewer people, and the business grew more than half again. I did not backfill every departure one for one. AI absorbed the work. That is the other half of leadership doing its job. It also cost real people, and I refuse to dress that up as a clever strategy.`,
    },
    {
      tag: 'pull-quote',
      text: `When leverage means you need fewer people, how do you lead the ones who leave, and the ones who stay, like a human being and not a spreadsheet?`,
    },
    {
      tag: 'p',
      text: `I do not have that fully solved. The math and the humanity do not always sit comfortably together.`,
    },

    // Questions
    { tag: 'h2', text: 'A few questions to sit with' },
    {
      tag: 'p',
      text: `Where are you teaching, or repeating, something you have not actually built?`,
    },
    {
      tag: 'p',
      text: `If you reorganized your own work around process, outcome, human effort in, and where AI fits, what would change first?`,
    },
    {
      tag: 'p',
      text: `And what would it take, this month, for you to ship one real thing instead of describing it?`,
    },

    // Whole argument
    { tag: 'h2', text: 'If you want the whole argument' },
    {
      tag: 'p',
      text: `I kept this plain on purpose, because the point was the honesty, not the framework. If you want the full argument, laid out with all the structure underneath it, my partners and I wrote the complete version over on Edge8: <a href="https://www.edge8.ai/post/the-other-50-percent-of-leadership" target="_blank" rel="noopener noreferrer">the other fifty percent of leadership</a>.`,
    },

    // Soft close
    {
      tag: 'conclusion-box',
      title: 'We can sit with the gap together',
      paragraphs: [
        `If you want a thinking partner while you build your own other half, not a course, not a certificate, that is the kind of work I do. We can sit with the gap together and figure out where you start.`,
        `That is also why I believe <a href="/blog/everybody-needs-a-coach">everybody needs a coach</a> who has already crossed the gap. If that is the help you want, come and <a href="/coaching">work with me directly</a>.`,
      ],
    },

    // FAQ
    {
      tag: 'faq',
      question: 'What leadership skills does the AI era actually require?',
      answer:
        'The half you already know stays in place: hire well, build culture, hold people accountable. The AI era adds a second half resting on three skills. Workflow design: mapping who does what, in what order, who owns the result, and where AI sits on the team alongside people. Information architecture: organizing what you know so it can be found and used, because if your AI cannot find it, it does not exist. Writing instructions for AI and for code: turning your vision into something a machine can run. Together these are the skills that let a leader direct AI, not just manage people.',
    },
    {
      tag: 'faq',
      question: 'What are the Four Offices of the Future?',
      answer:
        'A way to reorganize a company for the AI era around four offices: Revenue, Operations, Talent, and Innovation. Underneath all four sits a central database. With no central database there is no organized information and no leverage. For each office you ask the same four design questions: What is the process? What outcome does it generate? How many human tokens, meaning units of human effort, do you need to put in? Where does AI fit on the team?',
    },
    {
      tag: 'faq',
      question: 'How do you measure the value of AI in a business?',
      answer:
        'Stop measuring vague effort. Measure concrete units of value shipped into the digital world, such as pull requests and features, against your goals. Either you are hitting your goals or you are not. This is what infinite leverage means: one person\'s effort, multiplied by AI, showing up as real output you can count.',
    },
    {
      tag: 'faq',
      question: 'What do you do if you teach or talk about AI but have not actually built it yourself?',
      answer:
        'Name the gap first, without judgement. The distance between knowing about something and having done it is not a character flaw. Then go do the foundational work yourself: centralize your information, design one real workflow, write the instructions, and ship one concrete thing measured against a goal. The fastest builders translate vision directly into instructions a machine can run, which is why doing the core work yourself beats handing a hard vision off cold.',
    },
  ],
};
