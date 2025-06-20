import Header from "./header/Header"
import Footer from "./footer/Footer"
import Banner from "./banner/Banner"
import Image from "../../public/image-1.jpg"
import Introduction from "./home/Introduction"
import Category from "./home/Category"
import Popular from "./home/Popular"
import Review from "./home/Review"
import Hero from "./hero/Hero"
import "./home/Homepage.css"
import Link from "next/link"

function Homepage() {
    const welcome = "WELCOME TO CERAMIC SHOP";
    const title = "Elevate Your Space with Ceramic Elegance";
    const content = "Starting from just $149.00";
    const button = "SHOP NOW!";
    return (
        <>
            <Header/>
            <Banner welcome={welcome}
                    title={title}
                    content={content}
                    image={Image}
                    button={button}
                    navigation="/shop" />
            <Introduction/>
            <Category/>
            <Popular sub_title="MOST POPULAR" title="Discover the Latest Additions at Your Top Choice Flower Shop"/>
            <Popular sub_title="TRENDING NOW" title="Minimalist Ceramic Designs" />
            <Review/>
            <Hero/>
            <Footer/>
        </>
    );
}

export default Homepage;