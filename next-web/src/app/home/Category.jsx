import Image5 from "../../../public/image-5.jpg"
import "./Category.css"
import Image from "next/image";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function Category() {
    return (
        <section className="w-1/1 py-10 mt-10 bg-[#F1F4F1]">
            <div className="flex w-[80%] gap-5 ml-[10%]" id="category-container">
                <div className="flex flex-col gap-5 w-1/2 category-section" id="left-side">
                    <p className={`text-sm font-medium ${workSans.className} text-[#C25C5C]`} id="best-ceramic">THE BEST OR CERMAICS</p>
                    <h2 className="text-5xl font-medium text-[#424b4a]">Our Products Category​</h2>
                    <p className={`text-base w-[95%] font-normal text-[#424b4a] ${workSans.className}`}>Explore our exquisite collection of ceramic treasures that elevate your spaces and celebrate the artistry of craftsmanship. From dinnerware to decor, each piece in our product range is a testament to quality, style, and the timeless beauty of ceramics.</p>
                    <div className="relative">
                        <Image src={Image5} alt="Image 5" className="w-1/1"/>
                        <div className="bg-white w-[90%] absolute bottom-[5%] left-1/2 transform -translate-x-1/2 p-5">
                            <h4 className="text-2xl category-name font-medium text-[#424b4a]">Stylish Ceramic Home Decor</h4>
                            <p className={`text-base font-normal ${workSans.className} text-[#424b4a]`}>Starting from just $99.00</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5 w-1/2 category-section">
                    <div className="relative">
                        <Image src={Image5} alt="Image 5" className="w-1/1"/>
                        <div className="bg-white w-[90%] absolute bottom-[5%] left-1/2 transform -translate-x-1/2 p-5">
                            <h4 className="text-2xl category-name font-medium text-[#424b4a]">Stylish Ceramic Home Decor</h4>
                            <p className={`text-base font-normal ${workSans.className} text-[#424b4a]`}>Starting from just $99.00</p>
                        </div>
                    </div>

                    <div className="relative">
                        <Image src={Image5} alt="Image 5" className="w-1/1"/>
                        <div className="bg-white w-[90%] absolute bottom-[5%] left-1/2 transform -translate-x-1/2 p-5">
                            <h4 className="text-2xl category-name font-medium text-[#424b4a]">Stylish Ceramic Home Decor</h4>
                            <p className={`text-base font-normal ${workSans.className} text-[#424b4a]`}>Starting from just $99.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Category;