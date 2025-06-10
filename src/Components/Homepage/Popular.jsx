import Image7 from "../../assets/image-7.jpg"
import Rates from "../Rates"

function Popular() {
    return (
        <section>
            <p>Most Popular</p>
            <h1>Discover the Latest Additions at Your Top Choice Flower Shop</h1>

            {/* Category Display */}
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
}

export default Popular;