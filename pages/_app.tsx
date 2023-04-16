import 'styles/global.css';

import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { Karla } from '@next/font/google';
import Analytics from 'components/Analytics';

const karla = Karla({ subsets: ['latin'] });

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <main className={karla.className}>
          <Component {...pageProps} />
          <Analytics />
        </main>
      </ThemeProvider>
    </SessionProvider>
  );
}
