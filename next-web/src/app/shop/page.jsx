import Header from "../header/Header";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import Rates from "../rates/Rates"
import Image7 from "../../../public/image-7.jpg"
import Pagination from "../pagination/Pagination";
import Search_Bar from "../searches/Searches"
import "./Shop.css"
import Image from "next/image";

function Shop() {
    return (
        <>
            <Header />

            <section className="w-[80%] mx-auto pt-10">
                <div className="flex justify-between pb-5 border-b border-gray-300 border-opacity-50">
                    <h2 className="text-3xl">Shop</h2>
                    {/* <div className="flex">
                        <input type='text' className="bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50"/>
                        <Image src={Search} alt="Search Icon" className="w-[24px]" />
                    </div> */}
                </div>

                <div className="pt-10 flex flex-col gap-5">
                    <div className="flex justify-between" id="search-display">
                        <Search_Bar placeholder="Search" />
                        <select className=" px-3 h-[50px] border border-gray-300 rounded-md text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Product Name (A-Z)</option>
                            <option>Product Name (Z-A)</option>
                            <option>Released Date (Ascending)</option>
                            <option>Released Date (Descending)</option>
                        </select>
                    </div>
                    <p className="text-base">Showing all 11 results</p>
                </div>
            </section>

            <section className="flex flex-wrap justify-between w-[80%] mx-auto pt-10">
                <div className="w-[30%] h-fit flex flex-col gap-2 mb-10 product-container">
                    <Image src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <p className="text-xs category">Ceramic</p>
                    <h4 className="text-[22px] product">Ceramic Cup</h4>
                    <Rates/>
                    <p className="text-lg price"><span className="line-through text-lg price">$100</span> $99</p>
                </div>

                <div className="w-[30%] h-fit flex flex-col gap-2 mb-10 product-container">
                    <Image src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <p className="text-xs category">Ceramic</p>
                    <h4 className="text-[22px] product">Ceramic Cup</h4>
                    <Rates/>
                    <p className="text-lg price"><span className="line-through text-lg price">$100</span> $99</p>
                </div>

                <div className="w-[30%] h-fit flex flex-col gap-2 mb-10 product-container">
                    <Image src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <p className="text-xs category">Ceramic</p>
                    <h4 className="text-[22px] product">Ceramic Cup</h4>
                    <Rates/>
                    <p className="text-lg price"><span className="line-through text-lg price">$100</span> $99</p>
                </div>

                <div className="w-[30%] h-fit flex flex-col gap-2 mb-10 product-container">
                    <Image src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <p className="text-xs category">Ceramic</p>
                    <h4 className="text-[22px] product">Ceramic Cup</h4>
                    <Rates/>
                    <p className="text-lg price"><span className="line-through text-lg price">$100</span> $99</p>
                </div>

                <div className="w-[30%] h-fit flex flex-col gap-2 mb-10 product-container">
                    <Image src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <p className="text-xs category">Ceramic</p>
                    <h4 className="text-[22px] product">Ceramic Cup</h4>
                    <Rates/>
                    <p className="text-lg price"><span className="line-through text-lg price">$100</span> $99</p>
                </div>

                <div className="w-[30%] h-fit flex flex-col gap-2 mb-10 product-container">
                    <Image src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <p className="text-xs">Ceramic</p>
                    <h4 className="text-[22px] product">Ceramic Cup</h4>
                    <Rates/>
                    <p className="text-lg price"><span className="line-through text-lg price">$100</span> $99</p>
                </div>
            </section>

            <Pagination className="w-fit mx-auto mt-10 mb-10"/>
            
            <Footer />
        </>
    );
}

export default Shop;