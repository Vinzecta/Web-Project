import Menu from "../../assets/menu.svg"
import Facebook from "../../assets/facebook.svg"
import Twitter from "../../assets/twitter.svg"
import Instagram from "../../assets/instagram.svg"
import Youtube from "../../assets/youtube.svg"

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
                    <img src={Facebook} alt="Facebook" className="w-5"/>
                    <img src={Twitter} alt="Twitter" className="w-5"/>
                    <img src={Instagram} alt="Instagram" className="w-5"/>
                    <img src={Youtube} alt="Youtube" className="w-5"/>
                </div>
            </section>
        );
}

export default Footer_Navigation;