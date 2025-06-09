import Menu from "../assets/menu.svg"
import './Header.css'

function Header() {
    return (
        <header className="flex justify-between p-5">
            <h1 className="text-4xl ml-20 p-5">ShopName</h1>

            <nav className="flex gap-15">
                <a href="#" className="text-3xl p-5">Home</a>
                <a href='#' className="text-3xl p-5">About</a>
                <a href='#' className="text-3xl p-5">Shop</a>
                <a href='#' className="text-3xl p-5">Contact</a>
            </nav>

            <img src={Menu} alt="Menu" className="w-14 mr-20"/>
        </header>
    );
}

export default Header;