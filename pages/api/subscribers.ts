import { type NextRequest } from 'next/server';

export const config = {
  runtime: 'edge'
};

export default async function handler(req: NextRequest) {
  const groupId = process.env.MAILERLITE_GROUP_ID;
  const result = await fetch(
    `https://api.mailerlite.com/api/v2/groups/${groupId}/subscribers/count`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-MailerLite-ApiDocs': 'true',
        'X-MailerLite-ApiKey': process.env.MAILERLITE_API_KEY
      }
    }
  );

  const data = await result.json();

  if (!result.ok) {
    return new Response(
      JSON.stringify({ error: 'Error retrieving subscribers' }),
      {
        status: 500,
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }

  return new Response(JSON.stringify({ count: data.count }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600'
    }
  });
}
