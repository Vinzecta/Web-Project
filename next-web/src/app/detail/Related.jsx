// Related Product Section
import Image7 from "../../../public/image-7.jpg"
import Rates from "../rates/Rates";
import Image from "next/image";
import "./Related.css"

function Related() {
    return (
        <section className="mt-10 w-[80%] mx-auto">
            <h2 className="text-[48px]" id="related-product">Related Product</h2>

            <div className="flex flex-wrap justify-between mt-10">
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
            </div>
        </section>
    );
};

export default Related;