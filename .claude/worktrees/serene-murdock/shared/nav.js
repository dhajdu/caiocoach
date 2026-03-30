(function() {
  'use strict';

  var PAGES = [
    { trackId: "generative-ai", trackName: "Generative AI", slug: "mission-1", short: "Enter the AI Officer" },
    { trackId: "generative-ai", trackName: "Generative AI", slug: "mission-2", short: "Clean Data" },
    { trackId: "generative-ai", trackName: "Generative AI", slug: "mission-3", short: "Advanced Prompt Frameworks" },
    { trackId: "generative-ai", trackName: "Generative AI", slug: "mission-4", short: "Prompting Perfect Visuals" },
    { trackId: "agentic-ai", trackName: "Agentic AI", slug: "mission-1", short: "AI Program Planning" },
    { trackId: "agentic-ai", trackName: "Agentic AI", slug: "mission-2", short: "From Prompts to Packaged AI" },
    { trackId: "agentic-ai", trackName: "Agentic AI", slug: "mission-3", short: "Wire the Workflow" },
    { trackId: "agentic-ai", trackName: "Agentic AI", slug: "mission-4", short: "Teach Your Workflow to Decide" },
    { trackId: "agentic-ai", trackName: "Agentic AI", slug: "mission-5", short: "Unleash the Agent" },
    { trackId: "micro-sessions", trackName: "Micro-Sessions", slug: "cowork-first-workflow", short: "Your First Cowork Workflow" },
    { trackId: "micro-sessions", trackName: "Micro-Sessions", slug: "build-ai-team-paperclip", short: "Build Your AI Team with Paperclip" }
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
