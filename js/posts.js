const blogPosts = [
  {
    slug: 'finding-clarity-in-code',
    title: 'Vibe-Coding orqali dastlabki website!',
    excerpt: 'Claude, Vercel, Github kabi toollar orqali professional website yaratish',
    category: 'Development',
    date: '2026-05-28',
    readTime: '5 min read',
    image: 'https://miro.medium.com/0*vOaWDgTmVpMfi9ws',
    content: `
      <p>We've all been there — staring at a tangled mess of logic, convinced the solution needs to be complex because the problem feels complex. But more often than not, the clearest code comes from the simplest mental model.</p>

      <h2>Start with the question, not the answer</h2>
      <p>Before writing a single line, ask yourself: what is this code actually trying to accomplish? Strip away the implementation details and describe the goal in plain language. If you can't explain it simply, you don't understand it well enough yet.</p>

      <blockquote>The best code reads like well-written prose — each function has a clear purpose, and the flow is obvious to anyone who picks it up.</blockquote>

      <h2>Embrace small functions</h2>
      <p>Large functions are tempting because they keep everything in one place. But they hide complexity. A function that does one thing well is easier to test, easier to name, and easier to reuse.</p>

      <ul>
        <li>Name functions after what they do, not how they do it</li>
        <li>Keep functions under 20 lines when possible</li>
        <li>Extract repeated patterns into shared utilities</li>
      </ul>

      <h2>Delete with confidence</h2>
      <p>Some of the best refactoring sessions end with less code than you started with. Dead code, over-abstractions, and "just in case" branches add noise. If you're not sure something is needed, try removing it. Version control has your back.</p>

      <p>Clarity isn't about writing less — it's about making every line earn its place on the screen.</p>
    `
  },
  {
    slug: 'morning-pages-for-creatives',
    title: 'Morning Pages for Creatives',
    excerpt: 'A daily writing practice that unlocks creativity, reduces anxiety, and sharpens your thinking.',
    category: 'Creativity',
    date: '2026-05-14',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1455390217239-babbc817c34f?w=800&q=80',
    content: `
      <p>Every morning, before the world demands your attention, sit down with a blank page and write three pages of stream-of-consciousness prose. No editing. No judgment. Just write.</p>

      <h2>Where it comes from</h2>
      <p>Julia Cameron introduced "Morning Pages" in <em>The Artist's Way</em> as a tool for unblocking creative energy. The practice is deceptively simple: fill three pages with whatever comes to mind, every single day.</p>

      <h2>Why it works</h2>
      <p>Morning pages act as a brain dump. Worries, to-do lists, half-formed ideas — they all spill onto the page, leaving your mind clearer for actual creative work. Over time, patterns emerge. Recurring themes reveal what truly matters to you.</p>

      <ol>
        <li>Write immediately upon waking, before checking your phone</li>
        <li>Use pen and paper or a simple text editor — no fancy tools</li>
        <li>Don't read what you've written for at least eight weeks</li>
      </ol>

      <p>The goal isn't to produce publishable writing. It's to show up, consistently, and listen to your own inner voice.</p>
    `
  },
  {
    slug: 'designing-for-readability',
    title: 'Designing for Readability',
    excerpt: 'Typography, spacing, and contrast choices that make content a pleasure to read on any device.',
    category: 'Design',
    date: '2026-04-30',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    content: `
      <p>Good design is invisible. When typography and layout work together, readers don't notice the design — they simply enjoy the content. Here's how to get there.</p>

      <h2>Choose your typefaces carefully</h2>
      <p>Pair a distinctive serif for headings with a clean sans-serif for body text. Limit yourself to two families. The contrast between them creates visual hierarchy without needing extra decoration.</p>

      <h2>Respect line length</h2>
      <p>Optimal reading width is between 60 and 75 characters per line. Wider than that and eyes lose their place moving to the next line. Narrower and the rhythm feels choppy.</p>

      <pre><code>.content {
  max-width: 720px;
  line-height: 1.7;
}</code></pre>

      <h2>Let content breathe</h2>
      <p>Whitespace isn't wasted space — it's a design element. Generous margins, comfortable line height, and clear section breaks guide the eye and reduce cognitive load.</p>

      <p>Readable design respects the reader's time and attention. Every choice should serve comprehension, not decoration.</p>
    `
  },
  {
    slug: 'slow-living-in-a-fast-world',
    title: 'Slow Living in a Fast World',
    excerpt: 'Resisting the cult of busyness and finding meaning in intentional, unhurried moments.',
    category: 'Life',
    date: '2026-04-15',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    content: `
      <p>We live in an age that celebrates speed — faster networks, instant delivery, real-time everything. But some of life's richest experiences refuse to be rushed.</p>

      <h2>The cost of constant acceleration</h2>
      <p>When every moment is optimized for productivity, we lose the space for reflection, wonder, and genuine connection. Burnout isn't a personal failing — it's a systemic symptom of a culture that never stops.</p>

      <h2>Practices that help</h2>
      <p>Slow living isn't about doing less. It's about doing what matters, at a pace that lets you be fully present.</p>

      <ul>
        <li>Take walks without podcasts or music</li>
        <li>Cook meals from scratch at least once a week</li>
        <li>Keep one day mostly unscheduled</li>
        <li>Read physical books before bed instead of scrolling</li>
      </ul>

      <blockquote>Slow down and everything you are chasing will come around and catch you.</blockquote>

      <p>The world will keep spinning fast. You don't have to match its pace to live a full life.</p>
    `
  },
  {
    slug: 'building-a-writing-habit',
    title: 'Building a Writing Habit',
    excerpt: 'Practical strategies for showing up to the blank page every day, even when inspiration doesn't.',
    category: 'Writing',
    date: '2026-03-22',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3a32?w=800&q=80',
    content: `
      <p>Inspiration is unreliable. Habits aren't. The writers who produce consistently aren't waiting for muse — they've built systems that make showing up automatic.</p>

      <h2>Anchor to an existing routine</h2>
      <p>Attach your writing practice to something you already do daily. After morning coffee. Before checking email. The existing habit becomes a trigger for the new one.</p>

      <h2>Lower the bar</h2>
      <p>Two hundred words is enough. One paragraph is enough. The goal is continuity, not brilliance. You can always edit later — but only if you have something on the page first.</p>

      <h2>Track your streak</h2>
      <p>Visual progress is motivating. A simple calendar with an X on each writing day creates gentle accountability. Don't break the chain — but if you do, start a new one without guilt.</p>

      <p>Writing is a craft improved through repetition. Trust the process, and the quality will follow.</p>
    `
  },
  {
    slug: 'lessons-from-minimalism',
    title: 'Lessons from Minimalism',
    excerpt: 'What owning fewer things taught me about focus, freedom, and what actually brings joy.',
    category: 'Life',
    date: '2026-03-08',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1484101403633-56289189fcff?w=800&q=80',
    content: `
      <p>Minimalism isn't about empty white rooms and a wardrobe of identical black t-shirts. It's about intentionally choosing what earns space in your life — physical, digital, and mental.</p>

      <h2>The turning point</h2>
      <p>I spent a weekend clearing out a closet I hadn't opened in two years. Bags of clothes, gadgets, books I'd never read. The relief wasn't from the empty space — it was from the decision-making that stopped.</p>

      <h2>Questions that help</h2>
      <p>Before acquiring anything new, ask:</p>

      <ul>
        <li>Will I use this at least once a week?</li>
        <li>Does this solve a real problem or a imagined one?</li>
        <li>Am I buying this for me or for an image I want to project?</li>
      </ul>

      <h2>Beyond possessions</h2>
      <p>The same principles apply to commitments, apps, and relationships. Every yes to something mediocre is a no to something meaningful. Curate ruthlessly, with kindness.</p>

      <p>Less stuff means less maintenance, less decision fatigue, and more room for what you actually care about.</p>
    `
  }
];

function formatDate(dateString) {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function getPostBySlug(slug) {
  return blogPosts.find(post => post.slug === slug);
}

function getLatestPosts(count) {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
}

function createPostCard(post) {
  return `
    <article class="post-card">
      <div class="post-card__image">
        <img src="${post.image}" alt="" loading="lazy">
      </div>
      <div class="post-card__body">
        <div class="post-card__meta">
          <span class="post-card__category">${post.category}</span>
          <span>${formatDate(post.date)}</span>
        </div>
        <h3 class="post-card__title">
          <a href="post.html?slug=${post.slug}">${post.title}</a>
        </h3>
        <p class="post-card__excerpt">${post.excerpt}</p>
        <a href="post.html?slug=${post.slug}" class="post-card__read-more">
          Read article
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
    </article>
  `;
}
