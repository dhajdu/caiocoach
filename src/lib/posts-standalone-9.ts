import type { Post, Block } from './types';

/* ------------------------------------------------------------------ */
/*  Standalone batch 9                                                 */
/* ------------------------------------------------------------------ */

export const POSTS_STANDALONE_9: Post[] = [
  {
    slug: 'how-to-build-an-ai-leadership-coach',
    title: 'I Built the AI Coach I Teach. It Rated My Own Coaching, and the Number Stung.',
    subtitle:
      'I have built versions for years. This time, with Claude and Lark, I built it exactly to the teaching, then it told me the truth about how I coach.',
    excerpt:
      'I built my own AI leadership coach in a day with Claude and Lark, then asked it to rate my coaching. The eight pieces, the frameworks behind it, and the number that stung.',
    date: 'Jun 28, 2026',
    readTime: '8 min read',
    category: 'AI Leadership',
    categories: ['AI Leadership'],
    tags: [
      'how to build an AI leadership coach',
      'AI leadership coach',
      'AI coaching system',
      'build an AI coach in Lark',
      'OCEAN profile',
      'GROW model',
      'FAST goals',
      'coach mentor direct mix',
    ],
    image: '/blog/images/how-to-build-an-ai-leadership-coach.webp',
    author: 'Dave Hajdu',
  },
];

