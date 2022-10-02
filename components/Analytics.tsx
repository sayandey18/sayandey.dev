import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <Script
          async
          defer
          data-website-id="6f7a6a64-bbae-48f5-812c-da19116ca3c0"
          src="https://analytics.sayandey.dev/umami.js"
        />
      )}
    </>
  );
}
