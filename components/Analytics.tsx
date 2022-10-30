import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <Script
          async
          defer
          data-host="https://sitetrack.space"
          data-dnt="false"
          src="https://sitetrack.space/js/script.js"
          id="ZwSg9rf6GA"
        />
      )}
    </>
  );
}
