"use client"

import Menu from "../../../public/menu.svg"
import "./Header.css"
import Image from "next/image";
import Link from "next/link";
import MenuBar from "../Menu/Menu";
import { useState, useEffect } from "react";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isMenuOpen || isVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen, isVisible]);

    const handleOpen = () => {
        setIsVisible(true); 
        setTimeout(() => setIsMenuOpen(true), 10); 
    };

    const handleClose = () => {
        setIsMenuOpen(false); 
        setTimeout(() => setIsVisible(false), 500);
    };

    return (
        <>
            <header className="w-full bg-[#C25C5C]">
                <nav className="w-[80%] flex justify-between mx-auto">
                    <Link href="/home" className="text-2xl h-fit my-auto font-medium text-white hover:scale-120 transition-transform duration-300" id="shop-name">ShopName</Link>

                    <div className="flex w-fit" id="navigation">
                        <Link href="/home" className="text-base px-5 py-10 text-white font-sans font-normal hover:scale-120 transition-transform duration-300">HOME</Link>
                        <Link href='/about' className="text-base px-5 py-10 text-white font-sans font-normal hover:scale-120 transition-transform duration-300">ABOUT</Link>
                        <Link href='/shop' className="text-base px-5 py-10 text-white font-sans font-normal hover:scale-120 transition-transform duration-300">SHOP</Link>
                        <Link href='/contact' className="text-base px-5 py-10 text-white font-sans font-normal hover:scale-120 transition-transform duration-300">CONTACT</Link>
                    </div>

                    <Image src={Menu} onClick={handleOpen} alt="Menu" className="w-6 hover:scale-120 transition-transform duration-300" id="menu"/>
                </nav>
            </header>

            {isVisible ? <MenuBar onClose={handleClose} menuStatus={isMenuOpen} /> : undefined}
        </>
    );
}

export default Header;