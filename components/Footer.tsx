import Link from 'next/link';

import NowPlaying from 'components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-400 hover:text-gray-500 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-[45rem] mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <NowPlaying />
      <div className="w-full max-w-[45rem] grid grid-cols-1 gap-4 pb-16 sm:grid-cols-4">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-400 hover:text-gray-500 transition">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-400 hover:text-gray-500 transition">
              About
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-gray-400 hover:text-gray-500 transition">
              Projects
            </a>
          </Link>
          <Link href="/utilities">
            <a className="text-gray-400 hover:text-gray-500 transition">
              Utilities
            </a>
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <Link href="/uses">
            <a className="text-gray-400 hover:text-gray-500 transition">Uses</a>
          </Link>
          <Link href="/guestbook">
            <a className="text-gray-400 hover:text-gray-500 transition">
              Guestbook
            </a>
          </Link>
          <Link href="/snippets">
            <a className="text-gray-400 hover:text-gray-500 transition">
              Snippets
            </a>
          </Link>
          <Link href="/newsletter">
            <a className="text-gray-400 hover:text-gray-500 transition">
              Newsletter
            </a>
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <Link href="/tweets">
            <a className="text-gray-400 hover:text-gray-500 transition">
              Tweets
            </a>
          </Link>
          <Link href="/feed.xml">
            <a className="text-gray-400 hover:text-gray-500 transition">Feed</a>
          </Link>
          <Link href="/sitemap.xml">
            <a className="text-gray-400 hover:text-gray-500 transition">
              Sitemap
            </a>
          </Link>
          <ExternalLink href="https://analytics.sayandey.dev/share/heORd4RV/Sayan">
            Analytics
          </ExternalLink>
        </div>

        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/sayandey18">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/iam-sayandey">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://twitter.com/wpblogmetrics">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://www.instagram.com/iam.sayandey/">
            Instagram
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