const COACHING_SYSTEM_INFOGRAPHIC = `
<style>
.cs-ig{
  --ink:#1a1f2e; --ink2:#52514e; --muted:#8a8980;
  --line:rgba(20,25,40,.10); --card:#ffffff; --panel:#f6f5f1; --page:#fbfaf7;
  --green-bg:#e8f1dd; --green-tx:#3b6d11;
  --amber-bg:#faecd6; --amber-tx:#854f0b;
  --red-bg:#fbe7e7; --red-tx:#a32d2d;
  --navy:#041e42;
  background:var(--page); color:var(--ink);
  font-family:"DM Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
  line-height:1.5; border:1px solid rgba(20,25,40,.12); border-radius:14px; overflow:hidden;
}
.cs-ig *{box-sizing:border-box}
.cs-ig .wrap{max-width:none; margin:0; padding:26px 24px 30px;}
.cs-ig .head{border-bottom:2px solid var(--navy); padding-bottom:14px; margin-bottom:22px;}
.cs-ig .eyebrow{font-size:12px; letter-spacing:.04em; color:var(--muted); text-transform:uppercase;}
.cs-ig .ig-h1{font-size:24px; font-weight:600; margin:6px 0 4px; color:var(--navy); line-height:1.2;}
.cs-ig .sub{font-size:14px; color:var(--ink2); margin:0;}
.cs-ig .seclabel{font-size:13px; color:var(--ink2); font-weight:600; margin:24px 0 12px; display:flex; align-items:center; gap:8px;}
.cs-ig .seclabel span.n{display:inline-flex; width:22px; height:22px; border-radius:50%; background:var(--navy); color:#fff; font-size:12px; align-items:center; justify-content:center;}
.cs-ig .tiles{display:grid; grid-template-columns:repeat(4,1fr); gap:10px; margin-bottom:16px;}
.cs-ig .tile{background:var(--panel); border-radius:8px; padding:12px;}
.cs-ig .tile .lab{font-size:12px; color:var(--muted);}
.cs-ig .tile .val{font-size:22px; font-weight:600; margin-top:2px;}
.cs-ig .card{background:var(--card); border:1px solid var(--line); border-radius:12px; padding:16px; margin-bottom:16px;}
.cs-ig .card h3{font-size:15px; font-weight:600; margin:0 0 2px;}
.cs-ig .card .h3sub{font-size:13px; color:var(--ink2); margin-bottom:14px;}
.cs-ig .legend{display:flex; gap:16px; font-size:12px; color:var(--ink2); margin-bottom:10px; flex-wrap:wrap;}
.cs-ig .legend i{width:10px; height:10px; border-radius:2px; display:inline-block; margin-right:5px; vertical-align:middle;}
.cs-ig .barlab{font-size:12px; color:var(--muted); margin-bottom:4px;}
.cs-ig .bar{display:flex; height:26px; border-radius:6px; overflow:hidden; margin-bottom:10px; font-size:12px;}
.cs-ig .bar div{display:flex; align-items:center; justify-content:center;}
.cs-ig .roster{border:1px solid var(--line); border-radius:12px; overflow:hidden;}
.cs-ig .roster .r{display:grid; grid-template-columns:1.4fr 1fr 1fr; gap:8px; padding:11px 14px; font-size:13px; border-top:1px solid var(--line);}
.cs-ig .roster .r.hd{background:var(--panel); color:var(--muted); font-size:12px; border-top:none;}
.cs-ig .openers{display:flex; flex-direction:column; gap:8px; margin-bottom:14px;}
.cs-ig .openers div{font-size:13px; border-left:2px solid var(--line); padding-left:10px;}
.cs-ig .mini{display:grid; grid-template-columns:repeat(3,1fr); gap:10px;}
.cs-ig .mini div{background:var(--panel); border-radius:8px; padding:10px;}
.cs-ig .mini .k{font-size:11px; color:var(--muted); margin-bottom:2px;}
.cs-ig .mini .v{font-size:12px;}
.cs-ig .pill{font-size:12px; background:var(--red-bg); color:var(--red-tx); padding:3px 9px; border-radius:8px;}
.cs-ig .src{text-align:center; margin-bottom:8px;}
.cs-ig .src span{display:inline-block; font-size:13px; background:var(--panel); padding:8px 14px; border-radius:8px;}
.cs-ig .split{display:grid; grid-template-columns:1fr 1fr; gap:12px;}
.cs-ig .split .col{background:var(--card); border:1px solid var(--line); border-radius:12px; padding:14px;}
.cs-ig .split .col h4{font-size:13px; font-weight:600; margin:0 0 8px;}
.cs-ig .split .col ul{margin:0; padding:0; list-style:none; font-size:12px; color:var(--ink2); display:flex; flex-direction:column; gap:5px;}
.cs-ig .foot{margin-top:26px; padding-top:12px; border-top:1px solid var(--line); font-size:12px; color:var(--muted);}
@media (max-width:560px){
  .cs-ig .tiles{grid-template-columns:repeat(2,1fr)}
  .cs-ig .mini{grid-template-columns:1fr}
  .cs-ig .split{grid-template-columns:1fr}
  .cs-ig .roster .r{font-size:11px; padding:9px 10px; gap:6px}
  .cs-ig .wrap{padding:20px 16px 24px}
}
</style>
<div class="cs-ig"><div class="wrap">
  <div class="head">
    <div class="eyebrow">Leadership in the AI Era</div>
    <div class="ig-h1">An AI Leadership Coach, built in a day</div>
    <div class="sub">Real data, team names anonymized to roles. Three surfaces: dashboard, prep, 1-1 log.</div>
  </div>

  <div class="seclabel"><span class="n">1</span> Dashboard</div>
  <div class="tiles">
    <div class="tile"><div class="lab">Reports</div><div class="val">5</div></div>
    <div class="tile"><div class="lab">FAST goals set</div><div class="val">5 / 5</div></div>
    <div class="tile"><div class="lab">Overdue</div><div class="val" style="color:var(--red-tx)">1</div></div>
    <div class="tile"><div class="lab">Next cycle</div><div class="val">Jul 1</div></div>
  </div>

  <div class="card">
    <h3>Coaching mode mix</h3>
    <div class="h3sub">Last 1-1s, against the 80 / 15 / 5 target</div>
    <div class="legend">
      <span><i style="background:var(--green-bg)"></i>Coach</span>
      <span><i style="background:var(--amber-bg)"></i>Mentor</span>
      <span><i style="background:var(--red-bg)"></i>Direct</span>
    </div>
    <div class="barlab">Actual</div>
    <div class="bar">
      <div style="width:15%;background:var(--green-bg);color:var(--green-tx)">15</div>
      <div style="width:45%;background:var(--amber-bg);color:var(--amber-tx)">45</div>
      <div style="width:40%;background:var(--red-bg);color:var(--red-tx)">40</div>
    </div>
    <div class="barlab">Target</div>
    <div class="bar">
      <div style="width:80%;background:var(--green-bg);color:var(--green-tx)">80</div>
      <div style="width:15%;background:var(--amber-bg);color:var(--amber-tx)">15</div>
      <div style="width:5%;background:var(--red-bg)"></div>
    </div>
  </div>

  <div class="roster">
    <div class="r hd"><span>Role</span><span>Loose root</span><span>Last 1-1</span></div>
    <div class="r"><span>Ops lead</span><span style="color:var(--ink2)">Belonging</span><span>6 days ago</span></div>
    <div class="r"><span>AI engineer</span><span style="color:var(--ink2)">Links</span><span>2 days ago</span></div>
    <div class="r"><span>Designer</span><span style="color:var(--ink2)">Watching</span><span style="color:var(--red-tx)">69 days ago</span></div>
    <div class="r"><span>PM, retreats</span><span style="color:var(--ink2)">New</span><span style="color:var(--muted)">First 1-1 Jul 1</span></div>
    <div class="r"><span>Finance</span><span style="color:var(--ink2)">New</span><span style="color:var(--muted)">First 1-1 Jul 1</span></div>
  </div>

  <div class="seclabel"><span class="n">2</span> Prep, the day before</div>
  <div class="card">
    <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:12px;">
      <h3 style="margin:0">Ops lead</h3>
      <span class="pill">Coach hard, last ran 60% direct</span>
    </div>
    <div class="barlab">GROW openers</div>
    <div class="openers">
      <div>Where do you actually need a decision from me, vs already know the answer?</div>
      <div>What's your target this quarter, and what would you try if I weren't in the loop?</div>
      <div>Name one decision you'll make this cycle without checking with me first.</div>
    </div>
    <div class="mini">
      <div><div class="k">Listen for</div><div class="v">The real view, not the first "okay"</div></div>
      <div><div class="k">Retention</div><div class="v">Belonging, name a specific win</div></div>
      <div><div class="k">Avoid</div><div class="v">Walking her through your decisions</div></div>
    </div>
  </div>

  <div class="seclabel"><span class="n">3</span> 1-1 log, one meeting becomes two</div>
  <div class="src"><span>1 transcript, 35 min</span></div>
  <div style="text-align:center; color:var(--muted); margin-bottom:10px; font-size:20px;">&#8595;</div>
  <div class="split">
    <div class="col">
      <h4>Private, the coach</h4>
      <ul>
        <li>5 catalogue lines</li>
        <li>What's actually true</li>
        <li>The loose root</li>
        <li>Mode tag, for the mix</li>
      </ul>
    </div>
    <div class="col">
      <h4>Shared, the person</h4>
      <ul>
        <li>Plain-language recap</li>
        <li>What they committed to</li>
        <li>Their FAST goal</li>
        <li>Sent to them in Lark</li>
      </ul>
    </div>
  </div>

  <div class="foot">One source of truth, two lenses. The coaching read stays private; the goals and accountability are transparent.</div>
</div></div>
`;

