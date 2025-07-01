import Menu from "../../../public/menu.svg"
import Facebook from "../../../public/facebook.svg"
import Twitter from "../../../public/twitter.svg"
import Instagram from "../../../public/instagram.svg"
import Youtube from "../../../public/youtube.svg"
import Image from "next/image"
import Link from "next/link"

function Footer_Navigation() {
    return (
            <section className="flex justify-between py-10 w-[80%] mx-auto" id="footer-nav">
                <h1 className="text-xl text-[#C25C5C] font-medium">ShopName</h1>
    
                <nav className="flex gap-10" id="footer-navi">
                    <Link href="/home" className="text-base font-sans font-normal my-auto text-[#C25C5C]">HOME</Link>
                    <Link href='/about' className="text-base font-sans font-normal my-auto text-[#C25C5C]">ABOUT</Link>
                    <Link href='/shop' className="text-base font-sans font-normal my-auto text-[#C25C5C]">SHOP</Link>
                    <Link href='/contact' className="text-base font-sans font-normal my-auto text-[#C25C5C]">CONTACT</Link>
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