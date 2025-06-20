import Menu from "../../../public/menu.svg"
import Facebook from "../../../public/facebook.svg"
import Twitter from "../../../public/twitter.svg"
import Instagram from "../../../public/instagram.svg"
import Youtube from "../../../public/youtube.svg"
import Image from "next/image"
import Link from "next/link"

function Footer_Navigation() {
    return (
            <section className="flex justify-around py-10 bg-[#F1F4F1]" id="footer-nav">
                <h1 className="text-xl">ShopName</h1>
    
                <nav className="flex gap-10" id="footer-navi">
                    <Link href="/home" className="text-base">Home</Link>
                    <Link href='/about' className="text-base">About</Link>
                    <Link href='/shop' className="text-base">Shop</Link>
                    <Link href='/contact' className="text-base">Contact</Link>
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