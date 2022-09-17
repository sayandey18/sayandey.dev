import Container from 'components/Container';
import Image from 'next/future/image';

export default function Uses() {
  return (
    <Container
      title="Uses – Sayan Dey"
      description="Here's what tech I'm currently using for coding, videos, and music."
    >
      <article className="flex flex-col justify-center items-start max-w-[45rem] mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          My Gear
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          Here's what tech I'm currently using for coding, videos, blogging, 
          and music. Most of these have been accumulated over the past few years.
        </p>
        {/* <Image
          className="rounded-lg"
          alt={`My computer setup`}
          src={`/static/images/setup.png`}
          width={2164 / 2}
          height={1546 / 2}
          priority
        /> */}
        <div className="prose dark:prose-dark w-full">
          <h3 id="computer-office">Computer / Office</h3>
          <ul>
            <li>Intel Core i5 12400F Processor</li>
            <li>Asus TUF GeForce GTX 1660 Super</li>
            <li>Acer Nitro 23.8&quot; Gaming Monitor</li>
            <li>Cosmic Byte CB-GK-02 Gaming Keyboard</li>
            <li>Logitech G102 Gaming Mouse</li>
          </ul>
          <h3 id="coding">Coding</h3>
          <ul>
            <li>
              Editor: VSCode / Android Studio
            </li>
            <li>Theme: One Dark Pro</li>
            <li>Terminal: Hyper / Windows PowerShell</li>
          </ul>
          <h3 id="software">Software</h3>
          <ul>
            <li>1Password</li>
            <li>Spotify</li>
            <li>Postman</li>
            <li>Canva</li>
            <li>Grammarly</li>
            <li>PhonePe</li>
            <li>Groww</li>
            <li>CRED</li>
          </ul>
          <h3 id="other-tech">Other Tech</h3>
          <ul>
            <li>IQOO Neo 6</li>
            <li>Realme Watch 2 Pro</li>
            <li>DEFY GravityZ</li>
          </ul>
        </div>
      </article>
    </Container>
  );
}
