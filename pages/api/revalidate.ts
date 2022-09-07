import type { NextApiRequest, NextApiResponse } from 'next';
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';
import { sanityClient } from 'lib/sanity-server';
import { postUpdatedQuery } from 'lib/queries';

async function stringifyRequest(req: NextApiRequest) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!process.env.SANITY_STUDIO_REVALIDATE_SECRET) {
    return res
      .status(500)
      .json({ message: 'Missing sanity studio revalidate secret' });
  }

  const signature = req.headers[SIGNATURE_HEADER_NAME]?.toString();
  const stringifiedRequest = await stringifyRequest(req);

  if (!signature) {
    return res.status(400).json({ message: 'Missing signature' });
  }

  if (
    !isValidSignature(
      stringifiedRequest,
      signature,
      process.env.SANITY_STUDIO_REVALIDATE_SECRET
    )
  ) {
    return res.status(401).json({ message: 'Invalid request' });
  }

  const { _id: id } = JSON.parse(stringifiedRequest);
  if (typeof id !== 'string' || !id) {
    return res.status(400).json({ message: 'Invalid _id' });
  }

  try {
    const post = await sanityClient.fetch(postUpdatedQuery, { id });
    const pathToRevalidate = `/blog/${post.slug}`;

    await res.revalidate('/blog');
    await res.revalidate(pathToRevalidate);

    return res
      .status(200)
      .json({ message: `[Revalidated] '${pathToRevalidate}' (${id})`, revalidated: true });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({ message: err.message });
    } else {
      return res.status(500).json({ message: 'Unknown error' });
    }
  }
}
