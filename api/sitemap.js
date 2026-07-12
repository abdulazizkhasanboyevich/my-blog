const { blogPosts } = require('../js/posts.js');

const SITE_URL = 'https://texnoblog.vercel.app';

module.exports = (req, res) => {
  const staticPages = [
    { url: '/', priority: '1.0' },
    { url: '/blog.html', priority: '0.9' },
    { url: '/about.html', priority: '0.5' }
  ];

  const postUrls = blogPosts.map(p => ({
    url: `/post.html?slug=${p.slug}`,
    priority: '0.8',
    lastmod: p.date
  }));

  const entries = [...staticPages, ...postUrls]
    .map(p => {
      const loc = `${SITE_URL}${p.url}`;
      const lastmod = p.lastmod ? `\n    <lastmod>${p.lastmod}</lastmod>` : '';
      return `  <url>\n    <loc>${loc}</loc>${lastmod}\n    <priority>${p.priority}</priority>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  res.status(200).send(xml);
};
