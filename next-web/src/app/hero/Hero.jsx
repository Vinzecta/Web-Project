import Image4 from "../../../public/image-4.jpg"
import "./Hero.css"
import Image from "next/image";
import Link from "next/link";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function Hero() {
    return (
        <section className="flex gap-5 bg-[#C25C5C]" id="hero-section">
            <Image src={Image4} alt="Image 4" className="w-1/2"/>

            <div className="ml-2.5 w-1/2 m-auto" id="sub-hero">
                <h1 className="text-5xl text-white w-[60%] pb-10 font-medium" id="hero-content">Uncover the World of Ceramic Artistry Start Your Journey Here!</h1>
                <Link href="/shop" className={`text-base text-white w-fit py-[10px] px-[30px] border border-white banner-p ${workSans.className} font-medium hover:bg-white hover:text-[#C25C5C] delay-75 duration-300`}>SHOP NOW!</Link>
            </div>
        </section>
    );
}

export default Hero;