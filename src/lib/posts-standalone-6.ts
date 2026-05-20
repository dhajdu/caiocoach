import type { Post, Block } from './types';

/* ------------------------------------------------------------------ */
/*  Standalone batch 6                                                 */
/* ------------------------------------------------------------------ */

export const POSTS_STANDALONE_6: Post[] = [
  {
    slug: 'ai-retreat-for-non-technical-founders',
    title: "Everyone Is Selling Easy. I'm Selling Hard.",
    titleAccent: "I'm Selling Hard.",
    subtitle:
      'Day 1 of an AI retreat for non-technical founders. Someone has flown from the other side of the world to be here. They are stuck on an error message. They say the words I hear every time. The pain is not the problem. It is the point.',
    excerpt:
      'Build real AI products at a private retreat designed for non-technical founders. No easy shortcuts. Real capability, built from scratch, yours when you leave.',
    date: 'May 20, 2026',
    readTime: '4 min read',
    category: 'AI Leadership',
    categories: ['AI Leadership', 'Founder Retreats'],
    tags: [
      'AI retreat for non-technical founders',
      'private AI retreat',
      'build AI apps without coding',
      'AI bootcamp alternative',
      'AI workshop for executives',
      'AI product development retreat Vietnam',
      'CAIO Coach',
      'hard foundations',
      'the unlock',
    ],
    image: '/blog/images/ai-retreat-for-non-technical-founders.webp',
    author: 'Dave Hajdu',
  },
];

