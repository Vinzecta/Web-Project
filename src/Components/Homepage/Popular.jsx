import Image7 from "../../assets/image-7.jpg"
import Rates from "../Rates"
import "./Popular.css"

function Popular() {
    return (
        <section className="mt-10 flex flex-col gap-5 w-[80%] mx-auto">
            <p className="text-sm" id="most-popular">MOST POPULAR</p>
            <h1 className="text-5xl w-[80%]" id="popular-title">Discover the Latest Additions at Your Top Choice Flower Shop</h1>

            {/* Category Display */}
            <div className="flex flex-wrap justify-between">
                <div className="w-[30%] h-fit flex flex-col gap-2 mb-10 product-container">
                    <img src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <p className="text-xs category">Ceramic</p>
                    <h4 className="text-[22px] product">Ceramic Cup</h4>
                    <Rates/>
                    <p className="text-lg price"><span className="line-through text-lg price">$100</span> $99</p>
                </div>

                <div className="w-[30%] h-fit flex flex-col gap-2 mb-10 product-container">
                    <img src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <p className="text-xs category">Ceramic</p>
                    <h4 className="text-[22px] product">Ceramic Cup</h4>
                    <Rates/>
                    <p className="text-lg price"><span className="line-through text-lg price">$100</span> $99</p>
                </div>

                <div className="w-[30%] h-fit flex flex-col gap-2 mb-10 product-container">
                    <img src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <p className="text-xs category">Ceramic</p>
                    <h4 className="text-[22px] product">Ceramic Cup</h4>
                    <Rates/>
                    <p className="text-lg price"><span className="line-through text-lg price">$100</span> $99</p>
                </div>

                <div className="w-[30%] h-fit flex flex-col gap-2 mb-10 product-container">
                    <img src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <p className="text-xs category">Ceramic</p>
                    <h4 className="text-[22px] product">Ceramic Cup</h4>
                    <Rates/>
                    <p className="text-lg price"><span className="line-through text-lg price">$100</span> $99</p>
                </div>

                <div className="w-[30%] h-fit flex flex-col gap-2 mb-10 product-container">
                    <img src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <p className="text-xs category">Ceramic</p>
                    <h4 className="text-[22px] product">Ceramic Cup</h4>
                    <Rates/>
                    <p className="text-lg price"><span className="line-through text-lg price">$100</span> $99</p>
                </div>

                <div className="w-[30%] h-fit flex flex-col gap-2 mb-10 product-container">
                    <img src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <p className="text-xs">Ceramic</p>
                    <h4 className="text-[22px] product">Ceramic Cup</h4>
                    <Rates/>
                    <p className="text-lg price"><span className="line-through text-lg price">$100</span> $99</p>
                </div>
            </div>
        </section>
    );
}

export default Popular;