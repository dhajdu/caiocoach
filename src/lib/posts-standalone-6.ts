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
      'Day 1 of a private AI retreat for non-technical founders. Someone has flown across the world to be here. They are stuck on an error message. They say the words I hear every time. The pain is not the problem. It is the foundation.',
    excerpt:
      'A private AI retreat for non-technical founders. Tracy shipped fairpay.website by Day 2. Maureen built a marketing agent team. James returned for a second retreat and is launching Janet.Care in 30 days. Real capability built by your hands.',
    date: 'May 20, 2026',
    readTime: '5 min read',
    category: 'AI Leadership',
    categories: ['AI Leadership', 'Founder Retreats'],
    tags: [
      'AI retreat for non-technical founders',
      'private AI retreat',
      'build AI apps without coding',
      'AI bootcamp alternative',
      'AI coaching for founders',
      'AI retreat Vietnam',
      'CAIO Coach',
      'hard foundations',
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
      text: 'Day 1 of a private AI retreat for non-technical founders. Someone has flown across the world to be here. They have wanted to build something with AI for months, maybe years. They are sitting at a laptop, staring at an error message they do not understand. They have been staring at it for longer than they are comfortable admitting. They look up and say the thing I hear almost every time:',
    },
    { tag: 'blockquote', text: "I'm not technical." },
    {
      tag: 'p',
      text: "I nod. I do not try to fix it. That moment, that specific feeling of being stuck and unsure and a little embarrassed by how hard this is, is not an obstacle to push past. It's wet concrete. Everything they build later stands on it.",
    },

    // What I actually teach
    { tag: 'h2', text: 'What I actually teach' },
    {
      tag: 'p',
      text: 'Everyone else is selling shock and awe. The dopamine of a working demo before lunch. The feeling that AI is finally possible for you.',
    },
    {
      tag: 'pull-quote',
      text: "That feeling fades by Friday. Foundations don't.",
    },
    {
      tag: 'p',
      text: 'I teach foundations. The difference between the two shows up three months after the retreat ends, when one person is still building and the other person is paying for a new course.',
    },
    {
      tag: 'p',
      text: 'That is why a private AI retreat for non-technical founders does not look like a bootcamp.',
    },

    // Tracy
    { tag: 'h2', text: 'Tracy: Melbourne to seat 32A' },
    {
      tag: 'p',
      text: 'Tracy Angwin runs Payroll Services Australia. She flew from Melbourne to a private retreat in Saigon. Day 1 was hard. Most of Day 1 is hard for everyone.',
    },
    {
      tag: 'p',
      text: 'By the end of Day 2, she had <strong>fairpay.website</strong> live. She is in payroll. The URL writes itself.',
    },
    {
      tag: 'p',
      text: 'Then the moment that told me she had something real. On the flight home, on plane wifi, Tracy was building a study guide for her daughter. Not because anyone asked. Because she could.',
    },
    {
      tag: 'image',
      src: '/blog/images/tracy-angwin.webp',
      alt: 'Tracy Angwin at a private AI retreat in Saigon, building fairpay.website on Day 2.',
      caption: 'Tracy on Day 2. fairpay.website went live before the end of the day.',
    },
    {
      tag: 'emphasis-box',
      text: 'That is the difference between watching a demo and pouring a foundation. Demos belong to the person who built them. Foundations belong to you. Tracy did not put hers down when the retreat ended. She used it at 35,000 feet.',
    },

    // Maureen
    { tag: 'h2', text: 'Maureen: three words, then everything after' },
    {
      tag: 'p',
      text: 'Day 3 of her retreat, Maureen walked up before the session started and said:',
    },
    { tag: 'blockquote', text: 'I created something.' },
    {
      tag: 'p',
      text: "Three words. Quiet. The kind of certainty you can see in someone's face before you hear it in their voice.",
    },
    {
      tag: 'image',
      src: '/blog/images/maureen-retreat.webp',
      alt: 'Maureen building lead magnets and a marketing agent team at a private AI retreat for non-technical founders.',
      caption: 'Maureen at work. The three words were the foundation, not the achievement.',
    },
    {
      tag: 'p',
      text: 'Those three words were not the achievement. They were the foundation. By the end of the retreat, Maureen had shipped two lead magnets and built a team of marketing agents that helps her team work more efficiently every day. The lead magnets were live. The agents were working. None of that came from a tutorial she watched. It came from the work she did on Day 1, when nothing was working.',
    },
    {
      tag: 'pull-quote',
      text: "The breakthrough is not the first thing you create. It's the moment you realize you can keep creating.",
    },
    {
      tag: 'p',
      text: 'Everything Maureen has shipped since Day 3 has stood on top of that moment.',
    },

    // James
    { tag: 'h2', text: 'James: the prototype, the return, the launch' },
    {
      tag: 'p',
      text: 'James Murray was quoted $300,000 AUD and three to six months for the next phase of Janet.Care, the longevity coaching app he has been building for a decade. He flew to Saigon instead.',
    },
    {
      tag: 'p',
      text: 'Five days got him a great working prototype. Not finished. Not 70 percent done. Real, but raw. The bones of something that would work, built by his hands, with his decisions in every commit. You can read the full story of <a href="/blog/founder-built-product-5-days-instead-3-months">how a founder built his product in 5 days instead of 3 months</a>.',
    },
    {
      tag: 'image',
      src: '/blog/images/james-retreat.webp',
      alt: 'James Murray building the Janet.Care prototype at his second AI retreat in Saigon.',
      caption: 'James on his second retreat. The first got him the prototype. The second got him 80 percent of the way there.',
    },
    {
      tag: 'p',
      text: 'Then he did the thing I now think of as the real proof of <a href="https://en.wikipedia.org/wiki/Product/market_fit" target="_blank" rel="noopener noreferrer">product-market fit</a>. Two weeks after the retreat ended, he booked a flight back to Vietnam and did it again. After that second retreat, he was 80 percent of the way there. Janet.Care is launching in 30 days. He has sent me twenty referrals.',
    },
    {
      tag: 'p',
      text: 'He did not come back because the first retreat was easy. He came back because he wanted the foundation, not the demo. Demos finish in five days. Foundations take a second pass.',
    },
    {
      tag: 'pull-quote',
      text: 'Dependency disappears the moment the platform changes. Capability travels with you.',
    },
    {
      tag: 'p',
      text: 'That is what owning capability looks like. James knows exactly why every part of Janet.Care works, because he was the one building it when it was hard.',
    },

    // The idea you keep almost starting
    { tag: 'h2', text: 'The idea you keep almost starting' },
    {
      tag: 'p',
      text: 'You probably have an idea you have been carrying for a while. Notice what has been stopping you.',
    },
    {
      tag: 'p',
      text: "When people say they don't have time, what they often mean is: I'd rather hold the idea than find out I can't build it.",
    },
    {
      tag: 'p',
      text: "Day 1 will not feel easy. Day 1 was not easy for Tracy, Maureen, or James. By Day 3, something shifts. What you leave with is not a product someone else assembled while you watched. It's the foundation that everything you build next will stand on.",
    },
    {
      tag: 'p',
      text: 'Every founder I coach hits a version of this wall. It is part of why I believe <a href="/blog/everybody-needs-a-coach">everybody needs a coach</a> who has already crossed it.',
    },

    // CTA
    {
      tag: 'conclusion-box',
      title: 'If the idea keeps coming back, this is where it gets built',
      paragraphs: [
        'A private AI retreat for non-technical founders is not a curriculum. It is a structure for sitting with the right friction long enough to come out the other side with something that is yours.',
        'If you would rather build on a foundation you own than rent the feeling that it is working, the next private AI retreat for non-technical founders is where it gets built. <a href="/retreat">Book a private retreat</a> or <a href="/contact">send me a note</a>.',
      ],
    },

    // FAQ
    {
      tag: 'faq',
      question: 'What is a private AI retreat for non-technical founders?',
      answer:
        'A private AI retreat is an immersive 3 to 5 day program where founders and executives build real AI-powered products under direct coaching. Unlike a traditional bootcamp, participants work on their own specific idea from Day 1. There is no generic curriculum. The friction is intentional, because friction is what builds capability that lasts beyond the retreat.',
    },
    {
      tag: 'faq',
      question: 'Do you need to know how to code to attend an AI retreat for founders?',
      answer:
        'No prior coding experience is required. Most participants describe themselves as non-technical. The retreat is designed for founders and leaders who want to build with AI without a technical background. Day 1 is hard for everyone. By Day 3, something shifts.',
    },
    {
      tag: 'faq',
      question: 'What have past participants built at a private AI retreat?',
      answer:
        'Past participants have shipped working products inside the retreat itself. Tracy Angwin, who runs Payroll Services Australia, had fairpay.website live by the end of Day 2 and was building a study guide for her daughter on the flight home. Maureen shipped two lead magnets and a team of marketing agents that supports her team daily. James Murray built the working prototype that became Janet.Care, a longevity coaching app launching in 30 days.',
    },
    {
      tag: 'faq',
      question: 'How is a private AI retreat different from an AI bootcamp?',
      answer:
        'Most AI bootcamps remove friction so participants feel productive quickly. A private retreat keeps the friction, because friction is what builds durable capability. The difference is between knowing how to use a platform and knowing how to build. Participants leave owning what they built, not dependent on a tool they were handed.',
    },
    {
      tag: 'faq',
      question: 'How do I know if a private AI retreat is right for me?',
      answer:
        'If you have had a specific idea for longer than six months and have not started, that is the clearest signal. The retreat is not for general AI exploration. It is for founders and leaders with a concrete problem they want AI to solve and the willingness to sit with confusion on Day 1.',
    },
    {
      tag: 'faq',
      question: 'Where does the private AI retreat take place?',
      answer:
        'Private AI retreats are run in Vietnam, with cohorts in Saigon and Nha Trang. Most attendees fly in from Australia, the United States, Singapore, and Southeast Asia. Both private (1:1) and small-group formats are available. The Vietnam setting matters: the schedule, the food, and the room are designed so attendees can focus for five uninterrupted days.',
    },
  ],
};
