import type { Post, Block } from './types';

/* ------------------------------------------------------------------ */
/*  Day 10 - 14  posts + blocks                                        */
/* ------------------------------------------------------------------ */

export const POSTS_DAY10_14: Post[] = [
  {
    slug: 'day-10-coaching-assistant',
    title: 'Day 10: The Coaching Assistant',
    subtitle: 'The hard part of AI coaching isn\'t the coaching. It\'s the data. Here\'s how we built an AI coaching assistant using real homework and a framework we trust.',
    excerpt: 'The hard part of AI coaching isn\'t the coaching. It\'s the data. Organize what you know about the people you lead, add a coaching framework you trust, and AI stops giving generic advice.',
    date: 'Apr 15, 2026',
    readTime: '6 min read',
    category: 'Infinite Leverage',
    tags: ['AI coaching assistant', 'AI leadership coaching', 'GROW coaching framework', 'build AI coach', 'personalized AI coaching', 'one-man company with AI'],
    image: '/blog/images/day-10-coaching-assistant.webp',
    dayNumber: 10,
    series: 'infinite-leverage-blueprint',
    seriesTotal: 14,
  },
];

/* ------------------------------------------------------------------ */
/*  Blocks by slug                                                     */
/* ------------------------------------------------------------------ */

export const BLOCKS_DAY10_14: Record<string, Block[]> = {

  /* ================================================================ */
  /*  DAY 10                                                           */
  /* ================================================================ */
  'day-10-coaching-assistant': [
    { tag: 'h2', text: 'The Morning Standup' },

    { tag: 'shipped-list', title: 'What shipped today', items: [
      '<strong>Designer agent fixed.</strong> Focused on getting the prompts right and passed them to Jan for iteration. If the prompt is good, you can manually run the images. Faster feedback loop, better results.',
      '<strong>Project manager agent live.</strong> Trac got it fully operational. Notifications hitting Lark, email, and Cowork. The PM compiles a standup summary at 9am: what the humans are doing AND what the AI agents are planning.',
      '<strong>Yesterday\'s post shipped.</strong> Late, but out.',
      '<strong>Team process built.</strong> Created a project template in Claude team space around our 5-step method: determine the problem, decide the data, develop workflows, design instructions, deploy.',
      '<strong>CAIO Coach website rebuild kicked off.</strong> Migrating to Next.js, applying the UX designer\'s design system, connecting to a single company database. All brands feeding into one place.',
    ] },

    { tag: 'p', text: 'All of that before the real work started.' },

    { tag: 'h2', text: 'The Real Build: An AI Coaching Assistant' },

    { tag: 'p', text: 'This is the one I\'ve been most excited about.' },

    { tag: 'p', text: 'We run a leadership training program through AI Officer Institute. Part of that program includes structured homework assignments based on <a href="https://www.georgetown.edu/" target="_blank" rel="noopener noreferrer">Georgetown University\'s</a> executive curriculum. Each person reflects on their leadership style, their strengths, their gaps, the situations where they get stuck.' },

    { tag: 'p', text: 'Here\'s the thing most people miss about AI coaching: the hard part isn\'t the coaching. It\'s the data.' },

    { tag: 'emphasis-box', text: 'If you ask AI to "coach someone on leadership," you\'ll get generic advice that sounds like a self-help book. But if you hand AI a person\'s actual reflections, their self-assessments, the patterns in how they describe their own challenges, <strong>now the AI has something to work with. It knows who it\'s talking to.</strong>' },

    { tag: 'p', text: 'That homework IS the data layer. We didn\'t set out to build a coaching dataset. We set out to help people learn. But organized learning artifacts become the richest possible context for personalized coaching.' },

    { tag: 'p', text: 'The second piece is the method. You need to tell the AI how to coach, not just what to know.' },

    { tag: 'p', text: 'We\'re using GROW: Goal, Reality, Options, Will. It\'s a classic coaching framework. But you could just as easily use <a href="https://www.radicalcandor.com/" target="_blank" rel="noopener noreferrer">Radical Candor</a> (Kim Scott) or any method you trust. The framework isn\'t the point. The point is that you pick one and encode it as a skill. You tell the AI: here\'s how a good coaching conversation works. Here are the kinds of questions to ask. Here\'s what to listen for. Here\'s when to push and when to reflect back.' },

    { tag: 'pull-quote', text: 'Data tells the AI who this person is. The method tells the AI how to help them.' },

    { tag: 'p', text: 'Put those together and you don\'t have a chatbot. You have an AI coaching assistant that knows the person sitting across from it.' },

    { tag: 'h2', text: 'How to Build Your Own AI Coaching Assistant' },

    { tag: 'p', text: 'This isn\'t theoretical. We\'re teaching this live at 4pm today. Here\'s the process:' },

    { tag: 'ol-item', text: '<strong>Organize your data.</strong> Collect everything you know about the people you coach. Assessments, homework, meeting notes, reflections. Structure it so AI can read it. This is the step most people skip, and it\'s the one that matters most.' },
    { tag: 'ol-item', text: '<strong>Pick your coaching framework.</strong> GROW, Radical Candor, something you learned from a mentor. Whatever method you\'d actually use if you were sitting across from them. Don\'t invent something new. Use what you trust.' },
    { tag: 'ol-item', text: '<strong>Write the skill.</strong> Tell the AI: here\'s the method, here\'s how to apply it, here\'s what a good coaching conversation looks like. Be specific about the kinds of questions to ask and when.' },
    { tag: 'ol-item', text: '<strong>Connect data to skill.</strong> The AI reads the person\'s context, then coaches using your method. Not generic advice pulled from the internet. Personalized coaching grounded in real information about a real person.' },
    { tag: 'ol-item', text: '<strong>Test it live.</strong> Run a session. See where it falls flat. Adjust. The first version won\'t be perfect, but you\'ll know immediately what\'s missing because you\'ll feel it in the conversation.' },
    { tag: 'ol-item', text: '<strong>Schedule it.</strong> Put it on a recurring run. A coaching assistant you have to remember to open isn\'t a system. One that fires on schedule and is ready when you sit down with your team? That\'s leverage.' },

    { tag: 'callout', label: 'Why It Matters', text: 'The whole point of AI in leadership isn\'t to replace the coach. It\'s to scale the coach. Your judgment, your method, your understanding of the people you work with, available every day instead of once a quarter. You could build one of these with your own data and a framework you already trust. The AI isn\'t the coach. You are. The AI just makes sure you show up consistently.' },

    { tag: 'conclusion-box', title: 'Day 10 of 14', paragraphs: [
      'Ten days in. Four to go.',
      'Here\'s what\'s becoming clear: every day adds a capability that compounds on the ones before it. Day 8 was the content studio. Day 9 was the content pipeline. Day 10 is coaching. Each one makes the next one easier because the system gets smarter, the workflows get tighter, and the data gets richer.',
      'The AI coaching assistant is the build I\'m most proud of so far. Not because it\'s the most technically complex. Because it\'s the most human.',
      'Four days left. Tomorrow I\'m in transit to Hanoi, which means I\'ll be building from airports and taxis. The goal: get the web developer agent running on a schedule so it produces all our posts automatically by Monday. If that works, the content machine runs itself.',
      'See you on Day 11.',
    ] },

    { tag: 'faq', question: 'How do you build an AI coaching assistant?', answer: 'Start by organizing your data: assessments, homework, meeting notes, and reflections from the people you coach. Then pick a coaching framework like GROW or Radical Candor and encode it as a skill. Connect the personal data to the method so the AI coaches each person based on real context, not generic advice. Test it live, then schedule it to run automatically.' },
    { tag: 'faq', question: 'What data do you need for an AI coaching assistant?', answer: 'The best data comes from structured reflections: self-assessments, leadership homework, coaching session notes, and any artifacts where people describe their own strengths, gaps, and challenges. The richer and more personal the data, the more effective the coaching.' },
    { tag: 'faq', question: 'What is the GROW coaching framework?', answer: 'GROW stands for Goal, Reality, Options, Will. It is a widely used coaching model where you help someone define their goal, assess their current reality, explore their options, and commit to a specific action. It works well as a structure for AI coaching because each step maps to a clear set of questions and prompts.' },
    { tag: 'faq', question: 'Can AI replace a human coach?', answer: 'AI does not replace the coach. It scales the coach. The AI uses your judgment, your method, and your understanding of the people you work with. It makes personalized coaching available every day instead of once a quarter. The human still sets the direction. The AI just makes sure it shows up consistently.' },
    { tag: 'faq', question: 'What is the Infinite Leverage Blueprint?', answer: 'The Infinite Leverage Blueprint is a 14-day build challenge by Dave Hajdu to create a one-man company powered by AI. Each day adds a new capability: content pipelines, project management agents, coaching assistants, and automated publishing. The goal is to demonstrate how one person can run a full operation using AI agents, structured data, and automated workflows.' },
  ],
};
