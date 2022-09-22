import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h4 className="text-xl md:text-[1.35rem] font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h4>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-600 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 mr-2"
        >
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </svg>

        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2017</Year>
    <ul>
      <Step title="Started College">
        Opted for Computer Science from Raja Peary Mohan College, under Calcutta
        University.
      </Step>
      <Step title="Developed interest in Web Development">
        YouTube introduced me to Web Development. I started off by making simple
        HTML, CSS websites with a keen interest in design.
      </Step>
      <Step title="Completed 12th Standard">
        Completed 10+2 Standard under W.B.C.H.S.E in Science stream. Again from
        Singur Mahamaya High School.
      </Step>
    </ul>
    <Divider />

    <Year>2015</Year>
    <ul>
      <Step title="Completed 10th Standard">
        Completed 10th standard from Singur Mahamaya High School under
        W.B.B.S.E.
      </Step>
      <Step title="Join National Cadet Corps (N.C.C)">
        I always wanted to become a Civil Servant. So, joined N.C.C in my
        school.
      </Step>
    </ul>
    <Divider />

    <Year>1999</Year>
    <ul>
      <Step title="A Developer was Born in India 👶🏼">
        I was born in Kolkata, India. Wish me on 14th November{' '}
        <span className="text-blue-500 font-medium">(Children's Day)</span>
      </Step>
    </ul>
    <span className="h-8" />
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <Year>2022</Year>
      <ul>
        <Step title="Built and Deploy sayandey.dev 🎉">
          Built and Deploy Open-Source{' '}
          <span className="text-blue-500 font-medium">
            <a
              href="https://github.com/sayandey18/sayandey.dev"
              target="__blank"
            >
              Portfolio
            </a>
          </span>{' '}
          with Next.js, Tailwind CSS, Prisma ORM, PlanetScale, Sanity.io, and
          Vercel.
        </Step>
        <Step title="Full-Stack Journey">
          Learning NodeJS, MySQL along with React. The best practices to build
          products and web apps which can scale easily.
        </Step>
        <Step title="Edology 1 Year Journey">
          Completed 1 year and gained experience as Industrial Developer in
          Edology. Contribute to 75+ websites and their technology. It's been a
          great journey for me.
        </Step>
      </ul>
      <Divider />

      <Year>2021</Year>
      <ul>
        <Step title="Learnt Frontend Development">
          Learnt and focus on HTML, CSS and modern JavaScript for responsive and
          modern web app. Picked Bootstrap and TailWind CSS as my primary
          framework.
        </Step>
        <Step title="Joined Edology :)">
          Joined Edology as a Web Developer. Do custom theme development,
          convert the static site to dynamic, and executed tactics to make the
          web faster.
        </Step>
        <Step title="Created COVID-19 Tracking System">
          Build a web app to track latest Coronavirus update vaccination slots
          avavility in their area and city.
        </Step>
      </ul>
      <Divider />

      <Year>2019</Year>
      <ul>
        <Step title="Published Bloggingmetrics">
          <span className="text-blue-500 font-medium">
            <a href="https://bloggingmetrics.com" target="__blank">
              Bloggingmetrics
            </a>
          </span>{' '}
          helps you to learn blogging tips, tricks, strategies, techniques. Help
          you to create dazzling blog content to hyperloop your blog.
        </Step>
        <Step title="Explore .NET Framework">
          Joined G.T.T.I (George Telegraph) to learn object-oriented programming
          like C#. Mostly play with ASP.NET and SQL database.
        </Step>
        <Step title="Internship - TechYuga">
          Got an Internship at TechYuga as a Field Engineer Intern. Where our
          team develop, build, and maintain network architectures.
        </Step>
      </ul>
      <Divider />

      <Year>2018</Year>
      <ul>
        <Step title="Learn Network Structure">
          I attended a computer network architecture course in our city. This is
          a big achievement for me as I got the best student award and learned a
          lot from here.
        </Step>
        <Step title="Introduced to Open Source ⚡️">
          Always love Open Source Software and Open Standards. I got to know
          about Free Software Foundation, Git and GitHub, and Linux systems.
        </Step>
        <Step title="C and C++">
          Started learning logics and basic programming fundamentals with Object
          Oriented Programming.
        </Step>
        <Step title="Started Blogging">
          After lots of research, I bought a domain called fixmyerror.com and
          started my blogging journey. Basically, I write about computer and
          network problem fixing.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
