"use client"

import { useState } from "react";
import Image from "next/image";
import Paid from "../../../public/paid.svg"
import User from "../../../public/user.svg"
import Bill from "../../../public/bill.svg"
import Card from "../../../public/card.svg"
import Cash from "../../../public/cash.svg"  
import Paypal from "../../../public/paypal.svg" 

export default function Price_Summary() {
    return (
        <section className="w-[80%] mt-10 mx-auto">
            <div className="flex gap-5">
                <Image src={Bill} className="w-[32px]" alt="Paid Logo" />
                <h2 className="text-[32px]">Billing Detail</h2>
            </div>

            <div className="p-5 flex flex-col gap-5">
                <div className="flex gap-2">
                    <Image src={User} alt="User" />
                    <h3 className="text-[20px]">Customer Information</h3>
                    <button className="ml-auto">Change</button>
                </div>

                <p className="text-[16px]">Name: <span>Vinzecta</span></p>
                <p className="text-[16px]">Phone Number: <span>0366150204</span></p>
                <p className="text-[16px]">Address: <span>Binh Tan District, HCMC</span></p>
            </div>

            <div className="p-5 flex flex-col gap-5">
                <div className="flex gap-2">
                    <Image src={Paid} alt="Paid Icon"/>
                    <h3 className="text-[20px]">Total Amount</h3>
                </div>

                <p>Subtotal: <span>$1000</span></p>
                <p>Shipment Cost (3km): <span>$1</span></p>

                <div className="flex gap-5">
                    <input placeholder="Enter the coupon" className="bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50"/>
                    <button className="border text-base py-3 px-10 rounded-3xl border-[#C25C5C] text-[#C25C5C]">Apply</button>
                </div>

                <p>Total: <span>$1001</span></p>
            </div>

            <div className="p-5 flex flex-col gap-5">
                <div className="flex gap-2">
                    <Image src={Card} alt="Card" className="w-[30px]" />
                    <h3 className="text-[20px]">Payment Methods</h3>
                </div>

                <div className="w-[50%] mx-auto flex flex-col gap-2">
                    <button className="flex w-[100%] py-5 justify-center">
                        <Image src={Cash} className="w-[30px]" alt="Cash Icon" /> 
                        <p className="text-[16px]">Cash</p>
                    </button>

                    <button className="flex w-[100%] justify-center py-5">
                        <Image src={Paypal} className="w-[30px]" alt="Paypal Icon" />
                        <p className="text-[16px]">Paypal</p>
                    </button>

                    <button className="flex w-[100%] justify-center py-5">
                        <img src="momo.svg" className="w-[30px]" alt="Momo Icon" />
                        <p className="text-[16px]">Momo</p>
                    </button>
                </div>

                <button>Add more payment method</button>
            </div>

            <button>Place Order $1001</button>
        </section>
    );
}