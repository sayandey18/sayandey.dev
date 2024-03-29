import { type NextRequest } from 'next/server';

export const config = {
  runtime: 'edge'
};

export default async function handler(req: NextRequest) {
  const userResponse = await fetch(`https://api.github.com/users/sayandey18`, {
    method: 'GET',
    headers: {
      Authorization: `Token ${process.env.GITHUB_ACCESS_TOKENS}`
    }
  });

  const userReposResponse = await fetch(
    `https://api.github.com/users/sayandey18/repos?per_page=100`,
    {
      method: 'GET',
      headers: {
        Authorization: `Token ${process.env.GITHUB_ACCESS_TOKENS}`
      }
    }
  );

  const user = await userResponse.json();
  const repositories = await userReposResponse.json();

  const mine = repositories
    .filter((repo: { fork: boolean }) => !repo.fork)
    .slice(0, Number(100));
  const stars = mine.reduce((accumulator: any, repository: any) => {
    return accumulator + repository['stargazers_count'];
  }, 0);

  return new Response(
    JSON.stringify({
      followers: user.followers,
      stars
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600'
      }
    }
  );
}
