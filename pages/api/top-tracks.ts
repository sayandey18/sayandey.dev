import type { NextApiRequest } from 'next';
import { getTopTracks } from 'lib/spotify';

type ResponseTrackType = {
  artists: {
    name: string;
  }[];
  name: string;
  external_urls: {
    spotify: string;
  };
  album: {
    images: {
      url: string;
    }[];
  };
};

export default async function handler(req: NextApiRequest) {
  const response = await getTopTracks();
  const { items } = await response.json();

  const tracks = items.reverse().slice(0, 10).map((track: ResponseTrackType) => ({
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    cover: track.album.images[1]?.url,
    title: track.name
  }));

  return new Response(JSON.stringify({ tracks }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200'
    }
  });
}

export const config = {
  runtime: 'experimental-edge'
};
