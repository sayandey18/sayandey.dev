import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <Script async data-api="/_hive" src="/bee.js" />
      )}
    </>
  );
}
