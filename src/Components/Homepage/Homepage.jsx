import Header from "../header/Header"
import Footer from "../footer/footer"
import Banner from "../Banner/Banner"
import Image from "../../assets/image-1.jpg"
import Introduction from "./Introduction"
import Category from "./Category"
import Popular from "./Popular"
import Trending from "./Trending"
import Review from "./Review"
import Hero from "../Hero/Hero"
import "./Homepage.css"

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
                    button={button} />
            <Introduction/>
            <Category/>
            {/* <Popular/>
            <Trending/>
            <Review/> */}
            <Hero/>
            <Footer/>
        </>
    );
}

export default Homepage;