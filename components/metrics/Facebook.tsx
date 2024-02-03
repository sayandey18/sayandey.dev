import useSWR from 'swr';
import fetcher from 'lib/fetcher';
import { Facebook } from 'lib/types';
import MetricCard from 'components/metrics/Card';

export default function FacebookCard() {
  const { data } = useSWR<Facebook>('/api/facebook', fetcher);

  const friends = new Number(data?.friends);
  const posts = new Number(data?.posts);
  const link = 'https://www.facebook.com/sayan.dey9239';

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
      <MetricCard
        header="Facebook Friends"
        link={link}
        metric={friends}
        isCurrency={false}
      />
      <MetricCard
        header="Facebook Posts"
        link={link}
        metric={posts}
        isCurrency={false}
      />
    </div>
  );
}
