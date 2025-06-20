import Image2 from "../../../public/image-2.jpg"
import Image3 from "../../../public/image-3.jpg"
import Image from 'next/image';
import "./Explore.css"

function Explore() {
    return (
        <section className="bg-[#F1F4F1] py-20 mt-20">
            <div className="w-[80%] mx-auto">
                <div className="flex flex-col gap-5">
                    <Image src={Image2} alt="Image2" id="journey-first"/>

                    <div className="flex justify-between" id="journey-content">
                        <div className="w-[50%]" id="journey-top">
                            <Image src={Image3} alt="" className="h-full w-full object-cover"/>
                        </div>

                        <div className="w-[48%] flex flex-col gap-5" id="journey-bottom">
                            <p className="text-sm" id="journey">OUR JOURNEY</p>
                            <h2 className="text-5xl" id="journey-title">Our Ceramic Odyssey Crafting Beauty and Quality.</h2>
                            <p className="text-base journey-text">Our company story is a testament to the enduring love for craftsmanship, where we combine our passion for ceramics with an unwavering commitment to quality and timeless beauty. Explore the journey that has led us to become a trusted source for exquisite ceramic products.We're proud to share our story, which mirrors the growth of a dream into a thriving destination for exceptional creations, reflecting artistry and innovation.</p>
                            <p className="text-base journey-text">Our dedication to crafting elegant, functional ceramic pieces that enhance everyday living is at the heart of our narrative, and it’s a story we’re excited to share with you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Explore;