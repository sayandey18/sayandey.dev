import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/Container';
import avatar from 'public/avatar.jpg';
import avatarBW from 'public/avatar-bw.jpg';

export default function About() {
  return (
    <Container title="About – Sayan Dey">
      <div className="flex flex-col justify-center items-start max-w-[45rem] mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Instagram:{' '}
              <a href="https://www.instagram.com/iam.sayandey">@iam.sayandey</a>
            </li>
            <li>
              Facebook:{' '}
              <a href="https://www.facebook.com/sayan.dey9239">
                @sayan.dey9239
              </a>
            </li>
            <li>
              GitHub: <a href="https://github.com/sayandey18">@sayandey18</a>
            </li>
            <li>
              Website:{' '}
              <Link href="https://sayandey.dev">https://sayandey.dev</Link>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/sayandey18/">
                @sayandey18
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>
            Sayan Dey is the Web Developer at{' '}
            <span className="font-semibold text-blue-500">Matrix Media</span>
          </p>

          <h3>Long, Description</h3>
          <p>
            I'm Sayan Dey, a self-taught passionate Web Developer from Kolkata,
            India. Currently working at Matrix Media as Web Developer. I've been
            building stuff on the web that are responsive, fast, easy to use,
            and built with best practices. The main area of my expertise is
            building small and medium web apps, custom plugins, features,
            animations, and interactive coding layouts.
          </p>

          <h3>Short, Description</h3>
          <p>
            Hey, I'm Sayan. I'm the Sr. Web Developer at Matrix Media, where my team
            helps businesses build the web faster.
          </p>

          <h3>Education</h3>
          <p>
            Sayan Dey graduated from Indira Gandhi National Open University with
            a B.Sc in Computer Science.
          </p>

          <h2>Headshots</h2>
          <div className="flex space-x-8">
            <a href="/avatar.jpg">
              <Image
                alt="Sayan Dey headshot"
                width={400}
                quality={100}
                src={avatar}
                className="rounded-md"
              />
            </a>
            <a href="/avatar-bw.jpg">
              <Image
                alt="Sayan Dey headshot"
                width={400}
                quality={100}
                src={avatarBW}
                className="rounded-md"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
