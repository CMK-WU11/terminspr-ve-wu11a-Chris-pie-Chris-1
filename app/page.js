import Image from "next/image";
// import WelcomeBackground from '/public/images/welcome - background.jpg'
// import WelcomeBackgroundCenter from '/public/images/welcome - center'
import Link from "next/link";

export default function Homepage() {

  return (
    <div className="">
      <div>
        {/* Welcome background */}
        <img src='/images/welcome - background.jpg' />
        <h1>Believe Yourself</h1>
        <h3>Train like a pro</h3>
      </div>
      <div>
        {/* welcome background center */}
        <img src='/images/welcome - center' />
          <Link
            href="/Homepage"
            >Start Training
          </Link>

      </div>
    </div>
  );
}