export const BLOCKS_STANDALONE_6: Record<string, Block[]> = {
  'ai-retreat-for-non-technical-founders': [
    // Opening
    {
      tag: 'p',
      text: "Day 1 of an AI retreat for non-technical founders. Someone has flown from the other side of the world to be here. They have wanted to build something with AI for months. They are sitting at a laptop, staring at an error message they do not understand. They have been staring at it for longer than they are comfortable admitting. They look up and say the thing I hear almost every time I run one of these.",
    },
    { tag: 'blockquote', text: "I'm not technical." },
    {
      tag: 'p',
      text: "I nod. I do not try to fix it. Because that moment, that specific feeling of being stuck and unsure and a little embarrassed by how hard this is, is not a problem to solve. It is the whole point.",
    },

    // Day 1 wall image
    {
      tag: 'image',
      src: '/blog/images/ai-retreat-day-1-wall.webp',
      alt: 'Hands on a laptop keyboard with a blue glow from the screen, the visual of Day 1 friction at an AI retreat',
      caption: 'Day 1. The wall. The moment before anything starts working.',
    },

    // What Everyone Else Is Selling
    { tag: 'h2', text: 'What everyone else is selling' },
    {
      tag: 'p',
      text: 'Look at your feed this week. Another AI bootcamp. Another course promising no code, no friction, instant results. "Build your first app in an afternoon." "No technical experience needed." "AI handles the hard part."',
    },
    {
      tag: 'p',
      text: 'They are not lying exactly. What they are doing is selling you the absence of the moment I just described.',
    },
    {
      tag: 'p',
      text: 'And the absence of that moment is precisely what leaves most people exactly where they started: with an idea still living in their head, no actual capability in their hands, and a growing sense that <a href="/blog/day-14-world-has-moved">building with AI</a> is something other people do.',
    },
    {
      tag: 'pull-quote',
      text: "The pain of Day 1 is not the thing that needs to be removed. It's the thing that does the teaching.",
    },

    // Day 1 Is Supposed to Hurt
    { tag: 'h2', text: 'Day 1 is supposed to hurt' },
    {
      tag: 'p',
      text: 'Everyone who has come through a private retreat with me has hit a wall on the first day. Not a symbolic wall. A real one. Error messages that make no sense. Logic that seems clear in your head and breaks in practice. The gap between what you want to build and what the tools are actually doing.',
    },
    {
      tag: 'p',
      text: 'This is where every easy solution fails you. Not because the tools are bad. Because the friction is the teacher. The confusion of Day 1 is what forces you to understand what you are actually doing rather than watching someone else do it while you take notes.',
    },
    {
      tag: 'emphasis-box',
      text: '<strong>You cannot skip it and still own what comes out the other side.</strong>',
    },
    {
      tag: 'p',
      text: 'So before you keep reading, here is the question I would ask you: when was the last time something genuinely changed you, and it did not hurt at the start?',
    },
    {
      tag: 'image',
      src: '/blog/images/ai-retreat-whiteboard.webp',
      alt: 'A T-chart from a real retreat showing James, Tracy, Dave, Quan, and My with their Yes/No confidence splits on Day 1',
      caption: 'A whiteboard from a real retreat. James starts at 50/50. Most others are 70-80% no. Day 1 doubt is universal.',
    },

    // Mo's Three Words
    { tag: 'h2', text: "Mo's three words" },
    { tag: 'p', text: 'By Day 2, sometimes Day 3, something shifts.' },
    {
      tag: 'p',
      text: 'Mo came to Vietnam not knowing if she could do this. On the morning of Day 3, she messaged me before the session started. She said:',
    },
    { tag: 'blockquote', text: 'I created something.' },
    {
      tag: 'p',
      text: 'Three words. But if you had been in the room when she said them, you would have seen something in her face that I have learned to watch for. Not relief. Not surprise. Something deeper. The quiet certainty of a person who now knows what they are capable of, and cannot un-know it.',
    },
    {
      tag: 'image',
      src: '/blog/images/ai-retreat-unlock.webp',
      alt: 'Two open hands cupped together holding a glowing orb of warm light, an illustration of the unlock moment at an AI retreat',
      caption: 'The unlock. The moment a person stops asking if they can build, because they just did.',
    },
    {
      tag: 'p',
      text: 'That moment is not a feeling that fades in a week. It is a foundation. It changes what you believe is possible for you specifically, not for AI in general, not for people who are "technical." For you.',
    },
    {
      tag: 'emphasis-box',
      text: 'That is what a private <strong>AI retreat for non-technical founders</strong> is designed to make possible. Easy bootcamps sell the feeling of momentum. Hard foundations build the thing underneath the feeling.',
    },

    // James
    { tag: 'h2', text: 'James flew back two weeks later' },
    {
      tag: 'p',
      text: 'James flew from Australia to attend a private retreat. He was the first customer to do what I now think of as the real proof of <a href="https://en.wikipedia.org/wiki/Product/market_fit" target="_blank" rel="noopener noreferrer">product-market fit</a>: he bought it once, struggled through it, loved what it gave him, and then did it again.',
    },
    {
      tag: 'p',
      text: 'He hit the wall on Day 1. He found the unlock. Two weeks after the retreat ended, he booked a flight back to Vietnam and did the whole thing a second time.',
    },
    {
      tag: 'p',
      text: 'Since then, he has built a longevity coaching app. He has built a personal health dashboard using 400,000 records of his own health data. He has built a diet planning tool for his daughter, who runs her own coaching practice. You can read the full story of <a href="/blog/founder-built-product-5-days-instead-3-months">how a founder built his product in 5 days instead of 3 months</a>.',
    },
    {
      tag: 'image',
      src: '/blog/images/ai-retreat-james-builds.webp',
      alt: 'Three glowing screens arranged on a dark navy surface showing a health chart, a coaching chat, and a meal plan interface',
      caption: 'One person. Three products. Built by hand, not handed to him.',
    },
    { tag: 'p', text: 'He has sent me 20 referrals.' },
    { tag: 'pull-quote', text: 'Dependency disappears when the platform does. Capability travels with you.' },
    {
      tag: 'p',
      text: 'None of that came from making it easy. It came from making it real. James knows what he built and exactly why it works, because he was the one doing it when it was hard. That is the difference between capability and dependency.',
    },
    {
      tag: 'p',
      text: 'He did not fly back because it was pleasant. He flew back because he walked away with something that was genuinely his.',
    },

    // The Idea You Keep Almost Starting
    { tag: 'h2', text: 'The idea you keep almost starting' },
    { tag: 'p', text: 'You probably have an idea you have been carrying for a while.' },
    {
      tag: 'p',
      text: 'Notice what has been stopping you. Is it time? Maybe. But in my experience <a href="/blog/everybody-needs-a-coach">coaching leaders</a> through this, when people say "I do not have time," what they often mean is: "I am not sure I can do it, and I would rather hold the idea than find out I cannot."',
    },
    {
      tag: 'p',
      text: 'The retreat will not feel easy. Day 1 is hard for almost everyone. By Day 3, something shifts. What you leave with is not a product that someone else assembled while you watched. It is something you built, with your own hands, through exactly the friction that taught you how it works.',
    },

    // CTA
    {
      tag: 'conclusion-box',
      title: 'If the idea keeps coming back, this is where it gets built',
      paragraphs: [
        'A private AI retreat for non-technical founders is not a curriculum. It is a structure for sitting with the right friction long enough to come out the other side with something that is yours.',
        'If you have an idea that keeps coming back to you, an AI retreat for non-technical founders might be where it finally gets built. I would like to hear it. <a href="/retreat">Book a private retreat</a> or <a href="/contact">send me a note</a>.',
      ],
    },

    // FAQ
    {
      tag: 'faq',
      question: 'What is a private AI retreat for founders?',
      answer:
        'A private AI retreat is an immersive 3 to 5 day program where founders and executives build real AI-powered products under direct coaching. Unlike a traditional bootcamp, participants work on their own specific idea from Day 1. There is no curriculum of generic exercises. The friction is intentional.',
    },
    {
      tag: 'faq',
      question: 'Do you need to know how to code to attend?',
      answer:
        'No prior coding experience is required. Most participants describe themselves as non-technical. The retreat is designed for founders and leaders who want to build with AI without a technical background. Day 1 is hard. Day 3 is different.',
    },
    {
      tag: 'faq',
      question: 'What have past participants built at a private AI retreat?',
      answer:
        'Past participants have built longevity coaching apps, personal health dashboards using hundreds of thousands of records of real data, diet planning tools, and business automation systems. Participants bring the idea. The retreat provides the structure and coaching to get it built.',
    },
    {
      tag: 'faq',
      question: 'How is a private AI retreat different from an AI bootcamp?',
      answer:
        'Most AI bootcamps remove friction so participants feel productive quickly. A private retreat keeps the friction because that is what builds durable capability. The difference is between knowing how to use a platform and knowing how to build. Participants leave owning what they built, not dependent on a tool they were handed.',
    },
    {
      tag: 'faq',
      question: 'How do I know if a private AI retreat is right for me?',
      answer:
        'If you have had a specific idea for longer than six months and have not started, that is the clearest signal. The retreat is not for general AI exploration. It is for founders and leaders with a concrete problem they want AI to solve and the willingness to sit with confusion on Day 1.',
    },
  ],
};
