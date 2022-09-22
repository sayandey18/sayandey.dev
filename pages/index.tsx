import { Suspense } from 'react';
import Image from 'next/future/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import ProjectCard from 'components/ProjectCard';
import Timeline from 'components/Timeline';
import Slogan from 'components/Slogan';
import Subscribe from '../components/Subscribe';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-[45rem] border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col basis-2/3 justify-start pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
                Sayan Dey
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Developer Experience at{' '}
                <span className="font-semibold">Edology</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                A self taught enthusiastic web developer from Kolkata. Who loves
                modern web technology, web stuff creation, and interactive
                coding layouts.
              </p>
            </div>
            <div className="flex basis-1/3 justify-end w-[100px] sm:w-[170px] mb-8 sm:mb-0">
              <Image
                alt="Sayan Dey"
                height={176}
                width={176}
                src="/avatar.jpg"
                sizes="30vw"
                priority
                className="rounded-full filter grayscale"
              />
            </div>
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Featured Posts
          </h3>

          <div className="flex gap-6 flex-col md:flex-row">
            <BlogPostCard
              title="Loop Through Custom Post Type, With Taxonomy In WordPress"
              slug="wordpress-custom-post-type-loop"
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
            <BlogPostCard
              title="Easy Steps To Add Dynamic Logo In WordPress, With Custom Themes"
              slug="add-dynamic-logo-wordpress"
              gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            />
            <BlogPostCard
              title="Ajax Powered Cart Items Count In WooCommerce"
              slug="ajax-based-woocommerce-cart-count"
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            />
          </div>

          <Link href="/blog">
            <a className="flex mt-10 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
              Read all posts
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </a>
          </Link>

          <span className="h-10" />

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            GitHub Projects
          </h3>

          <ProjectCard />

          <Link href="/projects">
            <a className="flex mt-10 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
              See all projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </a>
          </Link>

          <span className="h-10" />

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Life Journey
          </h3>

          <Timeline />

          <span className="h-10" />

          <Slogan />

          <span className="h-10" />

          <Subscribe />
        </div>
      </Container>
    </Suspense>
  );
}