export const BLOCKS_STANDALONE_9: Record<string, Block[]> = {
  'how-to-build-an-ai-leadership-coach': [
    // Opening
    { tag: 'p', text: `I have been building a version of this coach for years.` },
    { tag: 'p', text: `There has almost always been something running. A packaged tool with a limited routine. Automations I wired together by hand back in the old Make.com days, each one doing a single slice of the job. A folder called leadership-coach with my datasets in it. I teach a whole session for EO Vietnam and EO Perth on Leadership in the AI Era, built on concepts I teach with Dr. Brooks C. Holtom of Georgetown, on how to build an AI leadership coach for your team. I have always practiced what I teach. What I never had was a way to build it exactly the way I wanted.` },
    { tag: 'p', text: `This week I did. Claude plus Lark, and for the first time the tools did not fight me. I could build the system the way the teaching actually describes, apply Dr. Holtom's framework in full instead of a watered-down version, and run it on my real data. Start to finish, in a day.` },
    { tag: 'p', text: `Here is what we made, and the part I did not see coming.` },
    { tag: 'image', src: '/blog/images/dave-coaching-one-on-one.webp', alt: 'Dave Hajdu coaching a leader one-on-one at a laptop', caption: 'A real one-on-one. The half of the work AI cannot do, and the reason the whole system exists.' },

    // Section 1
    { tag: 'h2', text: `Start with the way you already teach it` },
    { tag: 'p', text: `The first thing my AI did was not write code. It read the curriculum. All eight lessons of Leadership in the AI Era, the way we actually teach it to executives. The whole program rests on one idea: every lesson ends in a dataset, and the datasets compound into a coach. Lead Yourself gives you <a href="/blog/leadership-brand">your brand</a>, your emotional intelligence, your communication style. Lead Your Team gives you the lifecycle, the coaching profiles (an OCEAN personality read on each person, the Big Five), the OKRs. Stack them and you get an assistant that knows your people, not a generic chatbot.` },
    { tag: 'p', text: `I had built the first half years ago. My foundation folder was already my Series I datasets, carried over from earlier versions of this same coach. What the older tools could never do cleanly was the team layer, on my real five direct reports. That is the work that turns a framework into a system, and it is the part that finally clicked with Claude and Lark.` },

    // Section 2
    { tag: 'h2', text: `The spine: OKRs, a database, and a clean split` },
    { tag: 'p', text: `We tightened my 2026 company goals into real OKRs (Objectives and Key Results). Not a wish list. Objectives that point somewhere and key results that are measurable outcomes, not activities. We separated leading indicators from lagging ones, because the lagging numbers tell you that you lost two months too late. Paid keynote demand moves first. Revenue confirms it last.` },
    { tag: 'p', text: `Then we built the backbone in Lark. One Base, three tables: company OKRs, FAST goals, accountability log. People are not a table I maintain. People are the org directory we already have. No duplication.` },
    { tag: 'p', text: `The design decision I am proudest of is the split between two views of the same data.` },
    { tag: 'p', text: `There is my private coaching view. How each person is wired, the engagement root that is loose for them, the retention risk. That is mine. It never leaves my space.` },
    { tag: 'p', text: `And there is each person's own view, in our talent wiki. Their <a href="/blog/how-to-set-fast-goals-that-dont-fade">FAST goal</a>, how it ladders up to a company objective, what they committed to, and a recap of every one of our conversations. That is theirs. They never see my read on them, only the work and the goals we share.` },
    { tag: 'p', text: `One source of truth. Two lenses. The coaching read stays private. The goals and the accountability are transparent, which is exactly what the <a href="https://sloanreview.mit.edu/article/with-goals-fast-beats-smart/" target="_blank" rel="noopener noreferrer">FAST framework</a> demands. (FAST goals are Frequent, Ambitious, Specific, and Transparent. Transparency is not a nice-to-have in the model. It is the point.)` },

    // Section 3
    { tag: 'h2', text: `One meeting, two outputs` },
    { tag: 'p', text: `The piece that makes this real is the recap engine. After a one-on-one, it pulls the transcript out of Lark and produces two things from the same conversation. For me, a private extraction: what they want, what is true, what we discussed, what they committed to, and the one signal of what is loose. For them, a clean recap of what we covered and what they took on. Same meeting, two audiences, automatically separated.` },
    { tag: 'image', src: '/blog/images/ai-coach-prep-message.webp', alt: 'A real prep message the AI coach generates before a one-on-one, pulled from Lark', caption: 'The prep the system writes before each one-on-one, drawn from the last conversation and aimed at what is loose.' },
    { tag: 'p', text: `I tested it on a real conversation. It worked. It pulled my last one-on-one, wrote my coaching notes, and drafted the version my engineer sees. The thing I have been doing by hand for years, on a schedule.` },

    // Section 4 - the mirror
    { tag: 'h2', text: `Then it held up a mirror` },
    { tag: 'p', text: `Here is the part I did not plan for.` },
    { tag: 'p', text: `I asked it to rate my last one-on-one with each person on the Coach, Mentor, Direct mix. Coaching is asking questions so they grow. Mentoring is sharing your experience. Directing is just giving the answer. The research target for a strong leader is roughly eighty percent coaching, fifteen mentoring, five directing.` },
    { tag: 'image', src: '/blog/images/coaching-mode-mix-scorecard.webp', alt: 'Coaching mode mix: the 80/15/5 target versus my actual 15/45/40', caption: 'The target versus my last three one-on-ones. Almost the exact inverse.' },
    { tag: 'p', text: `It read three of my actual transcripts and gave me the numbers. Across the three, I was running about fifteen percent coaching, forty-five mentoring, forty directing. Almost the exact inverse of where I should be. With one person who has been with me a long time, I was directing sixty percent of the time. I was telling, not asking.` },
    { tag: 'p', text: `The uncomfortable part is that my own leadership profile predicted it. It literally says I skip ahead to my answer and I over-direct. I wrote that about myself months ago. The system just held me to it with data instead of a feeling.` },
    { tag: 'p', text: `That is the whole point.` },
    { tag: 'pull-quote', text: `A coach that only flatters you is useless.` },
    { tag: 'p', text: `The one I built will tell me, before every cycle, when I am about to solve a problem I should be coaching someone through.` },

    // Section 5 - what runs without me
    { tag: 'h2', text: `What runs without me now` },
    { tag: 'p', text: `The rhythm is on a schedule. Before each cycle it preps me, structuring the questions with <a href="https://www.performanceconsultants.com/grow-model" target="_blank" rel="noopener noreferrer">GROW</a> (Goal, Reality, Options, Will) and drawing on the last conversation with each person to aim them at what is loose. After the meetings it writes the recaps. The day after, it follows up with each person on what they committed to. A coaching command center sits on top of it: who is overdue, who has no goal set yet, what my mode mix looks like over time.` },
    { tag: 'html', html: COACHING_SYSTEM_INFOGRAPHIC },
    { tag: 'p', text: `I did not buy a tool. I designed a system, on my own data, that does the half of the work AI can do, so I can spend my time on the half it cannot: the actual conversation, the relationship, the judgment.` },

    // Section 6 - the eight pieces (high level + link to the full guide)
    { tag: 'h2', text: `Build your own: the eight pieces` },
    { tag: 'p', text: `You do not need my curriculum to start. You need an AI that can actually reason over your world (I used Claude), your own data, and the honesty to act on what it shows you. Here is the shape, top to bottom.` },
    { tag: 'shipped-list', title: `The build, in eight pieces`, items: [
      `<strong>Start with Claude as the engine.</strong> The reasoning is the foundation, not the database.`,
      `<strong>Profile each person with OCEAN.</strong> The Big Five read on how each person is wired.`,
      `<strong>Structure every conversation with GROW.</strong> Goal, Reality, Options, Will.`,
      `<strong>Build the backbone in Lark.</strong> One Base: company OKRs, FAST goals, an accountability log.`,
      `<strong>Set the two-view split.</strong> Your private coaching read, their shared view.`,
      `<strong>Wire the recap engine.</strong> One meeting, two outputs.`,
      `<strong>Add the mirror.</strong> Score your Coach, Mentor, Direct mix against the target.`,
      `<strong>Put it on a schedule.</strong> Prep before, recap after, follow up the day after.`,
    ] },
    { tag: 'p', text: `That is the shape, and the frameworks are the hard part and the whole point. I wrote the whole build up step by step, every Lark command and every scope: <a href="https://www.ai-officer.com/post/how-to-build-your-ai-leadership-coach" target="_blank" rel="noopener noreferrer">the full guide is here</a>.` },

    // Close
    { tag: 'image', src: '/blog/images/ai-coach-ask-more-than-you-tell.webp', alt: 'Two chairs by a window at sunrise, set for a one-on-one conversation', caption: 'The half AI cannot do: the actual conversation.' },
    { tag: 'conclusion-box', title: 'Not a prompt. A system', paragraphs: [
      `That is what leading AI looks like in practice. An AI leadership coach is not a prompt. It is a system. And if you build it honestly, it will coach you as hard as it coaches your team.`,
      `I am going to go run a real one-on-one now. This time I am going to ask more than I tell.`,
      `Read next: <a href="/blog/coach-did-most-of-the-learning">I Was the Coach in the Room. I Did Most of the Learning</a> · <a href="/blog/how-to-set-fast-goals-that-dont-fade">How to Set Goals That Don't Fade</a> · <a href="/blog/leadership-brand">The Leadership Brand You Already Have</a>`,
    ] },

    // FAQ (drives FAQPage schema)
    { tag: 'faq', question: 'How do you build an AI leadership coach?', answer: 'Start with the reasoning engine, not the database. Use an AI that can reason over your world (I used Claude) and give it real frameworks: an OCEAN (Big Five) personality profile for each person, and the GROW model (Goal, Reality, Options, Will) for the conversation. Then add the backbone in Lark (one Base with three tables: company OKRs, FAST goals, and an accountability log), a private-versus-shared view split, a recap engine that turns each meeting transcript into two outputs, a scoring mirror that rates your coaching against the target, and a schedule that preps you before meetings and follows up after. Eight pieces in all.' },
    { tag: 'faq', question: 'What is the Coach, Mentor, Direct mix?', answer: 'It is a way to measure how a leader shows up in a conversation. Coaching is asking questions so the other person grows. Mentoring is sharing your own experience. Directing is giving the answer. The research target for a strong leader is roughly 80 percent coaching, 15 percent mentoring, 5 percent directing.' },
    { tag: 'faq', question: 'What are FAST goals?', answer: 'FAST goals are Frequently discussed, Ambitious, Specific, and Transparent. The model, from MIT Sloan, pairs with OKRs and treats transparency as a requirement rather than an option, which is why the team-facing goals in this system are shared rather than private.' },
    { tag: 'faq', question: 'Can you build an AI coach in Lark?', answer: 'Yes. Lark holds the database (a Base with company OKRs, FAST goals, and an accountability log), the org directory for people, the meeting transcripts the recap engine reads, and the schedule that runs the rhythm. The whole working system in this post was built in Lark in a day.' },
  ],
};
