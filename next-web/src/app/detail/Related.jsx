// Related Product Section
import Image7 from "../../../public/image-7.jpg"
import Rates from "../rates/Rates";
import Image from "next/image";

function Related() {
    return (
        <section>
            <h2>Related Product</h2>

            <div>
                <div>
                    <Image src={Image7} alt="Image 7"/>
                    <p>Ceramic</p>
                    <h4>Ceramic Cup</h4>
                    <Rates/>
                    <p><span className="line-through">$100</span> $99</p>
                </div>

                <div>
                    <Image src={Image7} alt="Image 7"/>
                    <p>Ceramic</p>
                    <h4>Ceramic Cup</h4>
                    <Rates/>
                    <p><span className="line-through">$100</span> $99</p>
                </div>

                <div>
                    <Image src={Image7} alt="Image 7"/>
                    <p>Ceramic</p>
                    <h4>Ceramic Cup</h4>
                    <Rates/>
                    <p><span className="line-through">$100</span> $99</p>
                </div>
            </div>
        </section>
    );
};

export default Related;