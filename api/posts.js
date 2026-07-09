const {
  requireAuth,
  githubGetFile,
  githubSaveFile,
  slugify,
  textToHtml,
  parsePosts,
  rebuildFile
} = require('./_lib');

module.exports = async (req, res) => {
  if (!requireAuth(req, res)) return;

  try {
    if (req.method === 'GET') {
      const { content } = await githubGetFile();
      const posts = parsePosts(content);
      res.status(200).json({ posts });
      return;
    }

    if (req.method === 'POST') {
      const { title, excerpt, category, date, readTime, image, content: rawContent } = req.body || {};
      if (!title || !excerpt || !category || !date || !rawContent) {
        res.status(400).json({ error: "Barcha majburiy maydonlarni to'ldiring" });
        return;
      }

      const { content: fileContent, sha } = await githubGetFile();
      const posts = parsePosts(fileContent);
      const slug = slugify(title);

      if (posts.some(p => p.slug === slug)) {
        res.status(409).json({ error: 'Shunday sarlavhali post allaqachon mavjud' });
        return;
      }

      const newPost = {
        slug,
        title,
        excerpt,
        category,
        date,
        readTime: readTime || '',
        image: image || 'images/default.jpg',
        content: `\n      ${textToHtml(rawContent)}\n    `
      };

      const updated = [newPost, ...posts];
      const newFileContent = rebuildFile(fileContent, updated);
      await githubSaveFile(newFileContent, sha, `Yangi post: ${title}`);

      res.status(200).json({ ok: true, slug });
      return;
    }

    if (req.method === 'PUT') {
      const { slug, title, excerpt, category, date, readTime, image, content: rawContent } = req.body || {};
      if (!slug || !title || !excerpt || !category || !date || !rawContent) {
        res.status(400).json({ error: "Barcha maydonlarni to'ldiring" });
        return;
      }

      const { content: fileContent, sha } = await githubGetFile();
      const posts = parsePosts(fileContent);
      const updated = posts.map(p =>
        p.slug === slug
          ? { ...p, title, excerpt, category, date, readTime, image, content: `\n      ${rawContent.trim()}\n    ` }
          : p
      );

      const newFileContent = rebuildFile(fileContent, updated);
      await githubSaveFile(newFileContent, sha, `Post tahrirlandi: ${title}`);

      res.status(200).json({ ok: true });
      return;
    }

    if (req.method === 'DELETE') {
      const slug = (req.query && req.query.slug) || (req.body && req.body.slug);
      if (!slug) {
        res.status(400).json({ error: 'slug talab qilinadi' });
        return;
      }

      const { content: fileContent, sha } = await githubGetFile();
      const posts = parsePosts(fileContent);
      const target = posts.find(p => p.slug === slug);
      const updated = posts.filter(p => p.slug !== slug);

      const newFileContent = rebuildFile(fileContent, updated);
      await githubSaveFile(newFileContent, sha, `Post o'chirildi: ${target ? target.title : slug}`);

      res.status(200).json({ ok: true });
      return;
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
