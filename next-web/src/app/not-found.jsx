import Sad from "../../public/sad.svg"
import Image from "next/image";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

export default function NotFound() {
    return (
        <section className="h-screen w-full">
            <div className="flex justify-center w-[80%] h-screen mx-auto gap-10" id="not-found-section">
                <div className="flex flex-col gap-5 my-auto w-[50%]" id="content-container">
                    <h1 className="text-[50px] font-medium text-[#C25C5C] w-[100%]">PAGE NOT FOUND!</h1>
                    <p className={`text-base font-normal text-[#424b4a] w-[100%] ${workSans.className}`}>The Requested URL Was Not Found!</p>
                    <p className={`text-base font-normal text-[#424b4a] w-[100%] ${workSans.className}`}>The page you are looking is not exist, have been removed, name changed or is temporarily unavailable.</p>
                </div>
            </div>
        </section>
    );
}