// Related Product Section
import Image7 from "../../../public/image-7.jpg"
import Rates from "../rates/Rates";
import Image from "next/image";
import "./Related.css"
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function Related() {
    return (
        <section className="mt-10 w-[80%] mx-auto">
            <h2 className="text-[48px] font-medium text-[#C25C5C]" id="related-product">Related Product</h2>

            <div className="flex flex-wrap justify-between mt-10">
                <div className="w-[30%] h-fit flex flex-col gap-2 mb-10 product-container">
                    <Image src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <p className={`text-xs category font-normal ${workSans.className} text-[#7A7A7A]`}>Ceramic</p>
                    <h4 className="text-[22px] product font-medium text-[#C25C5C]">Ceramic Cup</h4>
                    <Rates/>
                    <p className={`text-lg price font-bold ${workSans.className} text-[#424b4a]`}><span className="line-through text-lg price text-[#a0a5a4]">$100</span> $99</p>
                </div>

                <div className="w-[30%] h-fit flex flex-col gap-2 mb-10 product-container">
                    <Image src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <p className={`text-xs category font-normal ${workSans.className} text-[#7A7A7A]`}>Ceramic</p>
                    <h4 className="text-[22px] product font-medium text-[#C25C5C]">Ceramic Cup</h4>
                    <Rates/>
                    <p className={`text-lg price font-bold ${workSans.className} text-[#424b4a]`}><span className="line-through text-lg price text-[#a0a5a4]">$100</span> $99</p>
                </div>

                <div className="w-[30%] h-fit flex flex-col gap-2 mb-10 product-container">
                    <Image src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <p className={`text-xs category font-normal ${workSans.className} text-[#7A7A7A]`}>Ceramic</p>
                    <h4 className="text-[22px] product font-medium text-[#C25C5C]">Ceramic Cup</h4>
                    <Rates/>
                    <p className={`text-lg price font-bold ${workSans.className} text-[#424b4a]`}><span className="line-through text-lg price text-[#a0a5a4]">$100</span> $99</p>
                </div>

                <div className="w-[30%] h-fit flex flex-col gap-2 mb-10 product-container">
                    <Image src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <p className={`text-xs category font-normal ${workSans.className} text-[#7A7A7A]`}>Ceramic</p>
                    <h4 className="text-[22px] product font-medium text-[#C25C5C]">Ceramic Cup</h4>
                    <Rates/>
                    <p className={`text-lg price font-bold ${workSans.className} text-[#424b4a]`}><span className="line-through text-lg price text-[#a0a5a4]">$100</span> $99</p>
                </div>

                <div className="w-[30%] h-fit flex flex-col gap-2 mb-10 product-container">
                    <Image src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <p className={`text-xs category font-normal ${workSans.className} text-[#7A7A7A]`}>Ceramic</p>
                    <h4 className="text-[22px] product font-medium text-[#C25C5C]">Ceramic Cup</h4>
                    <Rates/>
                    <p className={`text-lg price font-bold ${workSans.className} text-[#424b4a]`}><span className="line-through text-lg price text-[#a0a5a4]">$100</span> $99</p>
                </div>

                <div className="w-[30%] h-fit flex flex-col gap-2 mb-10 product-container">
                    <Image src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <p className={`text-xs category font-normal ${workSans.className} text-[#7A7A7A]`}>Ceramic</p>
                    <h4 className="text-[22px] product font-medium text-[#C25C5C]">Ceramic Cup</h4>
                    <Rates/>
                    <p className={`text-lg price font-bold ${workSans.className} text-[#424b4a]`}><span className="line-through text-lg price text-[#a0a5a4]">$100</span> $99</p>
                </div>
            </div>
        </section>
    );
};

export default Related;