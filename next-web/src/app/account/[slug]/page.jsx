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
import { notFound } from "next/navigation";
import Link from "next/link";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

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
                    <div className="mt-5 flex flex-col w-[30%]" id="select-section">
                        <div className="flex gap-2">
                            <Image src={Avatar} alt="Avatar" className="w-[50px] rounded-full" />
                            <div className="my-auto">
                                <p className={`text-base font-normal text-[#C25C5C] ${workSans.className}`} id="username">Username</p>
                                <p className={`text-[10px] font-normal text-[#424b4a] ${workSans.className}`} id="gmail">Username@gmail.com</p>
                            </div>
                        </div>
                        <Link href="/account/profile" className={`mt-5 flex gap-2 pb-3 pt-3 border-b ${slug === "profile" ? "text-white bg-[#C25C5C]" : "text-[#424b4a] bg-white"} border-gray-300 border-opacity-50 hover:bg-[#C25C5C] cursor-pointer hover:text-white delay-75 duration-300`}>
                            <AccountCircleOutlinedIcon className="my-auto" />
                            <p className="text-[20px] font-medium option-text">Profile Information</p>
                        </Link>
    
                        <Link href="/account/reset-password" className={`flex gap-2 pb-3 pt-3 border-b ${slug === "reset-password" ? "text-white bg-[#C25C5C]" : "text-[#424b4a] bg-white"} border-gray-300 border-opacity-50 hover:bg-[#C25C5C] cursor-pointer hover:text-white delay-75 duration-300`}>
                            <HttpsOutlinedIcon className="my-auto" />
                            <button className="text-[20px] font-medium option-text">Reset Password</button>
                        </Link>
    
                        <Link href="/account/payment-method" className={`flex gap-2 pb-3 pt-3 border-b ${slug === "payment-method" ? "text-white bg-[#C25C5C]" : "text-[#424b4a] bg-white"} border-gray-300 border-opacity-50 hover:bg-[#C25C5C] cursor-pointer hover:text-white delay-75 duration-300`}>
                            <CreditCardOutlinedIcon className="my-auto" />
                            <button className="text-[20px] font-medium option-text">Payment Methods</button>
                        </Link>
    
                        <Link href="/account/history" className={`flex gap-2 pb-3 pt-3 border-b ${slug === "history" ? "text-white bg-[#C25C5C]" : "text-[#424b4a] bg-white"} border-gray-300 border-opacity-50 hover:bg-[#C25C5C] cursor-pointer hover:text-white delay-75 duration-300`}>
                            <AccessTimeOutlinedIcon className="my-auto" />
                            <button className="text-[20px] font-medium option-text">Purchase History</button>
                        </Link>
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