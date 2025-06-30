import "./Banner.css"
import Image from "next/image";
import Link from "next/link";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function Banner ({welcome, title, content, image, button, navigation}) {
    return (
        <section className="bg-[#C25C5C] flex justify-around py-[2%]" id="banner-section">
            <div className="w-1/2 my-auto flex flex-col gap-5 relative left-15" id="banner-left">
                <p className={`text-sm text-white banner-p ${workSans.className} font-medium`}>{welcome}</p>
                <h1 className="text-6xl text-white w-[50%] font-medium" id="banner-h1">{title}</h1>
                <p className="text-2xl text-white banner-p font-medium">{content}</p>
                {button ? <Link href={navigation} className={`text-base text-white w-fit py-[10px] px-[30px] border border-white banner-p ${workSans.className} font-medium hover:bg-white hover:text-[#C25C5C] delay-75 duration-300`} id="banner-button">{button}</Link> : undefined}
            </div>

            <div className="w-fit relative right-14" id="banner-right">
                <Image src={image} alt='Banner Image' className="m-auto rounded-lg w-100"/>
            </div>
        </section>
    );
}

export default Banner;