const blogPosts = [
  {
    slug: 'ai-davri',
    title: 'AI davri',
    excerpt: 'Jadallashib borayotgan AI davrida ish bozorida raqobatbardosh bo\'lish',
    category: 'IT',
    date: '2026-06-17',
    readTime: '5 daqiqa o'qish',
    image: 'https://www.sirtbhopal.ac.in/assets/images/blogs/new-era-of-artificial-intelligence-leading-from-transformation-of-industries-to-empowering-people.webp',
    content: `
      <p>Bugungi kunda sun'iy intellekt (AI) texnologiyalari hayotimizning barcha sohalariga kirib kelmoqda. Bu o'zgarish nafaqat texnologiya sohasini, balki ish bozori, ta'lim va jamiyatni ham tubdan o'zgartirmoqda.</p>
      <h2>AI ish bozorida nima o'zgartirmoqda?</h2>
      <p>So'nggi yillarda AI ko'plab oddiy va takroriy ishlarni avtomatlashtirdi. Bugungi mutaxassis ertaga AI bilan raqobatlashishi mumkin. Lekin bu faqat xavf emas — yangi imkoniyatlar ham yaratmoqda.</p>
      <ul>
        <li>Dasturchilar AI yordamida 10 barobar tezroq kod yozmoqda</li>
        <li>Dizaynerlar AI orqali daqiqalar ichida professional dizayn yaratmoqda</li>
        <li>Yozuvchilar AI bilan kontent ishlab chiqarishni tezlashtirmoqda</li>
        <li>Tahlilchilar katta ma'lumotlarni AI yordamida tezroq qayta ishlamoqda</li>
        </ul>
      <h2>Raqobatbardosh bo'lish uchun nima qilish kerak?</h2>
      <p>AI davrida muvaffaqiyatli bo'lish uchun bir narsani tushunish kerak — AI sizning o'rningizni emas, AI ishlatadigan odam sizning o'rningizni egallaydi.</p>
      <h3>Zarur ko'nikmalar</h3>
      <ul>
        <li>AI toollarini o'rganish va ulardan samarali foydalanish</li>
        <li>Ijodiy va tanqidiy fikrlash qobiliyatini rivojlantirish</li>
        <li>Muloqot va hamkorlik ko'nikmalarini mustahkamlash</li>
        <li>Yangi texnologiyalarga tez moslashish</li>
        </ul>
      <h2>Xulosa</h2>
      <p>AI davri qo'rqinchli emas — u yangi imkoniyatlar davri. Vibe coding, AI yordamchi dasturlar va zamonaviy toollarni o'rganish orqali siz ham bu o'zgarishdan foyda olishingiz mumkin. Muhimi — o'rganishni to'xtatmaslik!</p>
    `
  },
  {
    slug: 'finding-clarity-in-code',
    title: 'Vibe-Coding orqali dastlabki website!',
    excerpt: 'Claude, Vercel, Github kabi toollar orqali professional website yaratish',
    category: 'Development',
    date: '2026-05-28',
    readTime: '5 min read',
    image: 'https://miro.medium.com/0*vOaWDgTmVpMfi9ws',
    content: `
      <p>We've all been there â staring at a tangled mess of logic, convinced the solution needs to be complex because the problem feels complex. But more often than not, the clearest code comes from the simplest mental model.</p>

      <h2>Start with the question, not the answer</h2>
      <p>Before writing a single line, ask yourself: what is this code actually trying to accomplish? Strip away the implementation details and describe the goal in plain language. If you can't explain it simply, you don't understand it well enough yet.</p>

      <blockquote>The best code reads like well-written prose â each function has a clear purpose, and the flow is obvious to anyone who picks it up.</blockquote>

      <h2>Embrace small functions</h2>
      <p>Large functions are tempting because they keep everything in one place. But they hide complexity. A function that does one thing well is easier to test, easier to name, and easier to reuse.</p>

      <ul>
        <li>Name functions after what they do, not how they do it</li>
        <li>Keep functions under 20 lines when possible</li>
        <li>Extract repeated patterns into shared utilities</li>
      </ul>

      <h2>Delete with confidence</h2>
      <p>Some of the best refactoring sessions end with less code than you started with. Dead code, over-abstractions, and "just in case" branches add noise. If you're not sure something is needed, try removing it. Version control has your back.</p>

      <p>Clarity isn't about writing less â it's about making every line earn its place on the screen.</p>
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
