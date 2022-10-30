import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <Script
          defer
          data-domain="sayandey.dev"
          src="https://sitetrack.space/js/plausible.js"
        />
      )}
    </>
  );
}
