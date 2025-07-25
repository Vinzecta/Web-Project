import Header from "../header/Header"
import Footer from "../footer/Footer"
import Banner from "../banner/Banner"
import Image from "../../../public/image-1.jpg"
import Introduction from "./Introduction"
import Category from "./Category"
import Popular from "./Popular"
import Review from "./Review"
import Hero from "../hero/Hero"
import "./Homepage.css"
import ArrowUp from "../arrow up/ArrowUp"

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

            <ArrowUp />
        </>
    );
}

export default Homepage;