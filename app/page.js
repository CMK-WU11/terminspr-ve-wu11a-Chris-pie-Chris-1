import Image from "next/image";
import WelcomeBackground from '../public/welcome - background.jpg'
import WelcomeBackgroundCenter from '../public/welcome - center.jpg'
import Link from "next/link";


export default function Homepage() {

  return (
    <div>
      <div className="relative">
        <h1 className="text-white absolute ml-5 text-3xl bottom-0 left-0">Believe Yourself</h1>
        <h3 className="text-white absolute ml-5 text-3xl bottom-6 left-0">Train like a pro</h3>
        <Image 
          src={WelcomeBackground}
          alt="Welcome Background"
          objectFit="cover"
          quality={100}
        />
        {/* Welcome background */}
        {/* Kig på styling efter */}
      </div>
      <div className="relative">
        {/* Taget fra tidligere opgave (Din mægler) */}
        <Image 
          src={WelcomeBackgroundCenter}
          alt="Welcome Background Center"
          objectFit="cover"
          quality={100}

        />
          <Link
            className="absolute"
            href="/Homepage"
            >Start Training
          </Link>

      </div>
    </div>
  );
}
