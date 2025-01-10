import Image from "next/image";
import WelcomeBackground from '../public/welcome - background.jpg'
import WelcomeBackgroundCenter from '../public/welcome - center.jpg'
import Link from "next/link";


export default function Homepage() {

  return (
    <div>
      <div className="relative h-full">
        <Image 
          src={WelcomeBackground}
          alt="Welcome Background"
          objectFit="cover"
          quality={100}
        />
        {/* Welcome background */}
        {/* Kig på styling efter */}
        <h1>Believe Yourself</h1>
        <h3>Train like a pro</h3>
      </div>
      <div className="relative h-full">
        {/* Taget fra tidligere opgave (Din mægler) */}
        <Image 
          src={WelcomeBackgroundCenter}
          alt="Welcome Background Center"
          objectFit="cover"
          quality={100}

        />
          <Link 
            href="/Homepage"
            >Start Training
          </Link>

      </div>
    </div>
  );
}
