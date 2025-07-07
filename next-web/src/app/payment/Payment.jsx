import { CloseCircleOutlined } from "@ant-design/icons"
import Image from "next/image";
import Visa from "../../../public/visa.svg"
import Mastercard from "../../../public/mastercard.svg"
import Paypal from "../../../public/paypal.svg"
import Momo from "../../../public/momo.svg"
import Zalopay from "../../../public/zalopay.svg"

export default function PaymentMethod() {
    return  (
        <section className="h-screen w-[100%] fixed bg-[#00000066] top-0 z-50 flex justify-center">
            <div className="bg-white w-[50%] h-auto my-auto rounded-2xl p-5 flex flex-col gap-5">
                <div className="w-[100%] text-right">
                    <CloseCircleOutlined />
                </div>

                <div className="flex">
                    <div className="flex gap-3 w-[50%] pl-3 border-t-2 border-[#C25C5C] pt-3">
                        <h2 className="my-auto relative">Credit Card</h2>

                        <div className="flex gap-2 relative">
                            <Image src={Visa} alt="Visa" className="w-[30px]" />
                            <Image src={Mastercard} alt="Mastercard" className="w-[30px]" />
                        </div>
                    </div>

                    <div className="flex gap-3 w-[50%] py-5 pl-3">
                        <h2 className="my-auto">Wallet</h2>

                        <div className="flex gap-2">
                            <Image src={Paypal} alt="Paypal" className="w-[30px]" />
                            <Image src={Momo} alt="Momo" className="w-[30px]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}