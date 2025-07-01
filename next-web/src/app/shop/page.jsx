import Header from "../header/Header";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import Rates from "../rates/Rates"
import Image7 from "../../../public/image-7.jpg"
import Pagination from "../pagination/Pagination";
import Search_Bar from "../searches/Searches"
import "./Shop.css"
import Image from "next/image";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function Shop() {
    return (
        <>
            <Header />

            <section className="w-[80%] mx-auto pt-10">
                <div className="flex justify-between pb-5 border-b border-gray-300 border-opacity-50">
                    <h2 className="text-3xl font-semibold text-[#C25C5C]">Shop</h2>
                    {/* <div className="flex">
                        <input type='text' className="bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50"/>
                        <Image src={Search} alt="Search Icon" className="w-[24px]" />
                    </div> */}
                </div>

                <div className="pt-10 flex flex-col gap-5">
                    <div className="flex justify-between" id="search-display">
                        <Search_Bar placeholder="Search" />
                        <select className={`px-3 h-[50px] border border-gray-300 rounded-md text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${workSans.className} text-[#424b4a]`}>
                            <option>Product Name (A-Z)</option>
                            <option>Product Name (Z-A)</option>
                            <option>Released Date (Ascending)</option>
                            <option>Released Date (Descending)</option>
                        </select>
                    </div>
                    <p className={`text-base ${workSans.className} font-normal text-[#424b4a]`}>Showing all 11 results</p>
                </div>
            </section>

            <section className="flex flex-wrap justify-between w-[80%] mx-auto pt-10">
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
            </section>

            <Pagination className="w-fit mx-auto mt-10 mb-10"/>
            
            <Footer />
        </>
    );
}

export default Shop;