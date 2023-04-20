import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const groupId = process.env.MAILERLITE_GROUP_ID;
  const result = await fetch(
    `https://api.mailerlite.com/api/v2/groups/${groupId}/subscribers`,
    {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'X-MailerLite-ApiDocs': 'true',
        'Content-Type': 'application/json',
        'X-MailerLite-ApiKey': process.env.MAILERLITE_API_KEY
      },
      body: JSON.stringify({ email: email, resubscribe: false })
    }
  );

  const data = await result.json();

  if (!result.ok) {
    return res.status(500).json({ error: data.error.email[0] });
  }

  return res.status(201).json({ error: '' });
}
