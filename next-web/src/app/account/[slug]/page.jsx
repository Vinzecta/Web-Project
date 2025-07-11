"use client"

import { useParams } from "next/navigation"
import History from "../History";
import Payment from "../Payment";
import Profile from "../Profile";
import ResetPassword from "../ResetPassword";
import Header from "@/app/header/Header";
import Footer from "@/app/footer/Footer";
import Avatar from "../../../../public/avatar.jpg"
import Image from "next/image";
import { Work_Sans } from "next/font/google";
import User from "../../../../public/user.svg"
import Password from "../../../../public/password.svg"
import Card from "../../../../public/card.svg"
import Purchase from "../../../../public/history.svg"
import { notFound } from "next/navigation";
import { useEffect } from "react";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

export default function DynamicAccount() {
    const params = useParams();
    const slug = params.slug;

    const availableSlug = ["profile", "reset-password", "payment-method", "history"];
    if(!availableSlug.includes(slug)) {
        return notFound();
    }

    return (
        <>
            <Header />

            <h1 className="w-[80%] mx-auto mt-10 text-[32px] pb-3 border-b border-black text-[#C25C5C] font-medium" id="account">Account</h1>
            <section className="w-[80%] mx-auto mt-10 flex justify-between mb-10" id="page-section">
                <div className="mt-5 flex flex-col gap-5 w-[30%]" id="select-section">
                    <div className="flex gap-2">
                        <Image src={Avatar} alt="Avatar" className="w-[50px] rounded-full" />
                        <div className="my-auto">
                            <p className={`text-base font-normal text-[#C25C5C] ${workSans.className}`} id="username">Username</p>
                            <p className={`text-[10px] font-normal text-[#424b4a] ${workSans.className}`} id="gmail">Username@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex gap-2 pb-3 border-b border-gray-300 border-opacity-50">
                        <Image src={User} alt="User" />
                        <p className="text-[20px] font-medium text-[#424b4a] option-text">Profile Information</p>
                    </div>

                    <div className="flex gap-2 pb-3 border-b border-gray-300 border-opacity-50">
                        <Image src={Password} alt="Password" className="w-[20px]"/>
                        <button className="text-[20px] font-medium text-[#424b4a] option-text">Reset Password</button>
                    </div>

                    <div className="flex gap-2 pb-3 border-b border-gray-300 border-opacity-50">
                        <Image src={Card} alt="Card" className="w-[20px]" />
                        <button className="text-[20px] font-medium text-[#424b4a] option-text">Payment Methods</button>
                    </div>

                    <div className="flex gap-2 pb-3 border-b border-gray-300 border-opacity-50">
                        <Image src={Purchase} alt="History" className="w-[20px]" />
                        <button className="text-[20px] font-medium text-[#424b4a] option-text">Purchase History</button>
                    </div>
                </div>
            
                {
                    slug === "profile" ? <Profile /> :
                    slug === "reset-password" ? <ResetPassword /> :
                    slug === "payment-method" ? <Payment /> :
                    slug === "history" ? <History /> : undefined
                }
            </section>
            
            <Footer />
        </>
    );
}