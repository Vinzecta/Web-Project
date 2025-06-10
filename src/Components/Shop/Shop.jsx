import Header from "../header/Header";
import Footer from "../footer/footer";
import Hero from "../Hero";
import Image1 from "../../assets/image-1.jpg"
import Search from "../../assets/search.svg"
import Rates from "../Rates"
import Image7 from "../../assets/image-7.jpg"
import Pagination from "../Pagination";

function Shop() {
    return (
        <>
            <Header />

            <section>
                <div>
                    <h2>Shop</h2>
                    <div>
                        <img src={Search} alt="Search Icon" />
                        <input type='text' className="border"/>
                    </div>
                </div>

                <div>
                    <p>Showing all 11 results</p>
                    <select className="border">
                        <option>Product Name (A-Z)</option>
                        <option>Product Name (Z-A)</option>
                        <option>Released Date (Ascending)</option>
                        <option>Released Date (Descending)</option>
                    </select>
                </div>
            </section>

            <section>
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
            </section>

            <Pagination/>
            
            <Footer />
        </>
    );
}

export default Shop;