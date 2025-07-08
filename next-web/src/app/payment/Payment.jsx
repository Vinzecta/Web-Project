"use client"

import { CloseCircleOutlined } from "@ant-design/icons"
import Image from "next/image";
import Visa from "../../../public/visa.svg"
import Mastercard from "../../../public/mastercard.svg"
import Paypal from "../../../public/paypal.svg"
import Momo from "../../../public/momo.svg"
import Zalopay from "../../../public/zalopay.svg"
import { useState, useEffect } from "react";
import { Work_Sans } from "next/font/google";
import "./Payment.css"
import { motion, AnimatePresence } from "framer-motion";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

export default function PaymentMethod({onClose}) {
    const [changePayment, setChangePayment] = useState(false);

    const changeMethod = () => {
        setChangePayment(prev => !prev);
    }

    return  (
        <section className="h-screen w-[100%] fixed bg-[#00000066] top-0 z-50 flex justify-center">
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }} 
            className="bg-white w-[30%] h-[80%] my-auto rounded-2xl p-10 flex flex-col gap-5" id="payment-container">
                <div className="w-[100%] text-right">
                    <CloseCircleOutlined onClick={onClose} className="text-[25px] hover:scale-120 transition-transform duration-300 cursor-pointer" style={{color: '#424b4a' }} />
                </div>

                <div className="flex">
                    <div className={`flex justify-between w-[50%] pl-3 py-3 transition-all duration-500 ${!changePayment ? "shadow-[0_-2px_0_0_#C25C5C] w-[50%]" : "shadow-[0_-2px_0_0_#eeeeee]"} cursor-pointer`} onClick={changeMethod}>
                        <h2 className={`my-auto text-base ${!changePayment ? "font-semibold" : "font-normal"} ${workSans.className} text-[#424b4a] payment-tag`}>Credit Card</h2>

                        <div className="flex gap-2">
                            <Image src={Visa} alt="Visa" className="w-[30px] payment-logo" />
                            <Image src={Mastercard} alt="Mastercard" className="w-[30px] payment-logo" />
                        </div>
                    </div>

                    <div className={`flex justify-between w-[50%] py-3 pl-3 transition-all duration-500 ${changePayment ? "shadow-[0_-2px_0_0_#C25C5C] w-[50%]" : "shadow-[0_-2px_0_0_#eeeeee]"} cursor-pointer`} onClick={changeMethod}>
                        <h2 className={`my-auto text-base ${changePayment ? "font-semibold" : "font-normal"} ${workSans.className} text-[#424b4a] payment-tag`}>Wallet</h2>

                        <div className="flex gap-2">
                            <Image src={Paypal} alt="Paypal" className="w-[30px] payment-logo" />
                            <Image src={Momo} alt="Momo" className="w-[30px] payment-logo" />
                        </div>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {!changePayment ? <motion.form
                                            key="content1"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.4 }}
                                            className="flex flex-col gap-5">
                                            <div className="flex flex-col gap-5">
                                                <label className={`${workSans.className} text-[#424b4a] font-bold`}>Cardholder Name: <span className="text-[red]">*</span></label>
                                                <input className={`bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 text-[#424b4a] font-normal ${workSans.className}`}></input>
                                            </div>

                                            <div className="flex flex-col gap-5">
                                                <label className={`${workSans.className} text-[#424b4a] font-bold`}>Card Number: <span className="text-[red]">*</span></label>
                                                <input className={`bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 text-[#424b4a] font-normal ${workSans.className}`}></input> 
                                            </div>

                                            <div className="flex justify-between" id="credit-container">
                                                <div className="flex flex-col gap-5 justify-between w-[40%]" id="expiration-date">
                                                    <label className={`${workSans.className} text-[#424b4a] font-bold`}>Expiration Date: <span className="text-[red]">*</span></label>
                                                    <div className="flex gap-5">
                                                        <input placeholder="DD" className={`bg-[white] w-[6ch] h-[50px] px-3 border border-gray-300 border-opacity-50 text-[#424b4a] font-normal ${workSans.className} placeholder:text-center text-center`} maxLength={2}></input>
                                                        <p className="my-auto text-[30px]">/</p>
                                                        <input placeholder="YY" className={`bg-[white] w-[6ch] h-[50px] px-3 border border-gray-300 border-opacity-50 text-[#424b4a] font-normal ${workSans.className} placeholder:text-center text-center`} maxLength={2}></input>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col gap-5 w-[40%]" id="cvv">
                                                    <label className={`${workSans.className} text-[#424b4a] font-bold`}>CVV <span className="text-[red]">*</span></label>
                                                    <input placeholder="CVV" className={`bg-[white] w-[100%] h-[50px] px-3 border border-gray-300 border-opacity-50 text-[#424b4a] font-normal ${workSans.className}`} maxLength={3}></input>
                                                </div>
                                            </div>

                                            <button type="submit" className={`text-base w-[50%] mx-auto py-3 px-5 text-center border banner-p text-[#C25C5C] border-[#C25C5C] font-medium ${workSans.className} hover:bg-[#C25C5C] hover:text-white delay-75 duration-300 flex justify-center items-center rounded-3xl`} id="submit">Add Card</button>
                                        </motion.form> 
                                        : 
                                        
                                        <motion.div
                                                key="content1"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.4 }}
                                                className="w-[100%] mx-auto flex flex-col gap-3 bill-card payment-button">
                                                <button className="flex w-[100%] py-5 px-5 gap-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl">
                                                    <Image src={Zalopay} className="w-[30px]" alt="Zalopay" />
                                                    <p className={`text-[16px] my-auto ${workSans.className} font-medium text-[#424b4a]`}>Zalopay</p>
                                                </button>

                                                <button className="flex w-[100%] py-5 px-5 gap-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl">
                                                    <Image src={Momo} className="w-[30px]" alt="Momo Icon" />
                                                    <p className={`text-[16px] my-auto ${workSans.className} font-medium text-[#424b4a]`}>Momo</p>
                                                </button>

                                                <button className="flex w-[100%] py-5 px-5 gap-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl">
                                                    <Image src={Paypal} className="w-[30px]" alt="Paypal" />
                                                    <p className={`text-[16px] my-auto ${workSans.className} font-medium text-[#424b4a]`}>Paypal</p>
                                                </button>
                                            </motion.div>}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}