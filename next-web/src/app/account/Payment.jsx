import Momo from "../../../public/momo.svg"
import Zalopay from "../../../public/zalopay.svg"
import Paypal from "../../../public/paypal.svg"
import Cancel from "../../../public/cancel.svg"
import Image from "next/image";
import "./Payment.css"

function Payment() {
    return (
        <section className="w-[60%] mt-5 p-5 flex flex-col gap-5 rounded-2xl border border-gray-300 border-opacity-50 mb-10" id="payment-section">
            <h2 className="text-[25px] pb-3 border-b">Payment Methods</h2>
            <p>Your Cards & Wallets</p>

            <div className="flex flex-col gap-5">
                <div className="flex justify-between h-[80px] p-3 border border-gray-300 border-opacity-50 rounded-3xl">
                    <div className="flex gap-5">
                        <Image src={Momo} alt="Momo" className="w-[50px] payment-logo"/>
                        <p className="my-auto">Momo</p>
                    </div>
                    <Image src={Cancel} alt="Cancel" className="w-[25px] cancel-logo" />
                </div>

                <div className="flex justify-between h-[80px] p-3 border border-gray-300 border-opacity-50 rounded-3xl">
                    <div className="flex gap-5">
                        <Image src={Zalopay} alt="Zalopay" className="w-[50px] my-auto payment-logo"/>
                        <p className="my-auto">Zalopay</p>
                    </div>
                    <Image src={Cancel} alt="Cancel" className="w-[25px] cancel-logo" />
                </div>

                <div className="flex justify-between h-[80px] p-3 border border-gray-300 border-opacity-50 rounded-3xl">
                    <div className="flex gap-5">
                        <Image src={Paypal} alt="Paypal" className="w-[50px] payment-logo"/>
                        <p className="my-auto">Paypal</p>
                    </div>
                    <Image src={Cancel} alt="Cancel" className="w-[25px] cancel-logo" />
                </div>
            </div>

            <button className="border border-[#C25C5C] text-[#C25C5C] rounded-2xl w-[100%] py-3 px-5 mx-auto">Add New Payment Method</button>
        </section>
    );
}

export default Payment;