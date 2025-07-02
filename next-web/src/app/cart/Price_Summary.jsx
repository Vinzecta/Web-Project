"use client"

import { useState } from "react";
import Image from "next/image";
import Paid from "../../../public/paid.svg"
import User from "../../../public/user.svg"
import Bill from "../../../public/bill.svg"
import Card from "../../../public/card.svg"
import Cash from "../../../public/cash.svg"  
import Paypal from "../../../public/paypal.svg" 
import "./Price_Summary.css"
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

export default function Price_Summary() {
    return (
        <section className="w-[80%] mt-10 mx-auto">
            <div className="flex gap-5 pb-5 border-b">
                <Image src={Bill} className="w-[32px]" id="paid-logo" alt="Paid Logo" />
                <h2 className="text-[32px] text-[#C25C5C] font-medium" id="billing-detail">Billing Detail</h2>
            </div>

            <div className="p-15 flex flex-col gap-5 mt-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl bill-card">
                <div className="flex gap-2 pb-5 border-b">
                    <Image src={User} alt="User" />
                    <h3 className="text-[20px] font-medium text-[#424b4a] bill-title">Customer Information</h3>
                </div>

                <p className={`text-[16px] text-[#424b4a] font-bold ${workSans.className}`}>Name: <span className="font-normal">Vinzecta</span></p>
                <p className={`text-[16px] text-[#424b4a] font-bold ${workSans.className}`}>Phone Number: <span className="font-normal">0366150204</span></p>
                <p className={`text-[16px] text-[#424b4a] font-bold ${workSans.className}`}>Address: <span className="font-normal">Binh Tan District, HCMC</span></p>

                <button className={`text-base w-fit py-3 px-5 text-center border banner-p text-[#C25C5C] rounded-3xl ml-auto border-[#C25C5C] font-medium ${workSans.className} hover:bg-[#C25C5C] hover:text-white delay-75 duration-300 flex justify-center items-center`}>Change</button>
            </div>

            <div className="p-15 flex flex-col gap-5 mt-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl bill-card">
                <div className="flex gap-2 pb-5 border-b">
                    <Image src={Paid} alt="Paid Icon"/>
                    <h3 className="text-[20px] font-medium text-[#424b4a] bill-title">Total Amount</h3>
                </div>

                <p className={`text-[16px] text-[#424b4a] font-bold ${workSans.className}`}>Subtotal: <span className="font-normal">$1000</span></p>
                <p className={`text-[16px] text-[#424b4a] font-bold ${workSans.className}`}>Shipment Cost (3km): <span className="font-normal">$1</span></p>

                <div className="flex gap-5" id="coupon">
                    <input placeholder="Enter the coupon" className={`bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 ${workSans.className} font-normal text-[#424b4a]`}/>
                    <button className={`text-base w-fit py-3 px-5 text-center border banner-p text-[#C25C5C] rounded-3xl border-[#C25C5C] font-medium ${workSans.className} hover:bg-[#C25C5C] hover:text-white delay-75 duration-300 flex justify-center items-center`}>Apply</button>
                </div>

                <p className={`text-[16px] text-[#424b4a] font-bold ${workSans.className}`}>Total: <span className="font-normal">$1001</span></p>
            </div>

            <div className="p-15 flex flex-col gap-5 mt-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl bill-card">
                <div className="flex gap-2 pb-5 border-b">
                    <Image src={Card} alt="Card" className="w-[30px]" />
                    <h3 className="text-[20px] font-medium text-[#424b4a] bill-title">Payment Methods</h3>
                </div>

                <div className="w-[50%] mx-auto flex flex-col gap-3 bill-card payment-button">
                    <button className="flex w-[100%] py-5 justify-center gap-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl ">
                        <Image src={Cash} className="w-[30px]" alt="Cash Icon" /> 
                        <p className={`text-[16px] my-auto ${workSans.className} font-medium text-[#424b4a]`}>Cash</p>
                    </button>

                    <button className="flex w-[100%] justify-center py-5 gap-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl">
                        <Image src={Paypal} className="w-[30px]" alt="Paypal Icon" />
                        <p className={`text-[16px] my-auto ${workSans.className} font-medium text-[#424b4a]`}>Paypal</p>
                    </button>

                    <button className="flex w-[100%] justify-center py-5 gap-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl">
                        <img src="momo.svg" className="w-[30px]" alt="Momo Icon" />
                        <p className={`text-[16px] my-auto ${workSans.className} font-medium text-[#424b4a]`}>Momo</p>
                    </button>
                </div>

                <button className={`text-base w-fit py-3 px-5 text-center border banner-p text-[#C25C5C] rounded-3xl mx-auto border-[#C25C5C] font-medium ${workSans.className} hover:bg-[#C25C5C] hover:text-white delay-75 duration-300 flex justify-center items-center`}>Add more payment method</button>
            </div>

            <button className={`mt-10 mb-10 text-base w-1/1 py-3 px-5 text-center border banner-p text-[#C25C5C] rounded-3xl mx-auto border-[#C25C5C] font-medium ${workSans.className} hover:bg-[#C25C5C] hover:text-white delay-75 duration-300 flex justify-center items-center`}>Place Order $1001</button>
        </section>
    );
}