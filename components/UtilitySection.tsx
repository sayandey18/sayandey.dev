import Link from 'next/link';

export default function UtilitySection({ utility }) {
  return (
    <div className="w-full text-gray-800 dark:text-neutral-200 font-medium">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">{utility.title}</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 mt-5">
        {utility.data.map((tool) => {
          return (
            <Link href={tool.link} key={tool.name} passHref>
              <a
                title={tool.name + ' - ' + tool.description}
                rel="noopener noreferrer"
                target="_blank"
                className="relative flex flex-col gap-3 items-center justify-center bg-white dark:bg-black-charcoal shadow dark:shadow-md p-[2.35rem] border border-transparent hover:border-gray-200 dark:hover:border-neutral-600 rounded-md transition-all lg:hover:scale-125 active:scale-90 hover:z-10 hover:shadow-lg hover:origin-center text-gray-600 hover:text-gray-300 dark:text-gray-300 dark:hover:text-white"
              >
                <tool.icon className="h-8 w-8" />

                <p className="absolute bottom-3 text-[10px] select-none">
                  {tool.name}
                </p>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
