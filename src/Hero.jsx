import Image from "./assets/image-4.jpg"

function Hero() {
    return (
        <section className="flex gap-5">
            <img src={Image} alt="Image 4" className="w-1/2"/>

            <div classname="w-1/2">
                <h1 className="text-6xl">Uncover the World of Ceramic Artistry Start Your Journey Here!</h1>
                <button className="border">Shop Now!</button>
            </div>
        </section>
    );
}

export default Hero;