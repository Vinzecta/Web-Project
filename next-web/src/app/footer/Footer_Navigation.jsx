import Menu from "../../../public/menu.svg"
import Facebook from "../../../public/facebook.svg"
import Twitter from "../../../public/twitter.svg"
import Instagram from "../../../public/instagram.svg"
import Youtube from "../../../public/youtube.svg"
import Image from "next/image"

function Footer_Navigation() {
    return (
            <section className="flex justify-around py-10 bg-[#F1F4F1]" id="footer-nav">
                <h1 className="text-xl">ShopName</h1>
    
                <nav className="flex gap-10" id="footer-navi">
                    <a href="#" className="text-base">Home</a>
                    <a href='#' className="text-base">About</a>
                    <a href='#' className="text-base">Shop</a>
                    <a href='#' className="text-base">Contact</a>
                </nav>
    
                <div className="flex gap-2" id="social-media">
                    <Image src={Facebook} alt="Facebook" className="w-5"/>
                    <Image src={Twitter} alt="Twitter" className="w-5"/>
                    <Image src={Instagram} alt="Instagram" className="w-5"/>
                    <Image src={Youtube} alt="Youtube" className="w-5"/>
                </div>
            </section>
        );
}

export default Footer_Navigation;