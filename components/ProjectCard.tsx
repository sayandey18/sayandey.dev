import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import type { Repositories } from 'lib/types';
import ProjectError from './ProjectError';
import ProjectLoading from './ProjectLoading';

export default function ProjectCard() {
  const { data, error } = useSWR<Repositories>(
    `/api/repos?per_page=3`,
    fetcher
  );

  if (error) {
    return <ProjectError />;
  }
  if (!data) {
    return <ProjectLoading />;
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-y-5 text-gray-900 w-full">
      {data.repos.slice(0, 3).map((repo, index) => (
        <div
          key={index}
          id={repo.name}
          className="item flex flex-wrap items-center rounded-lg text-gray-800 dark:text-gray-200 bg-white dark:bg-black-charcoal shadow-3xl p-6 md:h-32 gap-y-4 w-full"
        >
          <div className="flex justify-center basis-full md:basis-1/5">
            <p className="font-bold sm:font-semibold">{repo.name}</p>
          </div>

          <div className="flex justify-center basis-full md:basis-2/5">
            <p className="text-center">{repo.description}</p>
          </div>

          <div className="flex justify-center basis-full md:basis-1/5">
            <p>{repo.language}</p>
          </div>

          <div className="flex flex-row justify-center basis-full md:basis-1/5 gap-x-4">
            {repo.homepage !== '' && repo.homepage != undefined && (
              <a
                className="bg-gray-200 rounded-md dark:border-gray-600 text-gray-600 dark:text-gray-300 dark:bg-gray-600 p-[0.35rem]"
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="homepage"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </a>
            )}

            <a
              className="bg-gray-200 rounded-md dark:border-gray-600 text-gray-600 dark:text-gray-300 dark:bg-gray-600 p-[0.35rem]"
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
