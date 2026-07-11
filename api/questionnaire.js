export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, projectType, answers } = req.body;

  if (!name || !email || !projectType) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const answersHtml = Object.entries(answers)
    .filter(([, v]) => v)
    .map(
      ([q, a]) => `
      <div style="margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid #eee;">
        <p style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#999;margin:0 0 6px;">${q}</p>
        <p style="font-size:15px;color:#1a1a1a;margin:0;line-height:1.6;">${a}</p>
      </div>`
    )
    .join('');

  const wrap = (content) => `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:600px;margin:0 auto;padding:40px 32px;color:#1a1a1a;">
      ${content}
    </div>`;

  const ownerHtml = wrap(`
    <h2 style="font-size:22px;font-weight:700;margin:0 0 4px;">New brief: ${projectType}</h2>
    <p style="color:#888;margin:0 0 28px;font-size:14px;">Submitted via olusworks.xyz/client</p>
    <div style="background:#f5f5f5;border-radius:10px;padding:16px 20px;margin-bottom:32px;">
      <p style="margin:0 0 8px;font-size:14px;"><strong>Name:</strong> ${name}</p>
      <p style="margin:0 0 8px;font-size:14px;"><strong>Email:</strong> <a href="mailto:${email}" style="color:#1a1a1a;">${email}</a></p>
      <p style="margin:0;font-size:14px;"><strong>Project:</strong> ${projectType}</p>
    </div>
    ${answersHtml}
  `);

  const clientHtml = wrap(`
    <h2 style="font-size:22px;font-weight:700;margin:0 0 12px;">Got it, ${name}.</h2>
    <p style="color:#555;margin:0 0 28px;font-size:15px;line-height:1.7;">Thanks for filling out the brief. Here's a copy of your answers for reference. I'll review everything and be in touch within 1–2 business days.</p>
    <div style="background:#f5f5f5;border-radius:10px;padding:14px 20px;margin-bottom:32px;">
      <p style="margin:0;font-size:14px;"><strong>Project type:</strong> ${projectType}</p>
    </div>
    ${answersHtml}
    <p style="color:#aaa;font-size:13px;margin-top:40px;border-top:1px solid #eee;padding-top:24px;">
      Oluwanifemi Osunsanya<br>
      <a href="https://olusworks.xyz" style="color:#aaa;">olusworks.xyz</a>
    </p>
  `);

  const send = (to, subject, html) =>
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from: 'Oluwanifemi <olu@olusworks.xyz>', to, subject, html }),
    });

  try {
    await Promise.all([
      send('Olu@olusworks.xyz', `New ${projectType} brief from ${name}`, ownerHtml),
      send(email, `Your brief is in. I'll be in touch`, clientHtml),
    ]);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to send' });
  }
}
