import Banner from "../banner/Banner"
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Image1 from "../../../public/image-1.jpg"
import Story from "./Story"
import Explore from "./Explore"
import Goal from "./Goal"
import Hero from "../hero/Hero"
import Image from "next/image";
import ArrowUp from "../arrow up/ArrowUp";

function About() {
    const about_content = "At Duc Loi, we offer quality [products/services] with reliable service and fair prices. Proudly serving [your market or location], we're here to help you find what you need—quickly and easily."
    return (
        <>
            <Header/>
            <Banner title="About Us!"
                    content={about_content}
                    image={Image1}/>
            <Story/>
            <Explore/>
            <Goal/>
            <Hero />
            <Footer/>
            <ArrowUp />
        </>
    );
}

export default About;