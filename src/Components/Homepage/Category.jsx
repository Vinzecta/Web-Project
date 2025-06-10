import Image5 from "../../assets/image-5.jpg"

function Category() {
    return (
        <section>
            <div>
                <p>The best of ShopName,</p>
                <h2>Our Products Category</h2>
                <p>Explore our curated collection of unique finds designed to elevate your space and reflect true craftsmanship. From everyday essentials to standout decor, every piece in our shop is chosen for its quality, style, and lasting appeal.</p>
                <div>
                    <img src={Image5} alt="Image 5"/>
                    <div>
                        <p>Product A</p>
                        <p>Start from $1</p>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <img src={Image5} alt="Image 5"/>
                    <div>
                        <p>Product A</p>
                        <p>Start from $1</p>
                    </div>
                </div>

                <div>
                    <img src={Image5} alt="Image 5"/>
                    <div>
                        <p>Product A</p>
                        <p>Start from $1</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Category;