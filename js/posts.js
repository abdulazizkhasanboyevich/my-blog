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
