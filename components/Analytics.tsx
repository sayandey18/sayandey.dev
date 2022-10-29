import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <Script
          defer
          src="https://analytics.sayandey.dev/ingress/115071f0-bcfb-4d71-a663-b1fba956a4c5/script.js"
        />
      )}
    </>
  );
}
