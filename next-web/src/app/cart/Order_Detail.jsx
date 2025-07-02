import Counter from "../counter/Counter";
import Image7 from "../../../public/image-7.jpg";
import Image from "next/image";
import Cancel from "../../../public/cancel.svg"
import Cart from "../../../public/cart.svg"
import "./Order_Detail.css"
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function Order_Detail() {
    return (
        <>
            <section className="w-[80%] mx-auto mt-10" id="big-screen-section">
                <div className="flex gap-5 pb-5 border-b">
                    <Image src={Cart} alt="Cart" className="w-[30px]" />
                    <h1 className="text-[32px] text-[#C25C5C] font-medium">Cart</h1>
                </div>

                <div className="flex w-[100%] bg-[#f8f4f4] border border-gray-300 border-opacity-50 mt-10">
                    <div className="w-[50px] p-3">&nbsp;</div>
                    <div className="w-[80px] p-3">&nbsp;</div>
                    <div className={`flex-1 text-center p-3 ${workSans.className} font-bold text-[#424b4a]`}>Product</div>
                    <div className={`flex-1 text-center p-3 ${workSans.className} font-bold text-[#424b4a]`}>Price</div>
                    <div className={`flex-1 text-center p-3 ${workSans.className} font-bold text-[#424b4a]`}>Quantity</div>
                    <div className={`flex-1 text-center p-3 ${workSans.className} font-bold text-[#424b4a]`}>Subtotal</div>
                </div>

                <div className="flex w-[100%] border-b border-l border-r border-gray-300 border-opacity-50">
                    <div className="w-[50px] p-3 my-auto"><Image src={Cancel} alt="Cancel" className="w-[20px]"/></div>
                    <div className="w-[80px] p-3"><Image src={Image7} alt="Image7" className="w-[80px]" /></div>
                    <div className={`flex-1 p-3 text-center my-auto ${workSans.className} font-medium text-[#C25C5C]`}>Ceramic Plant Plot</div>
                    <div className={`flex-1 p-3 text-center my-auto ${workSans.className} font-normal text-[#424b4a]`}>$100</div>
                    <div className="flex-1 p-3 my-auto"><Counter className="flex items-center w-fit h-fit mx-auto"/></div>
                    <div className={`flex-1 p-3 text-center my-auto ${workSans.className} font-normal text-[#424b4a]`}>$100</div>
                </div>

                <div className="flex w-[100%] border-b border-l border-r border-gray-300 border-opacity-50">
                    <div className="w-[50px] p-3 my-auto"><Image src={Cancel} alt="Cancel" className="w-[20px]"/></div>
                    <div className="w-[80px] p-3"><Image src={Image7} alt="Image7" className="w-[80px]" /></div>
                    <div className={`flex-1 p-3 text-center my-auto ${workSans.className} font-medium text-[#C25C5C]`}>Ceramic Plant Pot</div>
                    <div className={`flex-1 p-3 text-center my-auto ${workSans.className} font-normal text-[#424b4a]`}>$100</div>
                    <div className="flex-1 p-3 my-auto"><Counter className="flex items-center w-fit h-fit mx-auto"/></div>
                    <div className={`flex-1 p-3 text-center my-auto ${workSans.className} font-normal text-[#424b4a]`}>$100</div>
                </div>

                <div className="flex w-[100%] border-b border-l border-r border-gray-300 border-opacity-50">
                    <div className="w-[50px] p-3 my-auto"><Image src={Cancel} alt="Cancel" className="w-[20px]"/></div>
                    <div className="w-[80px] p-3"><Image src={Image7} alt="Image7" className="w-[80px]" /></div>
                    <div className={`flex-1 p-3 text-center my-auto ${workSans.className} font-medium text-[#C25C5C]`}>Ceramic Plant Pot</div>
                    <div className={`flex-1 p-3 text-center my-auto ${workSans.className} font-normal text-[#424b4a]`}>$100</div>
                    <div className="flex-1 p-3 my-auto"><Counter className="flex items-center w-fit h-fit mx-auto"/></div>
                    <div className={`flex-1 p-3 text-center my-auto ${workSans.className} font-normal text-[#424b4a]`}>$100</div>
                </div>
            </section>

            {/* Mobile responsive */}
            <section className="w-[80%] mx-auto mt-10 hidden" id="small-screen-section">
                <div className="w-[100%] mb-10">
                    <div className="w-[100%] border border-gray-300 border-opacity-50 p-3">
                        <Image src={Cancel} alt="Cancel" className="w-[20px] ml-auto" />
                    </div>

                    <div className="w-[100%] border-l border-r border-b border-gray-300 border-opacity-50 p-3">
                        <Image src={Image7} alt="Image7" className="w-[100px] mx-auto" />
                    </div>

                    <div className="flex flex-col border-l border-r border-b border-gray-300 border-opacity-50">
                        <div className="flex justify-between p-3 border-b border-gray-300 border-opacity-50">
                            <p className={`text-[#424b4a] font-bold ${workSans.className}`}>Product:</p>
                            <p className={`${workSans.className} font-medium text-[#C25C5C]`}>Ceramic Plant Pot</p>
                        </div>

                        <div className="flex justify-between p-3 border-b border-gray-300 border-opacity-50">
                            <p className={`text-[#424b4a] font-bold ${workSans.className}`}>Price:</p>
                            <p className={`text-[#424b4a] font-normal ${workSans.className}`}>$99</p>
                        </div>

                        <div className="flex justify-between p-3 border-b border-gray-300 border-opacity-50">
                            <p className={`text-[#424b4a] font-bold ${workSans.className}`}>Quantity:</p>
                            <Counter className="flex items-center w-fit h-fit"/>
                        </div>

                        <div className="flex justify-between p-3 border-gray-300 border-opacity-50">
                            <p className={`text-[#424b4a] font-bold ${workSans.className}`}>Subtotal:</p>
                            <p className={`text-[#424b4a] font-normal ${workSans.className}`}>$100</p>
                        </div>
                    </div>
                </div>

                <div className="w-[100%] mb-10">
                    <div className="w-[100%] border border-gray-300 border-opacity-50 p-3">
                        <Image src={Cancel} alt="Cancel" className="w-[20px] ml-auto" />
                    </div>

                    <div className="w-[100%] border-l border-r border-b border-gray-300 border-opacity-50 p-3">
                        <Image src={Image7} alt="Image7" className="w-[100px] mx-auto" />
                    </div>

                    <div className="flex flex-col border-l border-r border-b border-gray-300 border-opacity-50">
                        <div className="flex justify-between p-3 border-b border-gray-300 border-opacity-50">
                            <p className={`text-[#424b4a] font-bold ${workSans.className}`}>Product:</p>
                            <p className={`${workSans.className} font-medium text-[#C25C5C]`}>Ceramic Plant Pot</p>
                        </div>

                        <div className="flex justify-between p-3 border-b border-gray-300 border-opacity-50">
                            <p className={`text-[#424b4a] font-bold ${workSans.className}`}>Price:</p>
                            <p className={`text-[#424b4a] font-normal ${workSans.className}`}>$99</p>
                        </div>

                        <div className="flex justify-between p-3 border-b border-gray-300 border-opacity-50">
                            <p className={`text-[#424b4a] font-bold ${workSans.className}`}>Quantity:</p>
                            <Counter className="flex items-center w-fit h-fit"/>
                        </div>

                        <div className="flex justify-between p-3 border-gray-300 border-opacity-50">
                            <p className={`text-[#424b4a] font-bold ${workSans.className}`}>Subtotal:</p>
                            <p className={`text-[#424b4a] font-normal ${workSans.className}`}>$100</p>
                        </div>
                    </div>
                </div>

                <div className="w-[100%] mb-10">
                    <div className="w-[100%] border border-gray-300 border-opacity-50 p-3">
                        <Image src={Cancel} alt="Cancel" className="w-[20px] ml-auto" />
                    </div>

                    <div className="w-[100%] border-l border-r border-b border-gray-300 border-opacity-50 p-3">
                        <Image src={Image7} alt="Image7" className="w-[100px] mx-auto" />
                    </div>

                    <div className="flex flex-col border-l border-r border-b border-gray-300 border-opacity-50">
                        <div className="flex justify-between p-3 border-b border-gray-300 border-opacity-50">
                            <p className={`text-[#424b4a] font-bold ${workSans.className}`}>Product:</p>
                            <p className={`${workSans.className} font-medium text-[#C25C5C]`}>Ceramic Plant Pot</p>
                        </div>

                        <div className="flex justify-between p-3 border-b border-gray-300 border-opacity-50">
                            <p className={`text-[#424b4a] font-bold ${workSans.className}`}>Price:</p>
                            <p className={`text-[#424b4a] font-normal ${workSans.className}`}>$99</p>
                        </div>

                        <div className="flex justify-between p-3 border-b border-gray-300 border-opacity-50">
                            <p className={`text-[#424b4a] font-bold ${workSans.className}`}>Quantity:</p>
                            <Counter className="flex items-center w-fit h-fit"/>
                        </div>

                        <div className="flex justify-between p-3 border-gray-300 border-opacity-50">
                            <p className={`text-[#424b4a] font-bold ${workSans.className}`}>Subtotal:</p>
                            <p className={`text-[#424b4a] font-normal ${workSans.className}`}>$100</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Order_Detail;
