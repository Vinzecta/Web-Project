// Related Product Section
import Image7 from "../../assets/image-7.jpg"
import Rates from "../Rates";

function Related() {
    return (
        <section>
            <h2>Related Product</h2>

            <div>
                <div>
                    <img src={Image7} alt="Image 7"/>
                    <p>Ceramic</p>
                    <h4>Ceramic Cup</h4>
                    <Rates/>
                    <p><span className="line-through">$100</span> $99</p>
                </div>

                <div>
                    <img src={Image7} alt="Image 7"/>
                    <p>Ceramic</p>
                    <h4>Ceramic Cup</h4>
                    <Rates/>
                    <p><span className="line-through">$100</span> $99</p>
                </div>

                <div>
                    <img src={Image7} alt="Image 7"/>
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