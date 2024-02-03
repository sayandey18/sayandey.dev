import { type NextRequest } from 'next/server';

export const config = {
  runtime: 'edge'
};

const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
const baseUrl = `https://graph.facebook.com/v17.0/me?fields=id,name,friends,posts&access_token=${accessToken}`;

export default async function handler(req: NextRequest) {
  const response = await fetch(baseUrl, {
    method: 'GET'
  });

  if (response.ok) {
    const facebookData = await response.json();
    const totalFriends = facebookData.friends.summary.total_count;
    const totalPosts = facebookData.posts.data.length;

    return new Response(
      JSON.stringify({
        id: facebookData.id,
        name: facebookData.name,
        friends: `${totalFriends}`,
        posts: `${totalPosts}`
      }),
      {
        status: 200,
        headers: {
          'content-type': 'application/json',
          'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600'
        }
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        id: '4337843173106989',
        name: 'Sayan Dey',
        friends: '1500'
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
}
