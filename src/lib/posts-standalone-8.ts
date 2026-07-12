import type { Post, Block } from './types';

/* ------------------------------------------------------------------ */
/*  Standalone batch 8                                                 */
/* ------------------------------------------------------------------ */

export const POSTS_STANDALONE_8: Post[] = [
  {
    slug: 'coach-did-most-of-the-learning',
    title: 'I Was the Coach in the Room. I Did Most of the Learning',
    subtitle:
      'A reflection on coaching senior leaders, reciprocal learning, and why the smartest person in the room stops learning the moment they walk in.',
    excerpt:
      'The smartest person in the room stops learning the moment they walk in. A reflection on coaching senior leaders, reciprocal learning, and the rooms to seek out.',
    date: 'Jun 14, 2026',
    readTime: '4 min read',
    category: 'AI Leadership',
    categories: ['AI Leadership'],
    tags: [
      'smartest person in the room',
      'reciprocal learning',
      'leaders who keep learning',
      'learning from the people you coach',
      'staying a learner as a leader',
      'CAIO Coach',
    ],
    image: '/blog/images/coach-did-most-of-the-learning.webp',
    author: 'Dave Hajdu',
  },
];

export const BLOCKS_STANDALONE_8: Record<string, Block[]> = {
  'coach-did-most-of-the-learning': [
    // Opening
    {
      tag: 'p',
      text: 'There is a thing nobody tells you about coaching senior people, and I am going to tell you, because pretending otherwise is the kind of small dishonesty that keeps coaches stuck.',
    },
    {
      tag: 'p',
      text: 'When you are in a room with leaders operating at the top of their game, you do not stand above it dispensing wisdom. You learn more than you teach. If you are honest, you learn a lot more.',
    },
    {
      tag: 'p',
      text: 'I have been sitting with that feeling for a few weeks now, and I want to think out loud about what it means, because I suspect it is true for you too, wherever you are the supposed expert.',
    },

    // The room
    { tag: 'h2', text: 'The room' },
    {
      tag: 'p',
      text: 'I have spent the last stretch coaching leaders through our Leadership in the AI Era program. One of them was Mohammed, who now leads one of the biggest crypto exchanges in the UAE.',
    },
    {
      tag: 'p',
      text: 'You do not coach someone like that by knowing more than they do. You would lose that bet on most subjects, and you should. What you bring is a different thing: a frame, a set of questions, a way of pulling clarity out of someone who already has the raw material and just has not arranged it yet.',
    },
    {
      tag: 'p',
      text: 'And here is what happened every single time. The moment I helped him get clear, he said something back that reorganized how I saw the same problem. The frame I handed over came back to me sharper. That is not a nice feeling. It is a working method.',
    },
    { tag: 'html', html: '<figure class="my-8"><div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 items-start"><img src="/blog/images/coach-learning.webp" alt="Dave Hajdu coaching senior leaders in the room during the Leadership in the AI Era program in Dubai." loading="lazy" class="w-full h-auto rounded-xl border border-white/10" /><img src="/blog/images/coach-emba-cohort.webp" alt="Dave Hajdu with the Executive MBA cohort in Dubai during the Leadership in the AI Era program." loading="lazy" class="w-full h-auto rounded-xl border border-white/10" /><img src="/blog/images/coach-holtom-rigor.webp" alt="Dr. Brooks Holtom teaching in Dubai, bringing the academic rigor behind the leadership frameworks." loading="lazy" class="w-full h-auto rounded-xl border border-white/10" /></div><figcaption class="text-center text-xs text-white/55 italic mt-3 leading-snug">Coaching the Executive MBA cohort in Dubai</figcaption></figure>' },

    // What I actually learned
    { tag: 'h2', text: 'What I actually learned' },
    {
      tag: 'p',
      text: 'Let me be specific, because "I learn from my clients" is the kind of thing coaches say to sound humble while saying nothing.',
    },
    {
      tag: 'p',
      text: 'What I learned from that room was how the genuinely high-caliber operator treats a hard, unglamorous task. The program has exercises that each end in a dataset, real information about your leadership, your team, your way of working. The hard part is not the AI. It is the thinking. People routinely spend six to twelve hours building a single dataset, because building it forces a level of honesty about yourself that you can usually avoid.',
    },
    {
      tag: 'p',
      text: 'And the work is not freeform. Dr. Brooks Holtom brings the academic rigor that holds the whole thing up. Each dataset is built on a framework that has survived decades of scrutiny. <a href="https://en.wikipedia.org/wiki/Big_Five_personality_traits" target="_blank" rel="noopener noreferrer">OCEAN, the five-factor model of personality</a>, for personality. ADKAR for change. <a href="https://en.wikipedia.org/wiki/GROW_model" target="_blank" rel="noopener noreferrer">GROW, the coaching model</a>, for coaching. Jobs to Be Done for understanding what people actually want. I have come to believe this is the part everyone wants to skip and nobody can. Prompt frameworks are garbage. Prompt libraries are garbage. There is no clever phrase that does the thinking for you. You bring rigor and honesty inside frameworks that already work, or AI just gives you confident nonsense faster.',
    },
    {
      tag: 'p',
      text: 'A lot of people flinch at that. The leaders in this room did not. They went straight at the uncomfortable work, because they have learned that the discomfort is the signal. That is the thing I took home. Not a technique. A relationship to hard work that I want more of in myself.',
    },

    // The whole room rises
    { tag: 'h2', text: 'The whole room rises' },
    {
      tag: 'p',
      text: 'Here is the part I find genuinely moving, and I want to put words to it.',
    },
    {
      tag: 'p',
      text: 'When you put real expertise in a room and let people share it, it does not divide. It compounds. One person\'s clarity becomes the next person\'s starting point. The level of the conversation ratchets up and nobody agrees to lower it again.',
    },
    {
      tag: 'p',
      text: 'I did not give that room its level. I helped set the conditions, and then the people in it raised each other, and raised me. The best thing a coach does is not fill the room. It is build a room where everyone gets to be smarter than they walked in. It is the opposite of being the smartest person in the room.',
    },
    {
      tag: 'pull-quote',
      text: 'The best thing a coach does is not fill the room. It is build a room where everyone gets to be smarter than they walked in.',
    },

    // A question for you
    { tag: 'h2', text: 'A question for you' },
    {
      tag: 'p',
      text: 'So here is what I would actually ask you, and I want you to sit with it rather than answer it fast.',
    },
    {
      tag: 'p',
      text: 'Where are you currently the smartest person in the room?',
    },
    {
      tag: 'p',
      text: 'And what is that costing you? Because if you are always the expert, you have arranged your life so that you stop learning the moment you walk in. The leaders I admire most do the opposite. They keep finding rooms where they are not the sharpest one there, on purpose, because that is where they grow.',
    },
    {
      tag: 'p',
      text: 'Coaching, done right, is not a one-way transfer. It is two people getting clearer together. If you want a sense of how that plays out in practice, here is the case for why <a href="/blog/everybody-needs-a-coach">everybody needs a coach</a>, and how <a href="/blog/day-10-coaching-assistant">an assistant that helps you coach your team</a> fits alongside it. The title on the door says who is teaching. The truth is usually messier and a lot more generous than that.',
    },

    // If this is landing
    { tag: 'h2', text: 'If this is landing' },
    {
      tag: 'p',
      text: 'If you are leading through the AI shift and you want a thinking partner rather than another course, that is the kind of work I do. Not lecturing, not certifying you and sending you off. Sitting across the table and getting clear together.',
    },
    {
      tag: 'p',
      text: 'If you want to talk it through, <a href="/contact">book a conversation with us</a>. We will talk through your business and how AI will give you the leverage you need to 8x.',
    },

    // Soft close
    {
      tag: 'conclusion-box',
      title: 'Go find the room where you are not the smartest one there',
      paragraphs: [
        'And whether or not we ever talk: go find the room where you are not the smartest one there. That is the whole secret. I am still learning it myself.',
        'Read next: the case for why <a href="/blog/everybody-needs-a-coach">everybody needs a coach</a>, and <a href="/blog/day-10-coaching-assistant">the day I built a coaching assistant</a> to help me hold more of it.',
      ],
    },

    // FAQ
    {
      tag: 'faq',
      question: 'Why does the smartest person in the room stop learning?',
      answer:
        'Because if you are always the expert, you have arranged your life so the learning stops the moment you walk in. Growth comes from rooms where you are not the sharpest person present.',
    },
    {
      tag: 'faq',
      question: 'Can a coach learn from the people they coach?',
      answer:
        'Yes. Coaching high-caliber leaders is reciprocal: the frame you hand over comes back sharper, and the level of the whole room rises.',
    },
    {
      tag: 'faq',
      question: 'What is the hardest part of an AI leadership program?',
      answer:
        'Not the AI, the thinking. Building an honest dataset about your own leadership can take six to twelve hours because it forces clarity most people avoid.',
    },
    {
      tag: 'faq',
      question: 'How do you keep growing as a leader?',
      answer:
        'Seek out rooms where you are not the smartest person present. Always being the expert means you stop learning the moment you walk in.',
    },
  ],
};
