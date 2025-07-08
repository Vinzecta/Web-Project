import Image7 from "../../../public/image-7.jpg"
import Counter from "../counter/Counter";
import "./Product_Detail.css"
import Image from "next/image";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function Product_Detail() {
    return (
        <section className="w-[80%] mx-auto mt-10 flex gap-10" id="detail-section">
            <div className="w-[50%] flex gap-2" id="image-container">
                <Image src={Image7} alt="Image 7" className="h-full w-full object-cover" />
            </div>

            <div className="w-[50%] flex flex-col gap-5" id="info-container">
                 <p className={`text-sm font-normal ${workSans.className} text-[#a0a5a4]`}>Home / Ceramic / Ceramic Pot</p>
                 <h4 className={`text-base font-normal ${workSans.className} text-[#C25C5C]`} id="product-category">CERAMIC, CERAMIC COATING, POTTERY</h4>
                 <h3 className="text-[32px] font-medium text-[#C25C5C]" id="product-name">Ceramic Plant Pot</h3>
                 <p className={`text-2xl font-bold ${workSans.className} text-[#424b4a]`} id="price"><span className="line-through text-[#a0a5a4]">$100</span> $99</p>
                 <p className={`text-base font-normal ${workSans.className} text-[#424b4a]`} id="description">Discover the beauty of ceramics with our handcrafted. This exquisite piece combines artistry and function, making it a versatile addition to any space. Whether used as a decorative accent or a practical item, this ceramic creation adds a touch of elegance to your surroundings.</p>   
                 <div className="flex gap-10 pb-5 border-b" id="quantity">
                     <Counter className="flex my-auto" />
                     <button className={`text-base w-fit py-3 px-5 text-center border banner-p text-[#C25C5C] border-[#C25C5C] font-medium ${workSans.className} hover:bg-[#C25C5C] hover:text-white delay-75 duration-300 flex justify-center items-center`}>ADD TO CART</button>
                 </div>

                 <p className={`text-base ${workSans.className} font-medium text-[#424b4a]`} id="category">Categories: <span className="text-[#C25C5C] font-normal">Ceramic, Ceramic Coating, Pottery</span></p>
            </div>
        </section>
    );
}

export default Product_Detail;