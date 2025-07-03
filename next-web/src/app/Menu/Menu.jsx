"use client"

import { CloseCircleOutlined } from "@ant-design/icons"
import Image from "next/image"
import Avatar from "../../../public/avatar.jpg"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Work_Sans } from "next/font/google";
import Link from "next/link";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Image7 from "../../../public/image-7.jpg"
import Counter from "../counter/Counter";
import { useState, useEffect } from "react";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

export default function MenuBar({onClose, menuStatus}) {
    const [animationClass, setAnimationClass] = useState("translate-x-full");

    useEffect(() => {
        if (menuStatus) {
            const timeout = setTimeout(() => {
                setAnimationClass("translate-x-0");
            }, 10);
            return () => clearTimeout(timeout);
        } else {
            setAnimationClass("translate-x-full");
        }
    }, [menuStatus]);

    return (
        <section className="h-screen w-[100%] fixed bg-[#00000066] top-0 z-50">
            <div className={`h-[100%] w-[35%] bg-white ml-auto flex flex-col transition-transform duration-500 ease-in-out ${animationClass}`}>
                <div className="w-[100%] flex justify-between py-3 px-5 border-b border-gray-300 border-opacity-50">
                    <div className="flex gap-5">
                        <Image src={Avatar} className="rounded-full w-[50px]" alt="Avatar" />
                        <p className={`my-auto ${workSans.className} font-medium text-[#424b4a]`}>Username</p>
                    </div>

                    <CloseCircleOutlined onClick={onClose} />
                </div>

                <div className="hidden">
                    <p className={`${workSans.className} text-[#424b4a] text-normal text-center`}>Continue with your account or sign up now.</p>
                    <div className="flex justify-around mt-5">
                        <Link className={`text-base w-[30%] py-3 text-center border banner-p text-[#C25C5C] rounded-3xl border-[#C25C5C] font-medium ${workSans.className} hover:bg-[#C25C5C] hover:text-white delay-75 duration-300 flex justify-center items-center`} href="/registeration">Sign In</Link>
                        <Link className={`text-base w-[30%] py-3 text-center border banner-p text-[#C25C5C] rounded-3xl border-[#C25C5C] font-medium ${workSans.className} hover:bg-[#C25C5C] hover:text-white delay-75 duration-300 flex justify-center items-center`} href="/registeration">Sign Up</Link>
                    </div>
                </div>

                <div>
                    <div className="w-[100%]">
                        <Link href="/account" className="flex gap-3 font-medium text-[#424b4a] justify-end px-5 py-3 hover:bg-[#C25C5C] hover:text-white delay-75 duration-300">
                            <p className="text-[20px]">Account</p>
                            <AccountCircleOutlinedIcon className="my-auto" />
                        </Link>

                        <Link href="/" className="flex gap-3 justify-end font-medium text-[#424b4a] px-5 py-3 hover:bg-[#C25C5C] hover:text-white delay-75 duration-300">
                            <p className="text-[20px]">Sign Out</p>
                            <PowerSettingsNewIcon className="my-auto"/>
                        </Link>
                    </div>
                </div>

                <div className="w-[100%] border-t border-gray-300 border-opacity-50">
                    <h2 className="mt-5 text-[25px] font-semibold text-[#C25C5C] text-center">Your Cart</h2>

                    <div className="w-[100%] max-h-[332px] overflow-y-auto">
                        <div className="w-[100%] p-5 flex gap-3 border-b border-gray-300 border-opacity-50">
                            <Image src={Image7} alt="Image7" className="w-[70px]" />

                            <div className="w-[100%] flex flex-col gap-3">
                                <div className="flex justify-between">
                                    <p className={`${workSans.className} text-[#C25C5C] font-medium`}>Ceramic Pot</p>
                                    <CloseCircleOutlined />
                                </div>

                                <div className="flex justify-between">
                                    <Counter className="flex" />
                                    <p className={`${workSans.className} text-[#424b4a] font-normal`}>$99</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between py-3 px-5 border-t border-b border-gray-300 border-opacity-50">
                        <p className={`${workSans.className} text-[#C25C5C] font-medium`}>Subtotal:</p>
                        <p className={`${workSans.className} text-[#424b4a] font-normal`}>$99</p>
                    </div>
                </div>

                <div className="mt-10 px-3 w-[100%]">
                    <Link href="/cart" className={`text-base w-[100%] py-3 px-5 text-center border banner-p text-[#C25C5C] m-auto font-medium ${workSans.className} hover:bg-[#C25C5C] hover:text-white delay-75 duration-300 flex justify-center items-center`}>VIEW CART</Link>
                </div>
            </div>
        </section>
    )
}