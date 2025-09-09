import Image5 from "../../../public/image-5.jpg"
import Image6 from "../../../public/image-6.jpg"
import "./Introduction.css"
import Image from "next/image";
import Link from "next/link";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function Introduction() {
    return (
        <section className="flex flex-col w-[80%] gap-5 mt-10 ml-[10%]" id="introduction-section">
            <p className={`text-sm w-fit text-[#C25C5C] ${workSans.className} font-medium`}>About Duc Loi</p>
            <h2 className="text-5xl w-[80%] text-[#C25C5C] font-medium">The versatility of ceramics is what makes them truly remarkable, with their presence in various forms such as stoneware and porcelain.</h2>

            <div className="flex w-[100%] gap-5" id="image-intro">
                <Image src={Image5} alt="Image 5" className="w-1/2"/>

                <div className="flex flex-col justify-end gap-5 w-1/2" id="right-intro">
                    <Image src={Image6} alt="Image 6"/>
                    <h3 className="text-2xl text-[#C25C5C] font-medium">Welcome to Duc Loi, where passion meets craftsmanship to bring you a world of timeless beauty and creativity.</h3>
                    <p className={`text-base ${workSans.className} font-normal text-[#424b4a]`}>Our journey is steeped in the art of ceramics, where each piece tells a unique story. Get to know the heart and soul behind our store.</p>
                    <Link href="/about" className={`text-base w-fit py-[10px] px-[30px] border banner-p text-[#C25C5C] border-[#C25C5C] font-medium ${workSans.className} hover:bg-[#C25C5C] hover:text-white delay-75 duration-300`}>READ MORE!</Link>
                </div>
            </div>
        </section>
    );
}

export default Introduction;