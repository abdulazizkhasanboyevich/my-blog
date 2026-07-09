const { createSessionToken } = require('./_lib');

module.exports = (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { password } = req.body || {};

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    res.status(401).json({ error: "Noto'g'ri parol" });
    return;
  }

  const token = createSessionToken();
  res.status(200).json({ token });
};
