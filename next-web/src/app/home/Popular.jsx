import Image7 from "../../../public/image-7.jpg"
import Rates from "../rates/Rates"
import "./Popular.css"
import Image from "next/image";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function Popular({sub_title, title}) {
    return (
        <section className="mt-10 flex flex-col gap-5 w-[80%] mx-auto">
            <p className={`text-sm font-medium text-[#C25C5C] ${workSans.className}`} id="most-popular">{sub_title}</p>
            <h1 className="text-5xl w-[80%] font-medium text-[#C25C5C]" id="popular-title">{title}</h1>

            {/* Category Display */}
            <div className="flex flex-wrap justify-between mt-10">
                <div className="w-[30%] h-fit flex flex-col gap-2 mb-10 product-container">
                    <Image src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <div className="mt-3">
                        <p className={`text-xs category font-normal ${workSans.className} text-[#7A7A7A]`}>Ceramic</p>
                        <h4 className="text-[22px] product font-medium text-[#C25C5C]">Ceramic Cup</h4>
                    </div>
                    <Rates readOnly/>
                    <p className={`text-lg price font-bold ${workSans.className} text-[#424b4a]`}><span className="line-through text-lg price text-[#a0a5a4]">$100</span> $99</p>
                </div>

                <div className="w-[30%] h-fit flex flex-col gap-2 mb-10 product-container">
                    <Image src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <div className="mt-3">
                        <p className={`text-xs category font-normal ${workSans.className} text-[#7A7A7A]`}>Ceramic</p>
                        <h4 className="text-[22px] product font-medium text-[#C25C5C]">Ceramic Cup</h4>
                    </div>
                    <Rates readOnly/>
                    <p className={`text-lg price font-bold ${workSans.className} text-[#424b4a]`}><span className="line-through text-lg price text-[#a0a5a4]">$100</span> $99</p>
                </div>

                <div className="w-[30%] h-fit flex flex-col gap-2 mb-10 product-container">
                    <Image src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <div className="mt-3">
                        <p className={`text-xs category font-normal ${workSans.className} text-[#7A7A7A]`}>Ceramic</p>
                        <h4 className="text-[22px] product font-medium text-[#C25C5C]">Ceramic Cup</h4>
                    </div>
                    <Rates readOnly/>
                    <p className={`text-lg price font-bold ${workSans.className} text-[#424b4a]`}><span className="line-through text-lg price text-[#a0a5a4]">$100</span> $99</p>
                </div>

                <div className="w-[30%] h-fit flex flex-col gap-2 mb-10 product-container">
                    <Image src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <div className="mt-3">
                        <p className={`text-xs category font-normal ${workSans.className} text-[#7A7A7A]`}>Ceramic</p>
                        <h4 className="text-[22px] product font-medium text-[#C25C5C]">Ceramic Cup</h4>
                    </div>
                    <Rates readOnly/>
                    <p className={`text-lg price font-bold ${workSans.className} text-[#424b4a]`}><span className="line-through text-lg price text-[#a0a5a4]">$100</span> $99</p>
                </div>

                <div className="w-[30%] h-fit flex flex-col gap-2 mb-10 product-container">
                    <Image src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <div className="mt-3">
                        <p className={`text-xs category font-normal ${workSans.className} text-[#7A7A7A]`}>Ceramic</p>
                        <h4 className="text-[22px] product font-medium text-[#C25C5C]">Ceramic Cup</h4>
                    </div>
                    <Rates readOnly/>
                    <p className={`text-lg price font-bold ${workSans.className} text-[#424b4a]`}><span className="line-through text-lg price text-[#a0a5a4]">$100</span> $99</p>
                </div>

                <div className="w-[30%] h-fit flex flex-col gap-2 mb-10 product-container">
                    <Image src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <div className="mt-3">
                        <p className={`text-xs category font-normal ${workSans.className} text-[#7A7A7A]`}>Ceramic</p>
                        <h4 className="text-[22px] product font-medium text-[#C25C5C]">Ceramic Cup</h4>
                    </div>
                    <Rates readOnly />
                    <p className={`text-lg price font-bold ${workSans.className} text-[#424b4a]`}><span className="line-through text-lg price text-[#a0a5a4]">$100</span> $99</p>
                </div>
            </div>
        </section>
    );
}

export default Popular;