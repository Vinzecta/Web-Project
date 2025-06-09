import Banner from "../Banner"
import Header from "../header/Header";
import Footer from "../footer/footer";
import Image1 from "../assets/image-1.jpg"
import Story from "./Story"
import Explore from "./Explore"
import Goal from "./Goal"

function About() {
    const about_content = "At [Shop Name], we offer quality [products/services] with reliable service and fair prices. Proudly serving [your market or location], we're here to help you find what you need—quickly and easily."
    return (
        <>
            <Header/>
            <Banner title="About Us!"
                    content={about_content}
                    image={Image1}/>
            <Story/>
            <Explore/>
            <Goal/>
            <Footer/>
        </>
    );
}

export default About;