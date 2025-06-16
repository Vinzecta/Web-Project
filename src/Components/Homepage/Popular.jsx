import Image7 from "../../assets/image-7.jpg"
import Rates from "../Rates"

function Popular() {
    return (
        <section className="mt-10 flex flex-col gap-5 w-[80%] mx-auto">
            <p className="text-sm">MOST POPULAR</p>
            <h1 className="text-5xl w-[80%]">Discover the Latest Additions at Your Top Choice Flower Shop</h1>

            {/* Category Display */}
            <div className="flex flex-wrap gap-10">
                <div className="w-[30%]">
                    <img src={Image7} alt="Image 7" className="w-full h-full object-cover"/>
                    <p className="text-xs">Ceramic</p>
                    <h4 className="text-[22px]">Ceramic Cup</h4>
                    <Rates/>
                    <p className="text-lg"><span className="line-through text-lg">$100</span> $99</p>
                </div>

                <div className="w-[30%]">
                    <img src={Image7} alt="Image 7"/>
                    <p className="text-xs">Ceramic</p>
                    <h4 className="text-[22px]">Ceramic Cup</h4>
                    <Rates/>
                    <p className="text-lg"><span className="line-through text-lg">$100</span> $99</p>
                </div>

                <div>
                    <img src={Image7} alt="Image 7"/>
                    <p className="text-xs">Ceramic</p>
                    <h4 className="text-[22px]">Ceramic Cup</h4>
                    <Rates/>
                    <p className="text-lg"><span className="line-through text-lg">$100</span> $99</p>
                </div>

                <div>
                    <img src={Image7} alt="Image 7"/>
                    <p className="text-xs">Ceramic</p>
                    <h4 className="text-[22px]">Ceramic Cup</h4>
                    <Rates/>
                    <p className="text-lg"><span className="line-through text-lg">$100</span> $99</p>
                </div>

                <div>
                    <img src={Image7} alt="Image 7"/>
                    <p className="text-xs">Ceramic</p>
                    <h4 className="text-[22px]">Ceramic Cup</h4>
                    <Rates/>
                    <p className="text-lg"><span className="line-through text-lg">$100</span> $99</p>
                </div>

                <div>
                    <img src={Image7} alt="Image 7"/>
                    <p className="text-xs">Ceramic</p>
                    <h4 className="text-[22px]">Ceramic Cup</h4>
                    <Rates/>
                    <p className="text-lg"><span className="line-through text-lg">$100</span> $99</p>
                </div>
            </div>
        </section>
    );
}

export default Popular;