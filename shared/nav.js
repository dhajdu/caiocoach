(function() {
  'use strict';

  var PAGES = [
    // ── Generative AI course (4 missions) ──
    { trackId: "generative-ai", trackName: "Generative AI", slug: "mission-1", short: "Enter the AI Officer" },
    { trackId: "generative-ai", trackName: "Generative AI", slug: "mission-2", short: "Clean Data" },
    { trackId: "generative-ai", trackName: "Generative AI", slug: "mission-3", short: "Advanced Prompt Frameworks" },
    { trackId: "generative-ai", trackName: "Generative AI", slug: "mission-4", short: "Prompting Perfect Visuals" },
    // ── Agentic AI course (6 missions) ──
    { trackId: "agentic-ai", trackName: "Agentic AI", slug: "mission-1", short: "AI Program Planning" },
    { trackId: "agentic-ai", trackName: "Agentic AI", slug: "mission-2", short: "From Prompts to Packaged AI" },
    { trackId: "agentic-ai", trackName: "Agentic AI", slug: "mission-3", short: "Wire the Workflow" },
    { trackId: "agentic-ai", trackName: "Agentic AI", slug: "mission-4", short: "Teach Your Workflow to Decide" },
    { trackId: "agentic-ai", trackName: "Agentic AI", slug: "mission-5", short: "Unleash the Agent" },
    { trackId: "agentic-ai", trackName: "Agentic AI", slug: "mission-6", short: "From Prototype to Production" },
    // ── Micro-Sessions — Generative AI track (8 sessions) ──
    { trackId: "micro-sessions", trackName: "Micro-Sessions", slug: "ai-browsers", short: "AI Browsers: Working Smarter" },
    { trackId: "micro-sessions", trackName: "Micro-Sessions", slug: "ai-shopping", short: "AI Shopping: The End of Browse and Click" },
    { trackId: "micro-sessions", trackName: "Micro-Sessions", slug: "build-your-digital-twin", short: "Build Your Digital Twin" },
    { trackId: "micro-sessions", trackName: "Micro-Sessions", slug: "build-your-personal-brand", short: "Build Your Personal Brand Doc" },
    { trackId: "micro-sessions", trackName: "Micro-Sessions", slug: "deep-research", short: "Deep Research" },
    { trackId: "micro-sessions", trackName: "Micro-Sessions", slug: "from-one-post-to-every-platform", short: "From One Post To Every Platform" },
    { trackId: "micro-sessions", trackName: "Micro-Sessions", slug: "prompting-101-video", short: "Prompting 101: Video" },
    { trackId: "micro-sessions", trackName: "Micro-Sessions", slug: "seo-or-geo", short: "SEO or GEO: Write Content AI Will Cite" },
    // ── Micro-Sessions — Agentic AI track (8 sessions) ──
    { trackId: "micro-sessions", trackName: "Micro-Sessions", slug: "claude-cowork-first-workflow", short: "Your First Cowork Workflow" },
    { trackId: "micro-sessions", trackName: "Micro-Sessions", slug: "build-your-ai-team-paperclip", short: "Build Your AI Team with Paperclip" },
    { trackId: "micro-sessions", trackName: "Micro-Sessions", slug: "claude-code-for-non-coders", short: "Claude Code for Non-Coders" },
    { trackId: "micro-sessions", trackName: "Micro-Sessions", slug: "claude-dispatch", short: "Claude Dispatch" },
    { trackId: "micro-sessions", trackName: "Micro-Sessions", slug: "cowork-and-calendar", short: "Cowork + Calendar" },
    { trackId: "micro-sessions", trackName: "Micro-Sessions", slug: "how-to-brief-an-ai-agent", short: "How to Brief an AI Agent" },
    { trackId: "micro-sessions", trackName: "Micro-Sessions", slug: "paperclip-pipelines", short: "Paperclip Pipelines" },
    { trackId: "micro-sessions", trackName: "Micro-Sessions", slug: "the-command-line", short: "The Command Line" },
    // ── Micro-Sessions — Leadership track (1 session) ──
    { trackId: "micro-sessions", trackName: "Micro-Sessions", slug: "agents-compared", short: "Agents Compared" }
  ];

  function getBasePath() {
    var path = window.location.pathname;
    if (path.indexOf('/generative-ai/') !== -1 || path.indexOf('/agentic-ai/') !== -1 || path.indexOf('/micro-sessions/') !== -1) {
      return '../';
    }
    return '';
  }

  function getCurrentPage() {
    var path = window.location.pathname;
    for (var i = 0; i < PAGES.length; i++) {
      if (path.indexOf(PAGES[i].trackId + '/' + PAGES[i].slug) !== -1) {
        return i;
      }
    }
    return -1;
  }

  function buildPrevNext() {
    var idx = getCurrentPage();
    if (idx === -1) return;

    var base = getBasePath();
    var prev = idx > 0 ? PAGES[idx - 1] : null;
    var next = idx < PAGES.length - 1 ? PAGES[idx + 1] : null;

    var html = '';

    if (prev) {
      html += '<a href="' + base + prev.trackId + '/' + prev.slug + '.html" class="page-nav-link prev">';
      html += '<span class="page-nav-dir">&larr; Previous</span>';
      html += '<span class="page-nav-title">' + prev.short + '</span>';
      html += '<span class="page-nav-track">' + prev.trackName + '</span>';
      html += '</a>';
    } else {
      html += '<a href="' + base + 'index.html" class="page-nav-link prev">';
      html += '<span class="page-nav-dir">&larr; Back</span>';
      html += '<span class="page-nav-title">Course Hub</span>';
      html += '<span class="page-nav-track">Home</span>';
      html += '</a>';
    }

    if (next) {
      html += '<a href="' + base + next.trackId + '/' + next.slug + '.html" class="page-nav-link next">';
      html += '<span class="page-nav-dir">Next &rarr;</span>';
      html += '<span class="page-nav-title">' + next.short + '</span>';
      html += '<span class="page-nav-track">' + next.trackName + '</span>';
      html += '</a>';
    }

    if (!html) return;

    var container = document.createElement('div');
    container.className = 'page-nav';
    container.innerHTML = html;

    var main = document.querySelector('.main') || document.querySelector('main');
    if (main) main.appendChild(container);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildPrevNext);
  } else {
    buildPrevNext();
  }
})();
