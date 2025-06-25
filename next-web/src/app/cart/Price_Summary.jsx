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

export default function Price_Summary() {
    return (
        <section className="w-[80%] mt-10 mx-auto">
            <div className="flex gap-5 pb-5 border-b">
                <Image src={Bill} className="w-[32px]" id="paid-logo" alt="Paid Logo" />
                <h2 className="text-[32px]" id="billing-detail">Billing Detail</h2>
            </div>

            <div className="p-15 flex flex-col gap-5 mt-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl bill-card">
                <div className="flex gap-2 pb-5 border-b">
                    <Image src={User} alt="User" />
                    <h3 className="text-[20px] bill-title">Customer Information</h3>
                </div>

                <p className="text-[16px]">Name: <span>Vinzecta</span></p>
                <p className="text-[16px]">Phone Number: <span>0366150204</span></p>
                <p className="text-[16px]">Address: <span>Binh Tan District, HCMC</span></p>

                <button className="ml-auto">Change</button>
            </div>

            <div className="p-15 flex flex-col gap-5 mt-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl bill-card">
                <div className="flex gap-2 pb-5 border-b">
                    <Image src={Paid} alt="Paid Icon"/>
                    <h3 className="text-[20px] bill-title">Total Amount</h3>
                </div>

                <p>Subtotal: <span>$1000</span></p>
                <p>Shipment Cost (3km): <span>$1</span></p>

                <div className="flex gap-5" id="coupon">
                    <input placeholder="Enter the coupon" className="bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50"/>
                    <button className="border text-base py-3 px-10 rounded-3xl border-[#C25C5C] text-[#C25C5C]">Apply</button>
                </div>

                <p>Total: <span>$1001</span></p>
            </div>

            <div className="p-15 flex flex-col gap-5 mt-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl bill-card">
                <div className="flex gap-2 pb-5 border-b">
                    <Image src={Card} alt="Card" className="w-[30px]" />
                    <h3 className="text-[20px] bill-title">Payment Methods</h3>
                </div>

                <div className="w-[50%] mx-auto flex flex-col gap-3 bill-card payment-button">
                    <button className="flex w-[100%] py-5 justify-center gap-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl ">
                        <Image src={Cash} className="w-[30px]" alt="Cash Icon" /> 
                        <p className="text-[16px] my-auto">Cash</p>
                    </button>

                    <button className="flex w-[100%] justify-center py-5 gap-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl">
                        <Image src={Paypal} className="w-[30px]" alt="Paypal Icon" />
                        <p className="text-[16px] my-auto">Paypal</p>
                    </button>

                    <button className="flex w-[100%] justify-center py-5 gap-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl">
                        <img src="momo.svg" className="w-[30px]" alt="Momo Icon" />
                        <p className="text-[16px] my-auto">Momo</p>
                    </button>
                </div>

                <button className="py-5 w-[50%] mx-auto rounded-3xl border border-[#C25C5C] text-[#C25C5C]" id="more-method">Add more payment method</button>
            </div>

            <button className="mt-10 py-5 w-[100%] mx-auto rounded-3xl border border-[#C25C5C] text-[#C25C5C]">Place Order $1001</button>
        </section>
    );
}