(function () {
  'use strict';

  const THEME_KEY = 'blog-theme';

  function getPreferredTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  function initTheme() {
    setTheme(getPreferredTheme());

    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    }
  }

  function initMobileNav() {
    const toggle = document.querySelector('.nav__toggle');
    const links = document.querySelector('.nav__links');

    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('nav__links--open');
      toggle.classList.toggle('nav__toggle--open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
    });

    links.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('nav__links--open');
        toggle.classList.remove('nav__toggle--open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !links.contains(e.target)) {
        links.classList.remove('nav__links--open');
        toggle.classList.remove('nav__toggle--open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function setActiveNavLink() {
    const currentPage = document.body.dataset.page;
    if (!currentPage) return;

    document.querySelectorAll('.nav__link').forEach(link => {
      if (link.dataset.nav === currentPage) {
        link.classList.add('nav__link--active');
      }
    });
  }

  function initHomepage() {
    const container = document.getElementById('latest-posts');
    if (!container) return;

    const posts = getLatestPosts(3);
    container.innerHTML = posts.map(createPostCard).join('');
  }

  function initBlogList() {
    const container = document.getElementById('all-posts');
    if (!container) return;

    const sorted = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
    container.innerHTML = sorted.map(createPostCard).join('');
  }

  function initSinglePost() {
    const container = document.getElementById('post-content');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');
    const post = slug ? getPostBySlug(slug) : null;

    if (!post) {
      container.innerHTML = `
        <div class="content-narrow" style="text-align: center; padding: 4rem 0;">
          <h2>Post not found</h2>
          <p style="color: var(--color-text-muted); margin: 1rem 0 2rem;">The article you're looking for doesn't exist or has been moved.</p>
          <a href="blog.html" class="hero__cta">Browse all posts</a>
        </div>
      `;
      document.title = 'Post Not Found — My Blog';
      return;
    }

    document.title = `${post.title} — My Blog`;

    container.innerHTML = `
      <article class="content-narrow">
        <header class="post-article__header">
          <div class="post-article__meta">
            <span class="post-article__category">${post.category}</span>
            <time datetime="${post.date}">${formatDate(post.date)}</time>
            <span>${post.readTime}</span>
          </div>
          <h1 class="post-article__title">${post.title}</h1>
          <p class="post-article__excerpt">${post.excerpt}</p>
        </header>
        <div class="post-article__cover">
          <img src="${post.image}" alt="">
        </div>
        <div class="post-article__content">
          ${post.content}
        </div>
        <footer class="post-article__footer">
          <a href="blog.html" class="back-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Back to all posts
          </a>
        </footer>
      </article>
    `;
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileNav();
    setActiveNavLink();
    initHomepage();
    initBlogList();
    initSinglePost();
  });
})();
