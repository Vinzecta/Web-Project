import Image from "../../assets/image-4.jpg"
import "./Hero.css"

function Hero() {
    return (
        <section className="flex bg-[#C25C5C]" id="hero-section">
            <img src={Image} alt="Image 4" className="w-1/2"/>

            <div className="ml-2.5 w-1/2 m-auto" id="sub-hero">
                <h1 className="text-5xl text-white w-[60%]">Uncover the World of Ceramic Artistry Start Your Journey Here!</h1>
                <button className="text-base mt-5 py-[10px] px-[30px] border border-white text-white">SHOP NOW!</button>
            </div>
        </section>
    );
}

export default Hero;