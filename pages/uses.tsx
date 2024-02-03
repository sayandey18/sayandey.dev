import Container from 'components/Container';

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
          Here's what tech I'm currently using for coding, videos, blogging, and
          music. Most of these have been accumulated over the past few years.
        </p>
        <div className="prose dark:prose-dark w-full">
          <h3 id="computer-office">Computer / Office</h3>
          <ul>
            <li>HP Pavilion EG2035TU Intel Core i5-1240P</li>
            <li>Intel Core i5 12400F Processor</li>
            <li>Asus TUF GeForce GTX 1660 Super</li>
            <li>Acer Nitro 23.8 Inch Gaming Monitor</li>
            <li>Logitech G102 Gaming Mouse</li>
            <li>Portronics Tode One Wireless Mouse</li>
            <li>Cosmic Byte CB-GK-02 Gaming Keyboard</li>
            <li>ANT Esports MK4500 Wireless Mechanical Keyboard</li>
          </ul>
          <h3 id="coding">Coding</h3>
          <ul>
            <li>Editor: VSCode / Android Studio</li>
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
            <li>Skype</li>
            <li>Kite by Zerodha</li>
            <li>Coin by Zerodha</li>
          </ul>
          <h3 id="other-tech">Other Tech</h3>
          <ul>
            <li>IQOO Neo 6</li>
            <li>Realme Watch 2 Pro</li>
            <li>Oppo Enco Buds</li>
          </ul>
        </div>
      </article>
    </Container>
  );
}
