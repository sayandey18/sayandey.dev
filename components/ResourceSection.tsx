import { FiExternalLink } from 'react-icons/fi';

export default function ResourceSection({ resource }) {
  return (
    <div className="w-full text-gray-800 dark:text-neutral-200 font-medium">
      <h2 className="text-2xl font-bold mb-4">{resource.title}</h2>
      <div className="grid grid-cols-1 gap-4 text-gray-900 sm:grid-cols-2 dark:text-gray-200 w-full">
        {resource.data.map((webtool) => {
          return (
            <div key={webtool.name} className="border border-gray-200 rounded-md px-6 py-5 bg-white shadow-md shadow-gray-200 cursor-pointer transform transition-all hover:scale-[1.01] dark:bg-black-charcoal dark:shadow dark:border-gray-700">
              <a
                href={webtool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1 text-gray-300 hover:text-blue-400"
              >
                {webtool.domain}
                <FiExternalLink />
              </a>
              <h3 className="text-lg font-bold text-left mt-2 text-gray-800 dark:text-gray-200">
                {webtool.name}
              </h3>
              <p className="text-sm font-normal text-gray-700 line-clamp-2 dark:text-gray-200 mt-1">
                {webtool.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
