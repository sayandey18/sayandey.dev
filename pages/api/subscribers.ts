import { type NextRequest } from 'next/server';

export default async function handler(req: NextRequest) {
  const apiServer = process.env.MAILCHIMP_API_SERVER;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const result = await fetch(
    `https://${apiServer}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
    {
      method: 'GET',
      headers: {
        Authorization: `Token ${process.env.MAILCHIMP_API_KEY}`
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

  return new Response(JSON.stringify({ count: data.total_items }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600'
    }
  });
}

export const config = {
  runtime: 'experimental-edge'
};
