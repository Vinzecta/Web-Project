import Menu from "../../assets/menu.svg"
import Facebook from "../../assets/facebook.svg"
import Twitter from "../../assets/twitter.svg"
import Instagram from "../../assets/instagram.svg"
import Youtube from "../../assets/youtube.svg"

function Footer_Navigation() {
    return (
            <section className="flex justify-between p-5">
                <h1 className="text-2xl ml-20 p-5">ShopName</h1>
    
                <nav className="flex gap-15 p-5">
                    <a href="#" className="text-2xl m-auto">Home</a>
                    <a href='#' className="text-2xl m-auto">About</a>
                    <a href='#' className="text-2xl m-auto">Shop</a>
                    <a href='#' className="text-2xl m-auto">Contact</a>
                </nav>
    
                <div className="flex gap-5 mr-20">
                    <img src={Facebook} alt="Facebook" className="w-10"/>
                    <img src={Twitter} alt="Twitter" className="w-10"/>
                    <img src={Instagram} alt="Instagram" className="w-10"/>
                    <img src={Youtube} alt="Youtube" className="w-10"/>
                </div>
            </section>
        );
}

export default Footer_Navigation;