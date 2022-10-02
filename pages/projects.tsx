import { Suspense } from 'react';
import Image from 'next/future/image';
import Link from 'next/link';

import Container from 'components/Container';
import ProjectCard from 'components/ProjectCard';

export default function Projects() {
  return (
    <Suspense>
      <Container
        title="Projets – Sayan Dey"
        description="I have built commercial projects as well as hobby projects, all are included here."
      >
        <div className="flex flex-col justify-center items-start max-w-[45rem] mx-auto mb-16">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            GitHub Projets
          </h1>
          <div className="mb-8">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I have built commercial projects as well as hobby projects. All
              projects are included here. I write about technology, blogging,
              wordpress etc. Checkout my{' '}
              <Link href="/blog">
                <a className="text-blue-600 font-semibold underline">blog</a>
              </Link>{' '}
              while you're here.
            </p>
          </div>

          <div className="w-full mb-8">
            <a
              href="https://github.com/sayandey18"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                alt="sayan github graph"
                className="border-4 border-gray-200 dark:border-white"
                width={750}
                height={300}
                unoptimized
                priority
                src={`https://activity-graph.herokuapp.com/graph?username=sayandey18&theme=react`}
              />
            </a>
          </div>
          <ProjectCard />
        </div>
      </Container>
    </Suspense>
  );
}
