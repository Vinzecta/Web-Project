import Image7 from "../../assets/image-7.jpg"
import Counter from "../Counter";

function Product_Detail() {
    return (
        <section>
           <img src={Image7} alt="Image 7" />

           <div>
                <p>Home/Ceramic/Ceramic Pot</p>
                <h4>Ceramic</h4>
                <h3>Ceramic Plant Pot</h3>
                <p><span className="line-through">$100</span> $99</p>
                <p>Discover the beauty of ceramics with our handcrafted. This exquisite piece combines artistry and function, making it a versatile addition to any space. Whether used as a decorative accent or a practical item, this ceramic creation adds a touch of elegance to your surroundings.</p>

                <div>
                    <Counter />
                    <button className="border">Add to Cart</button>
                </div>
           </div>
        </section>
    );
}

export default Product_Detail;