import Header from "../header/Header";
import Footer from "../footer/footer";
import Banner from "../Banner/Banner";
import Image1 from "../../assets/image-1.jpg"
import Info from "./Info";
import Hero from "../Hero/Hero";

function Contact() {
    const title = "Contact Us!";
    const content = "At [Shop Name], we offer quality [products/services] with reliable service and fair prices. Proudly serving [your market or location], we're here to help you find what you need—quickly and easily.";
    return (
        <>
            <Header/>
            <Banner title={title} content={content} image={Image1} /> 
            <Info/>
            <Hero/>
            <Footer/>
        </>
    );
}

export default Contact;