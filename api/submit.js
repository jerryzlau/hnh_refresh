module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const url = process.env.SHEET_URL;
  if (!url) return res.status(500).json({ error: 'SHEET_URL not configured' });

  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(req.body),
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(502).json({ error: 'Upstream request failed' });
  }
};
