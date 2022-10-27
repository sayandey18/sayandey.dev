import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <Script
          async
          defer
          data-website-id="91fcf110-8189-4759-801e-f1a63d1eee08"
          src="https://sayandey-analytics.vercel.app/umami.js"
        />
      )}
    </>
  );
}
