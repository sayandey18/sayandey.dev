import Container from 'components/Container';
import devtools from 'contents/UtilitiesData';
import UtilitySection from 'components/UtilitySection';

export default function Utilities() {
  return (
    <Container
      title="Utilities – Sayan Dey"
      description="I have built commercial projects as well as hobby projects, all are included here."
    >
      <div className="flex flex-col justify-center items-start max-w-[45rem] mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Utilities
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            In case you are wondering What tech I use, Here's the list of what
            tech I'm currently using for coding on the daily basis. This list is
            always changing.
          </p>
        </div>
        <div className="flex flex-col gap-14 w-full">
          <UtilitySection utility={devtools.system} />
          <UtilitySection utility={devtools.tools} />
          <UtilitySection utility={devtools.software} />
        </div>
        <div className="mt-10">
          <p className="text-gray-600 dark:text-gray-400">
            Last Update on{' '}
            <span className="font-semibold">{devtools.lastUpdate}</span>
          </p>
        </div>
      </div>
    </Container>
  );
}
