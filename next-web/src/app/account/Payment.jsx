import Momo from "../../../public/momo.svg"
import Zalopay from "../../../public/zalopay.svg"
import Paypal from "../../../public/paypal.svg"
import Cancel from "../../../public/cancel.svg"
import Image from "next/image";
import "./Payment.css"
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function Payment() {
    return (
        <section className="w-[60%] mt-5 p-5 flex flex-col gap-5 rounded-2xl border border-gray-300 border-opacity-50 mb-10" id="payment-section">
            <h2 className="text-[25px] pb-3 border-b border-black font-medium text-[#C25C5C]">Payment Methods</h2>
            <p className={`${workSans.className} font-bold text-[#424b4a]`}>Your Cards & Wallets</p>

            <div className="flex flex-col gap-5">
                <div className="flex justify-between h-[80px] p-3 border border-gray-300 border-opacity-50 rounded-3xl">
                    <div className="flex gap-5">
                        <Image src={Momo} alt="Momo" className="w-[50px] payment-logo"/>
                        <p className={`my-auto ${workSans.className} font-medium text-[#424b4a]`}>Momo</p>
                    </div>
                    <Image src={Cancel} alt="Cancel" className="w-[20px] cancel-logo" />
                </div>

                <div className="flex justify-between h-[80px] p-3 border border-gray-300 border-opacity-50 rounded-3xl">
                    <div className="flex gap-5">
                        <Image src={Zalopay} alt="Zalopay" className="w-[50px] my-auto payment-logo"/>
                        <p className={`my-auto ${workSans.className} font-medium text-[#424b4a]`}>Zalopay</p>
                    </div>
                    <Image src={Cancel} alt="Cancel" className="w-[20px] cancel-logo" />
                </div>

                <div className="flex justify-between h-[80px] p-3 border border-gray-300 border-opacity-50 rounded-3xl">
                    <div className="flex gap-5">
                        <Image src={Paypal} alt="Paypal" className="w-[50px] payment-logo"/>
                        <p className={`my-auto ${workSans.className} font-medium text-[#424b4a]`}>Paypal</p>
                    </div>
                    <Image src={Cancel} alt="Cancel" className="w-[20px] cancel-logo" />
                </div>
            </div>

            <button className={`text-base w-1/1 py-3 px-5 text-center border banner-p text-[#C25C5C] rounded-3xl mx-auto border-[#C25C5C] font-medium ${workSans.className} hover:bg-[#C25C5C] hover:text-white delay-75 duration-300 flex justify-center items-center`}>Add New Payment Method</button>
        </section>
    );
}

export default Payment;