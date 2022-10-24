import Container from 'components/Container';
import resourcedata from 'contents/ResourcesData';
import ResourceSection from 'components/ResourceSection';

export default function Resources() {
  return (
    <Container
      title="Resources – Sayan Dey"
      description="I have built commercial projects as well as hobby projects, all are included here."
    >
      <div className="flex flex-col justify-center items-start max-w-[45rem] mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Resources
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Helpful websites that I have used over the years have helped me
            designing and developing applications and more.
          </p>
        </div>
        <div className="flex flex-col gap-14 w-full">
          <ResourceSection resource={resourcedata.imagetool} />
          <ResourceSection resource={resourcedata.userinterface} />
          <ResourceSection resource={resourcedata.development} />
        </div>
        <div className="mt-10">
          <p className="text-gray-600 dark:text-gray-400">
            Last Update on{' '}
            <span className="font-semibold">{resourcedata.lastUpdate}</span>
          </p>
        </div>
      </div>
    </Container>
  );
}
