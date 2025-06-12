import Menu from "../../assets/menu.svg"
import "./Header.css"

function Header() {
    return (
        <header className="w-full flex justify-around bg-[#C25C5C]">
            <h1 className="text-2xl h-fit my-auto text-white" id="shop-name">ShopName</h1>

            <nav className="flex gap-10 w-fit" id="navigation">
                <a href="#" className="text-base px-5 py-10 text-white">HOME</a>
                <a href='#' className="text-base px-5 py-10 text-white">ABOUT</a>
                <a href='#' className="text-base px-5 py-10 text-white">SHOP</a>
                <a href='#' className="text-base px-5 py-10 text-white">CONTACT</a>
            </nav>

            <img src={Menu} alt="Menu" className="w-6" id="menu"/>
        </header>
    );
}

export default Header;