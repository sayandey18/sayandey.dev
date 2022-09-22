import { type NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge'
};

export default async function handler(req: NextRequest) {
  const per_page = req.nextUrl.searchParams.get('per_page') || '20';
  const response = await fetch(
    `https://api.github.com/users/sayandey18/repos?per_page=${per_page}&sort=pushed`,
    {
      method: 'GET',
      headers: {
        Authorization: `Token ${process.env.GITHUB_ACCESS_TOKENS}`
      }
    }
  );

  const repositories = await response.json();
  const repos = repositories
    .filter((repo: { fork: boolean }) => !repo.fork)
    .slice(0, Number(per_page));

  return new Response(JSON.stringify({ repos }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600'
    }
  });
}
