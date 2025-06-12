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

function Homepage() {
    const welcome = "Welcome to ShopName";
    const title = "Work smarter. Achieve more.";
    const content = "Starting from just 1$";
    const button = "Shop now!";
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
            <Popular/>
            <Trending/>
            <Review/>
            <Hero/>
            <Footer/>
        </>
    );
}

export default Homepage;