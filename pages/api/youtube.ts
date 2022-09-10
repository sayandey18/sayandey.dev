import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

import googleAuth from 'lib/google';
import { version } from 'react';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const auth = await googleAuth.getClient();
  const youtube = google.youtube({
    auth: process.env.GOOGLE_API_KEY,
    version: 'v3'
  });

  const response = await youtube.channels.list({
    id: 'UCGc7G2cwRBzasx0gCdfz8Lw',
    part: 'statistics'
  });

  const channel = response.data.items[0];
  const { subscriberCount, viewCount } = channel.statistics;

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({
    subscriberCount,
    viewCount
  });
}
