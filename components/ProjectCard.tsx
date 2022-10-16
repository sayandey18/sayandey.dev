import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import type { Repositories } from 'lib/types';
import ProjectError from './ProjectError';
import ProjectLoading from './ProjectLoading';
import { BiHomeAlt, BiGitBranch } from 'react-icons/bi';

export default function ProjectCard() {
  const { data, error } = useSWR<Repositories>(
    `/api/repos?per_page=10`,
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
          className="item flex flex-wrap transform hover:scale-[1.01] transition-all items-center rounded-lg text-gray-800 dark:text-gray-200 bg-white dark:bg-black-charcoal shadow-3xl p-6 md:h-32 gap-y-4 border-dashed border border-neutral-200 dark:border-neutral-700 w-full"
        >
          <div className="flex justify-center basis-full md:basis-1/5">
            <p className="font-bold sm:font-semibold">{repo.name}</p>
          </div>

          <div className="flex justify-center basis-full md:basis-2/5">
            <p className="text-center line-clamp-2">{repo.description}</p>
          </div>

          <div className="flex justify-center basis-full md:basis-1/5">
            {repo.homepage == '' && repo.language == undefined && (
              <p>Markdown</p>
            )}
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
                <BiHomeAlt className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              </a>
            )}

            <a
              className="bg-gray-200 rounded-md dark:border-gray-600 text-gray-600 dark:text-gray-300 dark:bg-gray-600 p-[0.35rem]"
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
            >
              <BiGitBranch className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
