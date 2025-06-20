import Image4 from "../../../public/image-4.jpg"
import "./Hero.css"
import Image from "next/image";
import Link from "next/link";

function Hero() {
    return (
        <section className="flex bg-[#C25C5C]" id="hero-section">
            <Image src={Image4} alt="Image 4" className="w-1/2"/>

            <div className="ml-2.5 w-1/2 m-auto" id="sub-hero">
                <h1 className="text-5xl text-white w-[60%] pb-10">Uncover the World of Ceramic Artistry Start Your Journey Here!</h1>
                <Link href="/shop" className="text-base py-[10px] px-[30px] border border-white text-white">SHOP NOW!</Link>
            </div>
        </section>
    );
}

export default Hero;