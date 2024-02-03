import Link from 'next/link';
import NowPlaying from 'components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-400 hover:text-gray-500 transition"
    target="_blank"
    rel="noopener noreferrer nofollow"
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
          <Link
            href="/"
            className="text-gray-400 hover:text-gray-500 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-400 hover:text-gray-500 transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-400 hover:text-gray-500 transition"
          >
            Contact
          </Link>
          <Link
            href="/projects"
            className="text-gray-400 hover:text-gray-500 transition"
          >
            Projects
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <Link
            href="/uses"
            className="text-gray-400 hover:text-gray-500 transition"
          >
            Uses
          </Link>
          <Link
            href="/guestbook"
            className="text-gray-400 hover:text-gray-500 transition"
          >
            Guestbook
          </Link>
          <Link
            href="/snippets"
            className="text-gray-400 hover:text-gray-500 transition"
          >
            Snippets
          </Link>
          <Link
            href="/newsletter"
            className="text-gray-400 hover:text-gray-500 transition"
          >
            Newsletter
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <Link
            href="/blog"
            className="text-gray-400 hover:text-gray-500 transition"
          >
            Blogs
          </Link>
          <Link
            href="/certificates"
            className="text-gray-400 hover:text-gray-500 transition"
          >
            Certificates
          </Link>
          <Link
            href="/utilities"
            className="text-gray-400 hover:text-gray-500 transition"
          >
            Utilities
          </Link>
          <Link
            href="/sitemap.xml"
            className="text-gray-400 hover:text-gray-500 transition"
            target="_blank"
          >
            Sitemap
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/sayandey18">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/sayandey18/">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://twitter.com/mrsayandey">
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
