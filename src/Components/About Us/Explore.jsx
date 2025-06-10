import Image2 from "../../assets/image-2.jpg"
import Image3 from "../../assets/image-3.jpg"

function Explore() {
    return (
        <section className="p-5 mt-60">
            <div className="-mt-24">
                <img src={Image2} alt="Image 2" className="ml-25 w-450"/>

                <div className="flex mt-3">
                    <div className=" ml-25 w-2/1">
                        <img src={Image3} alt="Image 3" className="w-full h-full object-cover"/>
                    </div>

                    <div className=" ml-5 mr-20 h-fit">
                        <p className="text-2xl">Our Journey</p>
                        <h2 className="text-6xl">Explore CeramicShop and Our Ceramic Artistry</h2>
                        <p className="text-2xl">Our company story is a testament to the enduring love for craftsmanship, where we combine our passion for ceramics with an unwavering commitment to quality and timeless beauty. Explore the journey that has led us to become a trusted source for exquisite ceramic products.We're proud to share our story, which mirrors the growth of a dream into a thriving destination for exceptional creations, reflecting artistry and innovation.</p>
                        <p className="text-2xl">Our dedication to crafting elegant, functional ceramic pieces that enhance everyday living is at the heart of our narrative, and it’s a story we’re excited to share with you.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Explore;