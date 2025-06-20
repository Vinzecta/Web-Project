import Menu from "../../../public/menu.svg"
import "./Header.css"
import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="w-full flex justify-around bg-[#C25C5C]">
            <h1 className="text-2xl h-fit my-auto text-white" id="shop-name">ShopName</h1>

            <nav className="flex gap-10 w-fit" id="navigation">
                <Link href="/home" className="text-base px-5 py-10 text-white">HOME</Link>
                <Link href='/about' className="text-base px-5 py-10 text-white">ABOUT</Link>
                <Link href='/shop' className="text-base px-5 py-10 text-white">SHOP</Link>
                <Link href='/contact' className="text-base px-5 py-10 text-white">CONTACT</Link>
            </nav>

            <Image src={Menu} alt="Menu" className="w-6" id="menu"/>
        </header>
    );
}

export default Header;